package scene

import com.soywiz.klock.TimeSpan
import com.soywiz.korau.sound.*
import com.soywiz.korev.Key
import com.soywiz.korge.input.keys
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korio.file.std.*
import model.pong.Ball
import model.pong.Paddle
import utils.addFpsText
import utils.showMenuListener
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin
import kotlin.random.Random

class PongScene(private val playerPaddle: Paddle, private val computerPaddle: Paddle) : BaseScene() {


    sealed class PongGameStates {
        object Starting : PongGameStates() // The game is just starting and some help text will be shown. Ball will not be moving
        object Playing : PongGameStates()  // In this state the ball will be moving and player can score against the computer
        object Scored : PongGameStates()   // In this state the game will pause and show that a goal was scored
    }

    private var playState: PongGameStates = PongGameStates.Starting
    private val ball = Ball()
    private var leftPlayerScore = 0
    private var rightPlayerScore = 0

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
        sounds = listOf(
                resourcesVfs["music/pong/blip_d.wav"].readSound(),
                resourcesVfs["music/pong/blup_d.wav"].readSound(),
                resourcesVfs["music/pong/blap_d.wav"].readSound()
        )

        text("") {
            position(10, 100)
            addUpdater {
                when (playState) {
                    //TODO: change it when story time
                    is PongGameStates.Starting -> {
                        visible = true
                        text = "Welcome to the PONG Game!\n\n" +
                                "-- To move the your Paddle, use the keys [W] and [S] or UP] and [DOWN].\n\n" +
                                "-- To open the Menu, use [ESC]\n\n" +
                                "-- To Start the game, use [SPACE]"
                    }
                    is PongGameStates.Scored -> {
                        visible = true
                        text = "Press [SPACE] for the next round!"
                    }
                    else -> {
                        visible = false
                    }
                }
            }
        }

        // The score of the player on the Left side
        text("0") {
            //            textSize = 24.0
            position(views.actualVirtualWidth / 4, views.actualVirtualHeight / 2)
            addUpdater { text = leftPlayerScore.toString() }
        }

        // The score of the player on the Right side
        text("0") {
            position(views.actualVirtualWidth * 3 / 4, views.actualVirtualHeight / 2)
            addUpdater { text = rightPlayerScore.toString() }
        }

        // The left paddle controlled by user
        val leftPaddle = solidRect(playerPaddle.width, playerPaddle.height, Colors.RED) {
            position(playerPaddle.distanceFromWall, paddlePosYAtStart)
            addUpdater { playerPaddleController(views, this, playerPaddle) }
        }

        // The right paddle controlled by computer
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

    override suspend fun sceneAfterInit() {
//        musicSrcTemplates = initMusic()
        super.sceneAfterInit()
    }

    private fun initMusic(): List<String> {
        var templateIndex = ""
        val musicSrcTemplate = listOf(
                "music/pong/blip_$templateIndex.wav",
                "music/pong/blup_$templateIndex.wav",
                "music/pong/blap_$templateIndex.wav"
        )

        val tmp = mutableListOf<String>()
        (0..2).forEach { index ->
            musicSrcTemplate.forEach { musicPath ->
                templateIndex = when (index) {
                    0 -> "d"
                    1 -> "e"
                    2 -> "f"
                    else -> ""
                }
                tmp.add(musicPath)
            }
        }
        return tmp.toList()
    }

    private fun resetRound(ballCircle: Circle, isInit: Boolean = false) {
        ball.position.x = ballPosXAtStart
        ball.position.y = ballPosYAtStart
        ball.speed = ball.initialSpeed
        ball.angle = Random.nextDouble(0.4, 0.6) * 2 * PI

        ballCircle.x = ball.position.x
        ballCircle.y = ball.position.y

        if (!isInit) {
            playState = PongGameStates.Scored // Game will be paused till players start the next round.
        }
    }

    private fun ballController(
            sceneView: Views,
            timeSpan: TimeSpan,
            ballCircle: Circle,
            leftPaddle: View,
            rightPaddle: View
    ) {
        if (playState == PongGameStates.Playing) {
            ball.position.x += ball.speed * cos(ball.angle) * timeSpan.seconds
            ball.position.y += ball.speed * sin(ball.angle) * timeSpan.seconds
            ballCircle.x = ball.position.x
            ballCircle.y = ball.position.y
            channel.volume = 1.2

            if (ballCircle.collidesWith(listOf(leftPaddle, rightPaddle))) {
                sounds[0].play()
                // TODO: define max speed for ball?
                ball.speed += ball.speedIncrement
                ball.angle = PI - ball.angle
            }

            val isWallHit = (ballCircle.y < 0) || (ballCircle.y > (sceneView.actualVirtualHeight - 20))
            if (isWallHit) {
                sounds[1].play()
                ball.speed += 10
                ball.angle *= -1
            }

            val isLeftPlayerGoal = ballCircle.x > sceneView.actualVirtualWidth
            val isRightPlayerGoal = ballCircle.x < -20

            if (isLeftPlayerGoal) {
                resetRound(ballCircle)
                leftPlayerScore++
                sounds[2].play(PlaybackTimes.ONE)
                //scoredYellText.text = "Left SCORED!!!" TODO: figure out when story time
            } else if (isRightPlayerGoal) {
                resetRound(ballCircle)
                rightPlayerScore++
                sounds[2].play(PlaybackTimes.ONE)
                //scoredYellText.text = "Right SCORED!!!" TODO: figure out when story time
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
        if (playState is PongGameStates.Playing) {
            val isBallAbovePaddle = ball.position.y < paddleRectView.y
            val isBallBelowPaddle = ball.position.y > (paddleRectView.y + paddle.height)

            val isPadBelowTopWall = paddleRectView.y > 0
            val isPadAboveBottomWall = (paddleRectView.y < (sceneView.actualVirtualHeight - paddle.height))

            if (isPadBelowTopWall && isPadAboveBottomWall) {
                if (isBallAbovePaddle) {
                    paddleRectView.y -= paddle.moveSpeed
                } else if (isBallBelowPaddle) {
                    paddleRectView.y += paddle.moveSpeed
                }
            } else {
                if (isPadBelowTopWall) {
                    paddleRectView.y -= paddle.moveSpeed
                } else {
                    paddleRectView.y += paddle.moveSpeed
                }
            }
        }
    }
}
