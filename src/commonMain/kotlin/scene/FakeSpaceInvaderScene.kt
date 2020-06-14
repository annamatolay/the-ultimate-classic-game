package scene

import com.soywiz.korev.*
import com.soywiz.korev.keys
import com.soywiz.korge.input.*
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.color.*
import com.soywiz.korim.format.*
import com.soywiz.korio.file.std.*
import utils.*
import kotlin.math.*
import kotlin.random.*

class FakeSpaceInvaderScene() : Scene() {

    // TODO: update game state when player or all aliens dead
    var gameState: GameState = GameState.Paused()

    override suspend fun Container.sceneInit() {
        showMenuListener(sceneContainer)

        /**
         * Init aliens TODO: destroy alien when ball hits
         */
        image(resourcesVfs["aliens/alien1.png"].readBitmap()).x += 200
        image(resourcesVfs["aliens/alien2.png"].readBitmap()).x = views.virtualWidth / 3.0
        image(resourcesVfs["aliens/alien3.png"].readBitmap()).x = views.virtualWidth / 2.0 - 20
        image(resourcesVfs["aliens/alien4.png"].readBitmap()).x = views.virtualWidth / 3 * 2.0
        image(resourcesVfs["aliens/alien1.png"].readBitmap()).x = views.virtualWidth - 220.0

        // init spaces ship
        var size = 10.0
        val color = Colors.WHITE
        val inputKeys = views.input.keys

        /**
         * Init space ship and player lives Todo: finish lives implementation
         *
         */
        val shipPosX = views.actualVirtualWidth / 2 - 22 + size * 5
        val shipPosY = views.actualVirtualHeight - 20.0
        val ship = createSpaceShip(size, color, shipPosX, shipPosY)
                .addFixedUpdater {
                    if (gameState is GameState.Running) {
                        if (inputKeys[Key.LEFT]) x -= 10
                        if (inputKeys[Key.RIGHT]) x += 10
                    }
                }

        createSpaceShip(
                2.0,
                Colors.RED,
                views.actualVirtualWidth.toDouble() - 50,
                views.actualVirtualHeight.toDouble() - 10
        )

        /**
         * Init ball
         */
        var angle = GameBall.defaultAngle
        val ball = circle(GameBall.radius, Colors.WHITE) {
            val ballPosXAtStart = views.actualVirtualWidth / 2 - 10.0
            val ballPosYAtStart = views.actualVirtualHeight / 2 + 10.0

            position(ballPosXAtStart, ballPosXAtStart)

            var speed = GameBall.defaultSpeed

            val resetRound = fun() {
                x = ballPosXAtStart
                y = ballPosYAtStart
                speed = GameBall.defaultSpeed
                angle = GameBall.defaultAngle

                gameState = GameState.Paused()
            }

            addUpdater {
                if (gameState is GameState.Running) {

                    x += speed * cos(angle) * it.seconds;
                    y += speed * sin(angle) * it.seconds;

                    // flip the ball on left and right side of the screen
                    if (x < 0 || x > views.actualVirtualWidth) {
                        speed += GameBall.speedIncrease
                        angle = PI - angle
                    }
                    // flip the ball on the the top
                    if (y < 0) {
                        speed += 10
                        angle *= -1
                    }

                    // lose health or game if the ball reach the bottom of the screen
                    if (y > views.actualVirtualHeight) resetRound()
                }
            }
        }
        keys {
            onKeyDown {
                if (it.key == Key.SPACE && gameState !is GameState.Running)
                    gameState = GameState.Running()
            }
        }
        ball.onCollision({ it == ship }) {
            speed += 0.3
            angle *= -1
        }
    }

    private fun Container.createSpaceShip(size: Double, color: RGBA, shipPosX: Double, shipPosY: Double) =
            solidRect(size * 11, size, color) {
                position(shipPosX, shipPosY)
                solidRect(size, size, Colors.WHITE) { x += size * 5; y -= size * 3 }
                solidRect(size * 9, size * 2, Colors.WHITE) { x += size; y -= size * 2 }
            }
}
