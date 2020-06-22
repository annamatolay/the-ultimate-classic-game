package model

import com.soywiz.korge.view.*

abstract class Character {
    abstract var x: Double
    abstract val y: Double
    open lateinit var actions: List<Action>

    sealed class Action {
        lateinit var image: Image

        sealed class Look : Action() {
            object Forward : Action()
            object Backward : Action()
        }

        sealed class Move : Action() {
            lateinit var sprite: Sprite

            object Forward : Move()
            object Backward : Move()
        }
    }
}
