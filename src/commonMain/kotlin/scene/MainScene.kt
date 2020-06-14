package scene

import com.soywiz.klock.*
import com.soywiz.korev.*
import com.soywiz.korev.DummyEventDispatcher.addEventListener
import com.soywiz.korge.input.*
import com.soywiz.korge.scene.*
import com.soywiz.korge.view.*
import com.soywiz.korim.format.*
import com.soywiz.korio.file.std.*
import utils.*

class MainScene : Scene() {
    private val charStartPosX = 255
    private val charMaxPosX = charStartPosX + 660
    private val charStartPosY = 390

    override suspend fun Container.sceneInit() {
        showMenuListener(sceneContainer)

        val centerX = views.actualVirtualWidth / 2
        val centerY = views.actualVirtualHeight / 2

        image(resourcesVfs["bg_varia.png"].readBitmap())
        val co = image(resourcesVfs["character/head_closed.png"].readBitmap()) { visible = false }
        val ho = image(resourcesVfs["character/head_opened.png"].readBitmap()) { visible = true }

        val door2 = sprite(SpriteAnimation(
                resourcesVfs["doors/door2.png"].readBitmap(),
                223,
                200,
                columns = 5
        )) {
            position(centerX - 115, charStartPosY - 50)
        }.playAnimation(spriteDisplayTime = 0.08.seconds)

        //40x150
        val character = image(resourcesVfs["character/character.png"].readBitmap()) {
            position(charStartPosX, charStartPosY)
            visible = true
        }

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

//        character.onCollision({ it == door1 }) { sceneContainer.changeToAsync<PongScene>() } FIXME
    }
}