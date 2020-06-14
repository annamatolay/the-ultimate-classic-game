package pong

class Ball(
        val radius: Double = 10.0,
        val initialSpeed: Double = 200.0,
        val speedIncrement: Double = 50.0,
        var speed: Double = 0.0,
        var angle: Double = 0.0
)
