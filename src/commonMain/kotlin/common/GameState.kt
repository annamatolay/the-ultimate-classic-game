package common

import com.soywiz.korge.scene.*

sealed class GameState() {
    class Running(scene: Scene? = null) : GameState()
    class Paused(isMenuOpened: Boolean = false) : GameState()
    object Resetting : GameState()
}