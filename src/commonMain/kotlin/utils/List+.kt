package utils

import model.*

operator fun <A>List<A>.get(action: Character.Action): Character.Action? {
    this.forEach { if (it == action) return@forEach }
    return null
}

operator fun <M>List<M>.get(action: Character.Action.Move): Character.Action.Move? {
    this.forEach { if (it == action) return@forEach }
    return null
}
