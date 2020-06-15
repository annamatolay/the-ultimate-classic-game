import com.soywiz.korau.sound.*
import com.soywiz.korge.*
import com.soywiz.korge.scene.*
import com.soywiz.korinject.*
import com.soywiz.korio.file.std.*
import com.soywiz.korma.geom.*
import pong.Paddle
import scene.*
import kotlin.reflect.*

suspend fun main() = Korge(config = Korge.Config(module = GameModule))

object GameModule : Module() {
    override val mainScene: KClass<out Scene> = MainScene::class

    override val title: String = "The ULTIMATE Classic Game"
    override val size: SizeInt = SizeInt(1240, 720)

    override suspend fun init(injector: AsyncInjector): Unit =
            injector.run {
                val music = resourcesVfs["music/WHERE IS MY MIND - NIMINO REMIX CAFFEINE BEATS [COPYRIGHT FREE].mp3"].readSound()
                mapPrototype { MainScene(music) }
                mapPrototype { MenuScene() }
                mapPrototype { StoryScene(music) }
                mapPrototype { PongScene(Paddle(), Paddle()) }
                mapPrototype { FakeSpaceInvaderScene() }
                mapPrototype { PacManScene() }
            }
}
