package scene

import com.soywiz.klock.*
import com.soywiz.korev.*
import com.soywiz.korge.input.*
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korge.view.addFixedUpdater
import com.soywiz.korim.format.*
import com.soywiz.korio.file.std.*
import model.*
import utils.*

class TestScene(
) : Scene() {
    private val player = Player()
    private var isOpened = false

    override suspend fun Container.sceneInit() {
//        views.gameWindow.fullscreen = true
        showMenuListener(sceneContainer)
        image(resourcesVfs["bg_varia.png"].readBitmap())
        val title = image(resourcesVfs["title.png"].readBitmap())
        val door = sprite(SpriteAnimation(
                resourcesVfs["doors/door1.png"].readBitmap(),
                223,
                200,
                columns = 5
        )) {
            position(views.actualVirtualWidth / 2, player.y - 45)
            visible = false
        }
        val headOpened = image(resourcesVfs["character/head_opened.png"].readBitmap()) { visible = false }
        val headSprite = sprite(SpriteAnimation(
                resourcesVfs["character/head_sprite_sheet.png"].readBitmap(),
                1240,
                720,
                rows = 3,
                columns = 5
        ))
        val instruction =
                text("PRESS [SPACE] TO CONTINUE\nAND [ESC] FOR MENU & HELP").position(10.0, 10.0)


        player.actions = listOf(
                Character.Action.Look.Backward.apply {
                    image = image(resourcesVfs["character/boss.png"].readBitmap()) {
                        visible = false
                        position(player.x, player.y)
                    }
                },
                Character.Action.Move.Forward.apply {
                    sprite = sprite(
                            SpriteAnimation(resourcesVfs["character/character_moving_forward.png"].readBitmap(), 40, 150, columns = 5)
                    ) {
                        visible = false
                        position(player.x, player.y)
                        addFixedUpdater {
                            keys {
                                onKeyDown {
                                    if (it.key == Key.SPACE)
                                        when {
                                            collidesWith(door) -> {
                                                door.playAnimation()
                                                door.onAnimationCompleted { door.setFrame(0) }
                                                door.onAnimationCompleted { sceneContainer.changeToAsync<PongScene>() }
                                            }
                                        }
                                }
                            }
                        }
                    }
                }
        )

        keys {
            onKeyDown {
                when (it.key) {
                    Key.LEFT -> {
                        player.actions[0].image.visible = true
                        (player.actions[1] as Character.Action.Move).sprite.visible = false
                    }
                    Key.RIGHT -> {
                        player.actions[0].image.visible = false
                        (player.actions[1] as Character.Action.Move).sprite.apply {
                            visible = true
                            if (this.visible && player.x < player.maxPosX) {
                                player.x += 10
                                player.actions[0].image.x = player.x
                                (player.actions[1] as Character.Action.Move).sprite.apply {
                                    playAnimation(spriteDisplayTime = 0.1.seconds)
                                    onAnimationStarted {
                                        visible = true
                                    }
                                    onAnimationCompleted {
                                        setFrame(0)
                                    }
                                    this.x = player.x
                                }
                            }
                        }
                    }
                    Key.SPACE -> {
                        if (!isOpened) {
                            instruction.visible = false
                            title.visible = false
                            headSprite.apply {
                                playAnimation(spriteDisplayTime = 0.15.seconds)
                                onAnimationCompleted {
                                    headSprite.visible = false
                                    headOpened.visible = true
                                    door.visible = true
                                    (player.actions[1] as Character.Action.Move).sprite.visible = true
                                    door.visible = true
                                }
                            }
                            isOpened = true
                        }
                    }
                    else -> Unit
                }
//                when(it.key) {
//                    Key.LEFT -> player.turn()
//                    Key.RIGHT -> player.turn(false)
//                    else -> Unit
//                }
            }
        }
    }

    override suspend fun sceneDestroy() {
        super.sceneDestroy()
        views.gameWindow.fullscreen = false
    }
}
