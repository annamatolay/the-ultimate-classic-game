import com.soywiz.korge.view.*
import com.soywiz.korim.color.*
import utils.*
import kotlin.math.*
import kotlin.random.*

class GameBall(
        private val ballPosXAtStart: Double = .0,
        private val ballPosYAtStart: Double = .0,
        private val gameState: GameState = GameState.Paused(),
        private val onGameRunning: () -> Unit,
        private val onGamePaused: () -> Unit = {}
//        private val defaultAngle: Double = Random.nextDouble() * 2 * PI // TODO: check
) {
     companion object {
         const val radius = 10.0
         const val speedIncrease = 50.0 // TODO: check for PONG
         const val defaultSpeed = 300.0
         val defaultAngle: Double = Random.nextDouble() * 2 * PI
     }
    private var currentSpeed = defaultSpeed

    fun Container.init() =
            circle(radius, Colors.WHITE) {
                position(ballPosXAtStart, ballPosYAtStart)
                addUpdater {
                    when (gameState) {
                        is GameState.Running -> onGameRunning()
                        is GameState.Paused -> onGamePaused()
                        GameState.Resetting -> reInit()
                    }
                }
            }

    fun Circle.reInit() {
        x = ballPosXAtStart
        y = ballPosYAtStart
        currentSpeed = defaultSpeed
    }
}