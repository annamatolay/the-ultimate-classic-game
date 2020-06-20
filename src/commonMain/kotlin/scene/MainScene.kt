package scene

import com.soywiz.klock.*
import com.soywiz.korau.sound.*
import com.soywiz.korev.*
import com.soywiz.korge.input.*
import com.soywiz.korge.scene.*
import com.soywiz.korge.view.*
import com.soywiz.korim.format.*
import com.soywiz.korio.file.std.*
import utils.*

class MainScene(private val bgMusic: NativeSound) : Scene() {
    private val charStartPosX = 255
    private val charMaxPosX = charStartPosX + 660
    private val charStartPosY = 390

    private var musicChannel: NativeSoundChannel? = null

    override suspend fun Container.sceneInit() {
        musicChannel = bgMusic.play()
//        val music = resourcesVfs["music/WHERE IS MY MIND - NIMINO REMIX CAFFEINE BEATS [COPYRIGHT FREE].mp3"].readMusic()
        showMenuListener(sceneContainer)
        image(resourcesVfs["bg_varia.png"].readBitmap())
        val title = image(resourcesVfs["title.png"].readBitmap())
//        image(resourcesVfs["credits.png"].readBitmap())

        val centerX = views.actualVirtualWidth / 2
        val centerY = views.actualVirtualHeight / 2

        /**
         * Doors
         */
        val door1 = sprite(SpriteAnimation(
                resourcesVfs["doors/door1.png"].readBitmap(),
                223,
                200,
                columns = 5
        )) {
            position(charStartPosX + 50, charStartPosY - 50)
            visible = false
        }
        val door2 = sprite(SpriteAnimation(
                resourcesVfs["doors/door2.png"].readBitmap(),
                223,
                200,
                columns = 5
        )) {
            position(centerX - 115, charStartPosY - 45)
            visible = false
        }
        val door3 = sprite(SpriteAnimation(
                resourcesVfs["doors/door3.png"].readBitmap(),
                223,
                200,
                columns = 5
        )) {
            position(charMaxPosX - 178, charStartPosY - 40)
            visible = false
        }

        /**
         * Character
         */
        //40x150
        val character = image(resourcesVfs["character/character.png"].readBitmap()) {
            position(charStartPosX, charStartPosY)
            visible = false

            addFixedUpdater {
                keys {
                    onKeyDown {
                        if (it.key == Key.SPACE)
                            when {
                                collidesWith(door1) -> {
                                    door1.playAnimation()
                                    door1.onAnimationCompleted {
                                        sceneContainer.changeToAsync<PongScene>()
                                    }
//                                    musicChannel?.volume = .0
//                                    music.volume = .0
                                }
                                collidesWith(door2) -> {
                                    door2.playAnimation()
                                    door2.onAnimationCompleted {
                                        sceneContainer.changeToAsync<FakeSpaceInvaderScene>()
                                    }
                                }
                                collidesWith(door3) -> sceneContainer.changeToAsync<PacManScene>() // todo
                            }
                    }
                }
            }
        }

        /*TODO finish it
        I just one to show her/him even if the (s)he didn't got the chance to introduce herself/himself
         */
        val boss = image(resourcesVfs["character/boss.png"].readBitmap()) {
            position(charMaxPosX, charStartPosY)
            visible = false
        }

        /**
         * Head & doors animations
         */
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
        keys {
            onKeyDown {
                if (it.key == Key.SPACE) {
//                    musicChannel = music.playForever()
//                    musicChannel = music.play()
                    musicChannel?.volume = 1.0
                    title.visible = false
                    instruction.visible = false
                    headSprite.playAnimation(spriteDisplayTime = 0.15.seconds)
                }
            }
        }

        headSprite.onAnimationCompleted {
            headSprite.visible = false
            headOpened.visible = true
            door1.visible = true
            door2.visible = true
            door3.visible = true
            character.visible = true
            boss.visible = true
        }

        //FIXME chained door animation from open to closed

//        headSprite.onAnimationCompleted {
//            headSprite.visible = false
//            headOpened.visible = true
//            Thread_sleep(300)
//            door1.visible = true
//            door1.playAnimation(spriteDisplayTime = 0.9.seconds, reversed = true)
//            door1.onAnimationCompleted {
//                door2.visible = true
////                door2.playAnimation(spriteDisplayTime = 0.8.seconds, reversed = true)
//                door2.onAnimationCompleted {
//                    door3.visible = true
//                    door2.playAnimation(spriteDisplayTime = 0.1.seconds, reversed = true)
//                    door3.onAnimationCompleted {
//
//                    }
//                }
//            }
//        }

        /**
         * Character moving
         */

        //FIXME sprite animation

//        val characterMoveForward = sprite(
//                SpriteAnimation(resourcesVfs["character_moving_forward.png"].readBitmap(), 40, 150, columns = 5)
//        ) { position(character.x, character.y) }
//
//        val characterMoveBack = sprite(
//                SpriteAnimation(resourcesVfs["character_moving_back.png"].readBitmap(), 40, 150, columns = 5)
//        ) { position(character.x, character.y) }

        val characterSpeed = 30
        keys {
            onKeyDown {
                //FIXME sprite animation
                if (character.visible) {
                    when (it.key) {
                        Key.LEFT -> {
                            if (character.x > charStartPosX) character.x -= characterSpeed
//                        characterMoveForward.playAnimationLooped()
//                        println(characterMoveForward.spriteDisplayTime)
//                        characterMoveBack.stopAnimation()
                        }
                        Key.RIGHT -> {
                            if (character.x < charMaxPosX) character.x += characterSpeed
//                        characterMoveBack.playAnimationLooped()
//                        characterMoveBack.stopAnimation()
                        }
                        else -> {
//                        characterMoveBack.stopAnimation()
//                        characterMoveBack.stopAnimation()
                        }
                    }
                }
            }
        }
    }

    override suspend fun sceneBeforeLeaving() {
        super.sceneBeforeLeaving()
        musicChannel?.stop()
    }
}