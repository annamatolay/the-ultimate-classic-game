package scene

import com.soywiz.korau.sound.*
import com.soywiz.korev.*
import com.soywiz.korge.input.*
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.ui.*
import com.soywiz.korge.view.*
import com.soywiz.korim.color.*
import com.soywiz.korim.format.*
import com.soywiz.korio.file.std.*
import utils.*

// TODO: Delete when interactive Dialogs are ready
class StoryScene(override val music: NativeSound): BaseScene() {
    private var pageIndex = 1

    // FIXME-PLUGIN-FYI: when I create the scene with the IntelliJ option, then I get the method like this:
    // suspend override fun Container.sceneInit() <- WARNING: Non-canonical order
    override suspend fun Container.sceneInit() {
        channel = music.playForever()

        val pages = listOf(
                image(resourcesVfs["story/page1.png"].readBitmap()) {
                    scale = .5
                    x += 20
                },
                image(resourcesVfs["story/page2.png"].readBitmap()) {
                    x = views.actualVirtualWidth.toDouble() - 520
                    scale = .5
                },
                image(resourcesVfs["story/page3.png"].readBitmap()) {
                    scale = .5
                    x += 20
                    visible = false
                },
                image(resourcesVfs["story/page4.png"].readBitmap()) {
                    x = views.actualVirtualWidth.toDouble() - 520
                    scale = .5
                    visible = false
                },
                image(resourcesVfs["story/page5.png"].readBitmap()) {
                    scale = .5
                    x += 20
                    visible = false
                },
                image(resourcesVfs["story/page6.png"].readBitmap()) {
                    x = views.actualVirtualWidth.toDouble() - 520
                    scale = .5
                    visible = false
                }
        )

        textButton(150.0, 32.0) {
            text = "NEXT"
            position(views.actualVirtualWidth / 2 - 75, views.actualVirtualHeight / 2)
            onClick {
                println(pageIndex)

                when (pageIndex) {
                    1 -> {
                        pages[0].visible = false
                        pages[1].visible = false
                        pages[2].visible = true
                        pages[3].visible = true
                        ++pageIndex
                    }
                    2 -> {
                        pages[2].visible = false
                        pages[3].visible = false
                        pages[4].visible = true
                        pages[5].visible = true
                        ++pageIndex
                    }
                    3 -> {
                        pages[4].visible = false
                        pages[5].visible = false
                        pages[0].visible = true
                        pages[1].visible = true
                        pageIndex = 1
                    }
                }
            }
        }
        keys { onKeyDown { if (it.key == Key.ESCAPE) sceneContainer.changeToAsync<MenuScene>() } }
    }
}
