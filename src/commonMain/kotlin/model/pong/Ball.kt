package model.pong

data class Ball(
        val radius: Double = 10.0,
        val initialSpeed: Double = 300.0,
        val speedIncrement: Double = 50.0,
        val position: Position = Position(),
        var speed: Double = 0.0,
        var angle: Double = 0.0
)
