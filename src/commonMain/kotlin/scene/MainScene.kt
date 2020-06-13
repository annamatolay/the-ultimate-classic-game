package scene

import com.soywiz.klock.*
import com.soywiz.korau.sound.*
import com.soywiz.korev.*
import com.soywiz.korge.input.*
import com.soywiz.korge.scene.*
import com.soywiz.korge.view.*
import com.soywiz.korim.format.*
import com.soywiz.korio.file.*
import com.soywiz.korio.file.std.*
import utils.*

class MainScene : Scene() {

    override suspend fun Container.sceneInit() {

        (0..6).forEach { createNextHeadImage(it) }

        val door1 = image(resourcesVfs["door_1.png"].readBitmap()) {
            position(300, 400)
            visible = false
        }

        val character = image(resourcesVfs["character.png"].readBitmap()) {
            position(150, 400)
            visible = false
        }

//FIXME sprite animation

//        val characterMoveForward = sprite(
//                SpriteAnimation(resourcesVfs["character_moving_forward.png"].readBitmap(), 40, 150, columns = 5)
//        ) { position(character.x, character.y) }
//
//        val characterMoveBack = sprite(
//                SpriteAnimation(resourcesVfs["character_moving_back.png"].readBitmap(), 40, 150, columns = 5)
//        ) { position(character.x, character.y) }

        var imageCounter = 0
        addFixedUpdater(1.timesPerSecond) {
            if (imageCounter < 6) {
                getChildAt(imageCounter++).visible = false
                getChildAt(imageCounter).visible = true
            } else {
                character.visible = door1.visible
                door1.visible = true
            }

            //println("VIEWS COUNT: ${children.size}\n$children")
        }

        showMenuListener(sceneContainer)

        var characterSpeed = 10
        keys {
            onKeyDown {
                //FIXME sprite animation
                when (it.key) {
                    Key.LEFT -> {
                        character.x -= characterSpeed
//                        characterMoveForward.playAnimationLooped()
//                        println(characterMoveForward.spriteDisplayTime)
//                        characterMoveBack.stopAnimation()
                    }
                    Key.RIGHT -> {
                        character.x += characterSpeed
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

        character.onCollision({ it == door1 }) { sceneContainer.changeToAsync<PongScene>() }
    }

    private suspend fun Container.createNextHeadImage(index: Int = 0) =
            image(resourcesVfs["head_draft/${if (index == 0) "big_head_closed" else "big_head_open_$index"}.png"].readBitmap()) {
                position(0, 0)
                scale(.6)
                if (index > 0) visible = false
            }
}