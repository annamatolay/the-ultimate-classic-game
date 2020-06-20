package model

import com.soywiz.korge.view.*

abstract class Character {
    abstract val startPosX: Int
    abstract val startPosY: Int
    open lateinit var actions: List<Action>

    sealed class Action {
        lateinit var image: Image

        object LookForward : Action()
        object LookBackWard : Action()

        sealed class Move : Action() {
            lateinit var sprite: Sprite

            object Forward : Move()
            object Backward : Move()
        }
    }
}