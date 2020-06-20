import com.soywiz.korau.sound.*
import com.soywiz.korge.*
import com.soywiz.korge.scene.*
import com.soywiz.korim.color.*
import com.soywiz.korinject.*
import com.soywiz.korio.file.std.*
import com.soywiz.korma.geom.*
import pong.Paddle
import scene.*
import kotlin.reflect.*

suspend fun main() = Korge(config = Korge.Config(module = GameModule))

object GameModule : Module() {
    override val mainScene: KClass<out Scene> = TestScene::class

    override val title: String = "The ULTIMATE Classic Game"
    override val size: SizeInt = SizeInt(1240, 720)
    override val bgcolor = Colors.BLACK
    override val icon = "/aliens/alien1.png"

    override suspend fun init(injector: AsyncInjector): Unit =
            injector.run {
                mapPrototype { TestScene() }

//                val music = resourcesVfs["music/WHERE IS MY MIND - NIMINO REMIX CAFFEINE BEATS [COPYRIGHT FREE].mp3"].readSound()
//                mapPrototype { MainScene(music) }
                mapPrototype { MenuScene() }
                mapPrototype { StoryScene() }
                mapPrototype { PongScene(Paddle(), Paddle()) }
//                mapPrototype { FakeSpaceInvaderScene() }
//                mapPrototype { PacManScene() }
            }
}
