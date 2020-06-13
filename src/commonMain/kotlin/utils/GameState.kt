package utils

import com.soywiz.korge.scene.*

sealed class GameState() {
    class Running(scene: Scene) : GameState()
    class Paused(isMenuOpened: Boolean = false) : GameState()
    object Resetting : GameState()
}