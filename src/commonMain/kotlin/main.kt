import com.soywiz.korge.*
import com.soywiz.korge.scene.*
import com.soywiz.korinject.*
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
                mapPrototype { MainScene() }
                mapPrototype { MenuScene() }
                mapPrototype { PongScene(Paddle(), Paddle()) }
                mapPrototype { FakeSpaceInvaderScene() }

                //resourcesVfs["music.mp3"].readMusic().playForever() TODO: comment out if you wanna hear a cool song
            }
}
