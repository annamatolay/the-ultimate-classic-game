package scene

import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.ui.*
import com.soywiz.korge.view.*
import com.soywiz.korim.color.*
import utils.*

class MenuScene() : Scene() {
    override suspend fun Container.sceneInit() {
        text("Press [SPACE] when you hit one of the door to launch a game\n\n" +
                "Have fun and Thanks for playing! <3\n\n\n\n" +
                "So BIG thanks, eternal life & free (blank) ammo for:\n\n" +
                "DESIGN: Borbala Matolay - one of my sister\n\n" +
                "ANIMATIONS: (mostly) Bernadett Toth & Andras Matolay - my mother & father\n\n" +
                "TRANSLATION: Vivien Karacyonyi - my favourite friend (don't tell to the others :P)\n\n" +
                "CODE CONTRIBUTION: Gabor Varga who made the PONG much better and cleaner\n\n" +
                "KorGE Team to make this possible. I'm looking forward to the next one.").position(10.0, 10.0)

        textButton(256.0, 32.0, Colors.BLACK.hexString) {
            text = "MAIN SCREEN"
            position(views.actualVirtualWidth / 2 - 128, views.actualVirtualHeight / 2 - 64)
            onClick {
                sceneContainer.changeToAsync<TestScene>()
            }
        }

        textButton(256.0, 32.0, Colors.BLACK.hexString) {
            text = "STORY"
            position(views.actualVirtualWidth / 2 - 128, views.actualVirtualHeight / 2)
            onClick {
                sceneContainer.changeToAsync<StoryScene>()
            }
        }

        textButton(256.0, 32.0, Colors.BLACK.hexString) {
            text = "EXIT"
            position(views.actualVirtualWidth / 2 - 128, views.actualVirtualHeight / 2 + 64)
            onClick {
                views.gameWindow.close()
            }
        }
    }
}
