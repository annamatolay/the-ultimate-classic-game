package scene

import com.soywiz.klock.TimeSpan
import com.soywiz.korev.*
import com.soywiz.korge.input.*
import com.soywiz.korge.scene.*
import com.soywiz.korge.view.*
import com.soywiz.korim.color.*
import pong.Ball
import pong.Paddle
import utils.*
import kotlin.math.*
import kotlin.random.*

class PongScene(private val playerPaddle: Paddle, private val computerPaddle: Paddle) : Scene() {

    sealed class PongGameStates {
        object Starting : PongGameStates() // The game is just starting and some help text will be shown. Ball will not be moving
        object Playing : PongGameStates()  // In this state the ball will be moving and player can score against the computer
        object Scored : PongGameStates()   // In this state the game will pause and show that a goal was scored
    }

    private var playState: PongGameStates = PongGameStates.Starting
    private val ball = Ball()
    private var scoreLeft = 0
    private var scoreRight = 0

    private var paddlePosYAtStart: Double = 0.0
    private var ballPosXAtStart: Double = 0.0
    private var ballPosYAtStart: Double = 0.0

    private fun initPongScene(sceneView: Views) {
        paddlePosYAtStart = (sceneView.actualVirtualHeight / 2) - 50.0
        ballPosXAtStart = (sceneView.actualVirtualWidth / 2) - 10.0
        ballPosYAtStart = (sceneView.actualVirtualHeight / 2) + 10.0
    }

    override suspend fun Container.sceneInit() {
        initPongScene(views)
        addFpsText(views.gameWindow)
        showMenuListener(sceneContainer)

        // FIXME: this doesn't appear on screen for some reason
        text("") {
            position(10, 100)
            addUpdater {
                visible = (playState is PongGameStates.Starting)

                //TODO: change it when story time
                if (playState == PongGameStates.Starting) {
                    text = "Welcome to the PONG Game!\n\n" +
                            "-- To move the your Paddle, use the keys [W] and [S] or UP] and [DOWN].\n\n" +
                            "-- To open the Menu, use [ESC]\n\n" +
                            "-- To Start the game, use [SPACE]"
                } else if (playState == PongGameStates.Scored) {
                    text = "Press [SPACE] for the next round!"
                }
            }
        }

        // The score of the player on the Left side
        text("0") {
            //            textSize = 24.0
            position(views.actualVirtualWidth / 4, views.actualVirtualHeight / 2)
            addUpdater { text = scoreLeft.toString() }
        }

        // The score of the player on the Right side
        text("0") {
            position(views.actualVirtualWidth * 3 / 4, views.actualVirtualHeight / 2)
            addUpdater { text = scoreRight.toString() }
        }

        // The left paddle controlled by user
        val leftPaddle = solidRect(playerPaddle.width, playerPaddle.height, Colors.RED) {
            position(playerPaddle.distanceFromWall, paddlePosYAtStart)
            addUpdater { playerPaddleController(views, this, playerPaddle) }
        }

        //TODO: create PRO bot, who always hits back the ball

        // The right paddle controlled by BOT FIXME: dummy bot needs to be polished
        val rightPaddle = solidRect(computerPaddle.width, computerPaddle.height, Colors.BLUE) {
            position(views.actualVirtualWidth - computerPaddle.distanceFromWall - computerPaddle.width, paddlePosYAtStart)
            addUpdater { computerPaddleController(views, this, computerPaddle) }
        }

        // The ball
        circle(ball.radius, Colors.WHITE) {
            position(ballPosXAtStart, ballPosYAtStart)
            resetRound(this, true)
            addUpdater { timeSpan -> ballController(views, timeSpan, this, leftPaddle, rightPaddle) }
        }

        /* Add the keys needed to run the game*/
        keys {
            onKeyDown {
                when (it.key) {
                    Key.SPACE -> playState = PongGameStates.Playing
                    else -> {
                    }
                }
            }
        }
    }

    private fun resetRound(ballCircle: Circle, isInit: Boolean = false) {
        ballCircle.x = ballPosXAtStart
        ballCircle.y = ballPosYAtStart

        ball.speed = ball.initialSpeed
        ball.angle = Random.nextDouble() * 2 * PI

        if (!isInit)
            playState = PongGameStates.Scored // Game will be paused till players start the next round.
    }

    private fun ballController(sceneView: Views, timeSpan: TimeSpan, ballCircle: Circle, leftPaddle: View, rightPaddle: View) {
        if (playState == PongGameStates.Playing) {
            // Convert the ball's velocity vector (speed, angle) to a point to move to
            ballCircle.x += ball.speed * cos(ball.angle) * timeSpan.seconds
            ballCircle.y += ball.speed * sin(ball.angle) * timeSpan.seconds

            // if the ball hits the paddles, flip its direction and increase speed
            if ((ballCircle.x < leftPaddle.x + 10 && ballCircle.y > leftPaddle.y && ballCircle.y < leftPaddle.y + 100) ||
                    ((ballCircle.x > rightPaddle.x - 20) && (ballCircle.y > rightPaddle.y) && (ballCircle.y < (rightPaddle.y + 100)))) {
                ball.speed += ball.speedIncrement
                ball.angle = PI - ball.angle
            }

            // If ball hits the walls, flip its direction and increase speed
            if ((ballCircle.y < 0) || (ballCircle.y > (sceneView.actualVirtualHeight - 20))) {
                ball.speed += 10
                ball.angle *= -1
            }

            // If ball goes through the vertical walls/goalpost, handle scoring and reset the round
            if (ballCircle.x < -20) {
                /* Reset the Ball */
                resetRound(ballCircle)
                scoreRight++
                //scoredYellText.text = "Right SCORED!!!" TODO: figure out when story time
            } else if (ballCircle.x > sceneView.actualVirtualWidth) {
                resetRound(ballCircle)
                scoreLeft++
                //scoredYellText.text = "Left SCORED!!!" TODO: figure out when story time
            }
        }
    }

    private fun playerPaddleController(sceneView: Views, paddleRectView: View, paddle: Paddle) {
        val isUpPressed = (sceneView.input.keys[Key.W] || sceneView.input.keys[Key.UP])
        val isDownPressed = (sceneView.input.keys[Key.S] || sceneView.input.keys[Key.DOWN])

        if (isUpPressed && (paddleRectView.y > 0)) {
            paddleRectView.y -= paddle.moveSpeed
        } else if (isDownPressed && (paddleRectView.y < (sceneView.actualVirtualHeight - paddle.height))) {
            paddleRectView.y += paddle.moveSpeed
        }
    }

    private fun computerPaddleController(sceneView: Views, paddleRectView: View, paddle: Paddle) {
        var frameCounter = 0

        if (playState is PongGameStates.Playing) {
            ++frameCounter
            var isGoUp = Random.nextBoolean()
            if (frameCounter % 10 == 0) {
                isGoUp = Random.nextBoolean()
            }

            if (isGoUp && (paddleRectView.y > 0)) {
                paddleRectView.y -= paddle.moveSpeed
            } else if (!isGoUp && (paddleRectView.y < (sceneView.actualVirtualHeight - paddle.height))) {
                paddleRectView.y += paddle.moveSpeed
            }
        }
    }
}
