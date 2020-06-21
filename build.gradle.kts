import com.soywiz.korge.gradle.*

buildscript {

	repositories {
		mavenLocal()
		maven { url = uri("https://dl.bintray.com/korlibs/korlibs") }
		maven { url = uri("https://plugins.gradle.org/m2/") }
		mavenCentral()
	}
	dependencies {
		classpath("com.soywiz.korlibs.korge.plugins:korge-gradle-plugin:1.13.3.0")
	}
}

apply<KorgeGradlePlugin>()

korge {
	id = "com.palmatolay.game.the-ultimate-classic-game"
	version = "0.0.1-alpha"
	name = "TheULTIMATEClassicGame"
}