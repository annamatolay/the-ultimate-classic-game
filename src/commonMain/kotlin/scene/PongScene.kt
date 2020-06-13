package scene

import com.soywiz.korev.*
import com.soywiz.korge.input.*
import com.soywiz.korge.scene.*
import com.soywiz.korge.view.*
import com.soywiz.korim.color.*
import utils.*
import kotlin.math.*
import kotlin.random.*

class PongScene() : Scene() {
    /* Define the various states that the game can be in */
    sealed class PongGameStates {
        object Starting : PongGameStates()   // The game is just starting and some helptext will be shown. Ball will not be moving
        object Playing : PongGameStates()    // in this state the ball will be moving and player can score against each other
        object Scored : PongGameStates()     // in this state the game will pause and show that a goal was cored
    }

    override suspend fun Container.sceneInit() {
        //TODO: Extract initialization
        var scoreLeft = 0
        var scoreRight = 0
        var paddleLeft: SolidRect
        var paddleRight: SolidRect
        var ball: Circle

        var playState: PongGameStates = PongGameStates.Starting

        /* Initialize the starting game state values */
        val paddlePosYAtStart = views.actualVirtualHeight / 2 - 50.0
        val ballPosXAtStart = views.actualVirtualWidth / 2 - 10.0
        val ballPosYAtStart = views.actualVirtualHeight / 2 + 10.0
        val ballSpeedAtStart = 200.0

        /* Initialize the variables to be used to define the paddle and ball size */
        val paddleWidth = 10.0
        val paddleHeight = 100.0
        val paddleDistanceFromWall = 10.0
        val paddleMoveSpeed = 10.0
        val ballRadius = 10.0
        val ballSpeedIncrease = 50.0

        addFpsText(views.gameWindow)
        showMenuListener(sceneContainer)

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

        // text to show the score of the player on the Left side
        text("0") {
            //            textSize = 24.0
            position(views.actualVirtualWidth / 4, views.actualVirtualHeight / 2)
            addUpdater {
                text = scoreLeft.toString()
            }
        }

        // text to show the score of the player on the Right side
        text("0") {
            position(views.actualVirtualWidth * 3 / 4, views.actualVirtualHeight / 2)
            addUpdater {
                text = scoreRight.toString()
            }
        }

        // the left paddle controlled by user
        paddleLeft = solidRect(paddleWidth, paddleHeight, Colors.RED) {
            position(paddleDistanceFromWall, paddlePosYAtStart)
            addUpdater {
                //TODO: Extract into Controller

                // move the paddle up or as long as it doesn't leaves the bounds of the game window
                val keys = views.input.keys
                if (keys[Key.W] && y > 0 || keys[Key.UP] && y > 0) {
                    y -= paddleMoveSpeed
                }
                if (keys[Key.S] && y < views.actualVirtualHeight - paddleHeight ||
                        keys[Key.DOWN] && y < views.actualVirtualHeight - paddleHeight) {
                    y += paddleMoveSpeed
                }
            }
        }

        //TODO: create PRO bot, who always hits back the ball

        // the right paddle controlled by BOT FIXME: dummy bot needs to be polished
        paddleRight = solidRect(paddleWidth, paddleHeight, Colors.BLUE) {
            position(views.actualVirtualWidth - paddleDistanceFromWall - paddleWidth, paddlePosYAtStart)
            var frameCounter = 0
            addUpdater {
                //TODO: Extract into Controller
                if (playState is PongGameStates.Playing) {
                    ++frameCounter
                    var isGoUp = Random.nextBoolean()
                    if (frameCounter % 10 == 0) {
                        isGoUp = Random.nextBoolean()
                    }

                    if (isGoUp && y > 0) {
                        y -= paddleMoveSpeed
                    }
                    if (!isGoUp && y < views.actualVirtualHeight - paddleHeight) {
                        y += paddleMoveSpeed
                    }
                }
            }
        }

        // the ball
        circle(ballRadius, Colors.WHITE) {
            position(ballPosXAtStart, ballPosYAtStart)
            //TODO: Extract initialization

            // define the mutable data defning the ball's state
            var spd = ballSpeedAtStart
            var ang = Random.nextDouble() * 2 * PI

            // function to reset the ball
            var resetRound = fun() {
                x = ballPosXAtStart
                y = ballPosYAtStart
                spd = ballSpeedAtStart
                ang = Random.nextDouble() * 2 * PI

                // Change game state to Scored. Game will be paused till players start the next round.
                playState = PongGameStates.Scored
            }

            addUpdater {
                //TODO: Extract into Controller

                // only move ball if the game is in Playing state
                if (playState == PongGameStates.Playing) {

                    // convert the ball's velocity vector (speed, angle) to a point to move to
                    x += spd * cos(ang) * it.seconds;
                    y += spd * sin(ang) * it.seconds;

                    // if the ball hits the paddles, flip its direction and increase speed
                    if ((x < paddleLeft.x + 10 && y > paddleLeft.y && y < paddleLeft.y + 100) ||
                            (x > paddleRight.x - 20 && y > paddleRight.y && y < paddleRight.y + 100)) {
                        spd += ballSpeedIncrease
                        ang = PI - ang
                    }

                    // if ball hits the walls, flip its direction and increase speed
                    if (y < 0 || y > views.actualVirtualHeight - 20) {
                        spd += 10
                        ang *= -1
                    }

                    // if ball goes through the vertical walls/goalpost, handle scoring and reset the round
                    if (x < -20) {
                        /* Reset the Ball */
                        resetRound()

                        // Update the score
                        scoreRight++
                        //scoredYellText.text = "Right SCORED!!!" TODO: figure out when story time
                    } else if (x > views.actualVirtualWidth) {
                        /* Reset the Ball */
                        resetRound()

                        // Update the score
                        playState = PongGameStates.Scored
                        scoreLeft++
                        //scoredYellText.text = "Left SCORED!!!" TODO: figure out when story time
                    }
                }
            }
        }

        /* Add the keys needed to run the game*/
        keys {
            onKeyDown {
                when (it.key) {
                    Key.SPACE -> playState = PongGameStates.Playing
                    else -> { }
                }
            }
        }
    }
}