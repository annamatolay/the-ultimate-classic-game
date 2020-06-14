package scene

import com.soywiz.korev.*
import com.soywiz.korge.input.*
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.color.*
import com.soywiz.korim.format.*
import com.soywiz.korio.file.std.*
import utils.*
import kotlin.math.*

class FakeSpaceInvaderScene : Scene() {

    // FIXME: update game state when player or all aliens dead
    private var gameState: GameState = GameState.Paused()
    private var playerLives = 3

    override suspend fun Container.sceneInit() {
        showMenuListener(sceneContainer)

        /**
         * Init aliens FIXME: destroy alien when ball hits
         */
        val aliens = listOf(
                image(resourcesVfs["aliens/alien1.png"].readBitmap()) { x += 200 },
                image(resourcesVfs["aliens/alien2.png"].readBitmap()) { x = views.virtualWidth / 3.0 },
                image(resourcesVfs["aliens/alien3.png"].readBitmap()) { x = views.virtualWidth / 2.0 - 20 },
                image(resourcesVfs["aliens/alien4.png"].readBitmap()) { x = views.virtualWidth / 3 * 2.0 },
                image(resourcesVfs["aliens/alien1.png"].readBitmap()) { x = views.virtualWidth - 220.0 }
        )


        /**
         * Init lives for player
         */
        //FIXME: finish lives implementation
        createPlayerLive(
                views.actualVirtualWidth.toDouble() - 50,
                views.actualVirtualHeight.toDouble() - 10
        )

        /**
         * Init space ship
         */
        val size = 10.0
        val color = Colors.WHITE
        val inputKeys = views.input.keys
        val shipPosX = views.actualVirtualWidth / 2 - 22 + size * 5
        val shipPosY = views.actualVirtualHeight - 20.0
        val ship = createSpaceShip(size, color, shipPosX, shipPosY, inputKeys)

        /**
         * Init ball
         */
        var angle = GameBall.defaultAngle
        var speed = GameBall.defaultSpeed
        val ball = circle(GameBall.radius, Colors.WHITE) {
            val ballPosXAtStart = views.actualVirtualWidth / 2 - 10.0
            val ballPosYAtStart = views.actualVirtualHeight / 2 + 10.0

            position(ballPosXAtStart, ballPosXAtStart)


            val resetRound = fun() {
                x = ballPosXAtStart
                y = ballPosYAtStart
                speed = GameBall.defaultSpeed
                angle = GameBall.defaultAngle

                gameState = GameState.Paused()
            }

            var isNotStarted = true
            addUpdater {
                if (gameState is GameState.Running) {

                    if (isNotStarted) {
                        x += speed * it.seconds
                        y += speed * it.seconds
                        isNotStarted = false
                    } else {
                        x += speed * cos(angle) * it.seconds
                        y += speed * sin(angle) * it.seconds
                    }


                    // flip the ball on left and right side of the screen //FIXME: optimize right side
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

    // TODO: merge with #createPlayerLive function
    @Suppress("DuplicatedCode")
    private fun Container.createSpaceShip(size: Double, color: RGBA, shipPosX: Double, shipPosY: Double, inputKeys: InputKeys): SolidRect {
        return solidRect(size * 15, size, color) {
            position(shipPosX, shipPosY)
            solidRect(size, size, Colors.WHITE) { x += size * 7; y -= size * 3 }
            solidRect(size * 9, size * 2, Colors.WHITE) { x += size * 3; y -= size * 2 }
            addFixedUpdater {
                //FIXME: block player at the sides of screen
                if (gameState is GameState.Running && x > 0) {
                    if (inputKeys[Key.LEFT]) x -= 10
                }
                if (gameState is GameState.Running && x < views.virtualWidth - width) {
                    if (inputKeys[Key.RIGHT]) x += 10
                }
            }
        }
    }

    @Suppress("DuplicatedCode")
    private fun Container.createPlayerLive(
            shipPosX: Double,
            shipPosY: Double,
            size: Double = 2.5,
            color: RGBA = Colors.RED
    ) = solidRect(size * 15, size, color) {
        position(shipPosX, shipPosY)
        solidRect(size, size, Colors.WHITE) { x += size * 7; y -= size * 3 }
        solidRect(size * 9, size * 2, Colors.WHITE) { x += size * 3; y -= size * 2 }
    }

}
