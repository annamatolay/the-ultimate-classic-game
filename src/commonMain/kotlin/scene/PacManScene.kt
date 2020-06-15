package scene

import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.format.*
import com.soywiz.korio.file.std.*

class PacManScene : Scene() {
    override suspend fun Container.sceneInit() {
        image(resourcesVfs["pacman/pman_sprite.png"].readBitmap())
        text("COMING SOON").position(views.actualVirtualWidth / 2, views.actualVirtualHeight / 2)
    }
}
