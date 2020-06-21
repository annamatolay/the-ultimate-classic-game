import com.soywiz.korau.sound.*
import com.soywiz.korge.*
import com.soywiz.korge.scene.*
import com.soywiz.korim.color.*
import com.soywiz.korinject.*
import com.soywiz.korio.file.std.*
import com.soywiz.korma.geom.*
import model.pong.Paddle
import scene.*
import kotlin.reflect.*

suspend fun main() = Korge(config = Korge.Config(module = GameModule))

object GameModule : Module() {
    override val mainScene: KClass<out Scene> = MainScene2::class// FIXME!!! if you add Pong scene, then the music is fine, if not, then freeze

    override val title: String = "The ULTIMATE Classic Game"
    override val size: SizeInt = SizeInt(1240, 720)
    override val bgcolor = Colors.BLACK
    override val icon = "/aliens/alien1.png"

    override suspend fun init(injector: AsyncInjector): Unit =
            injector.run {
//                val birdWhistlingSound = resourcesVfs["music/song/bird-whistling_inspectorj.wav"].readSound()
                val bgMusic = resourcesVfs["music/song/where-is-my-mind_8-bit-universe.mp3"].readSound()
//                mapPrototype { MainScene(music) }
                mapPrototype { MainScene2(bgMusic) }
                mapPrototype { MenuScene() }
                mapPrototype { StoryScene(bgMusic) }
                mapPrototype { PongScene(Paddle(), Paddle()) }
//                mapPrototype { FakeSpaceInvaderScene() }
//                mapPrototype { PacManScene() }

            }
}
