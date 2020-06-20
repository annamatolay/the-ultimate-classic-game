package scene

import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.format.*
import com.soywiz.korio.file.std.*
import model.*

class TestScene(
) : Scene() {
    override suspend fun Container.sceneInit() {
        val title = image(resourcesVfs["title.png"].readBitmap())

        val player = Player()
        player.actions = listOf(
                Character.Action.LookBackWard.apply {
                    image = image(resourcesVfs["character/boss.png"].readBitmap()) {
                        position(player.startPosX, player.startPosY)
                        visible = false
                    }
                },
                Character.Action.Move.Forward.apply {
                    sprite = sprite(
                            SpriteAnimation(resourcesVfs["character_moving_forward.png"].readBitmap(), 40, 150, columns = 5)
                    ) { position(player.startPosX, player.startPosY) }
                }
        )
    }
}
