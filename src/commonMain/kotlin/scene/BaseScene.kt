package scene

import com.soywiz.korau.sound.*
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.Container
import com.soywiz.korio.file.std.*

abstract class BaseScene() : Scene() {
    protected open val music: NativeSound? = null
    protected lateinit var sounds: List<NativeSound>
    protected lateinit var channel: NativeSoundChannel
    @Suppress("MemberVisibilityCanBePrivate")
    protected lateinit var musicSrcTemplates: List<String>

    override suspend fun sceneAfterInit() {
        super.sceneAfterInit()
        if (this::musicSrcTemplates.isInitialized && !this::sounds.isInitialized) {
            val tmp = mutableListOf<NativeSound>()
            if (tmp.isEmpty())
                musicSrcTemplates.forEach { tmp.add(resourcesVfs[it].readSound()) }
            sounds = tmp.toList()
            if (this::sounds.isInitialized) tmp.clear()
            println("BaseScene sceneAfterInit DONE")
        }
    }

    override suspend fun sceneBeforeLeaving() {
        super.sceneBeforeLeaving()
        if (this::channel.isInitialized && channel.playing) channel.stop()
    }
}
