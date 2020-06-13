package scene

import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.ui.*
import com.soywiz.korge.view.*
import utils.*

class MenuScene() : Scene() {
    override suspend fun Container.sceneInit() {

        textButton(256.0, 32.0) {
            text = "MAIN SCREEN"
            position(views.actualVirtualWidth / 2 - 128, views.actualVirtualHeight / 2 - 64)
            onClick {
                println("Thanks for testing <3")
                sceneContainer.changeToAsync<MainScene>()
            }
        }

        textButton(256.0, 32.0) {
            text = "Exit"
            position(views.actualVirtualWidth / 2 - 128, views.actualVirtualHeight / 2)
            onClick {
                views.gameWindow.close()
            }
        }
    }
}
