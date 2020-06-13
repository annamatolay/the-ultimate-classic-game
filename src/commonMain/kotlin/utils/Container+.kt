package utils

import scene.MenuScene
import com.soywiz.korev.*
import com.soywiz.korge.input.*
import com.soywiz.korge.scene.*
import com.soywiz.korge.view.*
import com.soywiz.korgw.*

fun Container.addFpsText(window: GameWindow) =
        text("FPS: 0") {
            position(10, 10)
            addFixedUpdater {
                text = "FPS: " + window.fps.toString()
            }
        }

fun Container.showMenuListener(sceneContainer: SceneContainer) =
        keys { onKeyDown { if (it.key == Key.ESCAPE) sceneContainer.changeToAsync<MenuScene>() } }
