(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korim-root-korim', 'korge-root-korge', 'korinject-root-korinject', 'korma-root-korma', 'korio-root-korio', 'korgw-root-korgw', 'klock-root-klock'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korim-root-korim'), require('korge-root-korge'), require('korinject-root-korinject'), require('korma-root-korma'), require('korio-root-korio'), require('korgw-root-korgw'), require('klock-root-klock'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'TheUltimateClassicGame'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'TheUltimateClassicGame'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'TheUltimateClassicGame'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'TheUltimateClassicGame'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'TheUltimateClassicGame'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'TheUltimateClassicGame'.");
    }if (typeof this['korinject-root-korinject'] === 'undefined') {
      throw new Error("Error loading module 'TheUltimateClassicGame'. Its dependency 'korinject-root-korinject' was not found. Please, check whether 'korinject-root-korinject' is loaded prior to 'TheUltimateClassicGame'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'TheUltimateClassicGame'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'TheUltimateClassicGame'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'TheUltimateClassicGame'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'TheUltimateClassicGame'.");
    }if (typeof this['korgw-root-korgw'] === 'undefined') {
      throw new Error("Error loading module 'TheUltimateClassicGame'. Its dependency 'korgw-root-korgw' was not found. Please, check whether 'korgw-root-korgw' is loaded prior to 'TheUltimateClassicGame'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'TheUltimateClassicGame'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'TheUltimateClassicGame'.");
    }root.TheUltimateClassicGame = factory(typeof TheUltimateClassicGame === 'undefined' ? {} : TheUltimateClassicGame, kotlin, this['korim-root-korim'], this['korge-root-korge'], this['korinject-root-korinject'], this['korma-root-korma'], this['korio-root-korio'], this['korgw-root-korgw'], this['klock-root-klock']);
  }
}(this, function (_, Kotlin, $module$korim_root_korim, $module$korge_root_korge, $module$korinject_root_korinject, $module$korma_root_korma, $module$korio_root_korio, $module$korgw_root_korgw, $module$klock_root_klock) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Random = Kotlin.kotlin.random.Random;
  var math = Kotlin.kotlin.math;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_2cbtc5$;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var addUpdater = $module$korge_root_korge.com.soywiz.korge.view.addUpdater_t24ukx$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Circle_init = $module$korge_root_korge.com.soywiz.korge.view.Circle;
  var addTo = $module$korge_root_korge.com.soywiz.korge.view.addTo_fct211$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var Korge$Config = $module$korge_root_korge.com.soywiz.korge.Korge.Config;
  var getKClass = Kotlin.getKClass;
  var Module = $module$korge_root_korge.com.soywiz.korge.scene.Module;
  var SizeInt = $module$korma_root_korma.com.soywiz.korma.geom.SizeInt;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var throwUPAE = Kotlin.throwUPAE;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var std = $module$korio_root_korio.com.soywiz.korio.file.std;
  var readBitmap = $module$korim_root_korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Key = $module$korgw_root_korgw.com.soywiz.korev.Key;
  var onCollision = $module$korge_root_korge.com.soywiz.korge.view.onCollision_1uywuz$;
  var Scene = $module$korge_root_korge.com.soywiz.korge.scene.Scene;
  var Math_0 = Math;
  var Image_init = $module$korge_root_korge.com.soywiz.korge.view.Image_init_8drxwf$;
  var get_keys = $module$korge_root_korge.com.soywiz.korge.input.get_keys_gohfi1$;
  var SolidRect_init = $module$korge_root_korge.com.soywiz.korge.view.SolidRect;
  var SpriteAnimation = $module$korge_root_korge.com.soywiz.korge.view.SpriteAnimation;
  var position_0 = $module$korge_root_korge.com.soywiz.korge.view.position_ajix5r$;
  var collidesWith = $module$korge_root_korge.com.soywiz.korge.view.collidesWith_qjuya0$;
  var CoroutineScope = $module$korge_root_korge.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.CoroutineScope_1fupul$;
  var wrapFunction = Kotlin.wrapFunction;
  var async = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.async_uddi5$;
  var TimeSpan = $module$korge_root_korge.$$importsForInline$$['klock-root-klock'].com.soywiz.klock.TimeSpan;
  var TimeSpan_0 = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var Sprite_init = $module$korge_root_korge.com.soywiz.korge.view.Sprite_init_i2lxqn$;
  var color_0 = $module$korge_root_korge.$$importsForInline$$['korim-root-korim'].com.soywiz.korim.color;
  var Fonts = $module$korge_root_korge.com.soywiz.korge.view.Fonts;
  var Text = $module$korge_root_korge.com.soywiz.korge.view.Text;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var get_mouse = $module$korge_root_korge.com.soywiz.korge.input.get_mouse_gohfi1$;
  var launchImmediately = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var get_defaultUISkin = $module$korge_root_korge.com.soywiz.korge.ui.get_defaultUISkin_gohfi1$;
  var get_defaultUIFont = $module$korge_root_korge.com.soywiz.korge.ui.get_defaultUIFont_gohfi1$;
  var TextButton_init = $module$korge_root_korge.com.soywiz.korge.ui.TextButton;
  var collidesWith_0 = $module$korge_root_korge.com.soywiz.korge.view.collidesWith_lvkevd$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var get_timesPerSecond = $module$klock_root_klock.com.soywiz.klock.get_timesPerSecond_s8ev3n$;
  var addFixedUpdater = $module$korge_root_korge.com.soywiz.korge.view.addFixedUpdater_7q9vgb$;
  GameModule.prototype = Object.create(Module.prototype);
  GameModule.prototype.constructor = GameModule;
  Character$Action$Look$Forward.prototype = Object.create(Character$Action.prototype);
  Character$Action$Look$Forward.prototype.constructor = Character$Action$Look$Forward;
  Character$Action$Look$Backward.prototype = Object.create(Character$Action.prototype);
  Character$Action$Look$Backward.prototype.constructor = Character$Action$Look$Backward;
  Character$Action$Look.prototype = Object.create(Character$Action.prototype);
  Character$Action$Look.prototype.constructor = Character$Action$Look;
  Character$Action$Move.prototype = Object.create(Character$Action.prototype);
  Character$Action$Move.prototype.constructor = Character$Action$Move;
  Character$Action$Move$Forward.prototype = Object.create(Character$Action$Move.prototype);
  Character$Action$Move$Forward.prototype.constructor = Character$Action$Move$Forward;
  Character$Action$Move$Backward.prototype = Object.create(Character$Action$Move.prototype);
  Character$Action$Move$Backward.prototype.constructor = Character$Action$Move$Backward;
  Player.prototype = Object.create(Character.prototype);
  Player.prototype.constructor = Player;
  FakeSpaceInvaderScene.prototype = Object.create(Scene.prototype);
  FakeSpaceInvaderScene.prototype.constructor = FakeSpaceInvaderScene;
  MainScene.prototype = Object.create(Scene.prototype);
  MainScene.prototype.constructor = MainScene;
  MenuScene.prototype = Object.create(Scene.prototype);
  MenuScene.prototype.constructor = MenuScene;
  PacManScene.prototype = Object.create(Scene.prototype);
  PacManScene.prototype.constructor = PacManScene;
  PongScene$PongGameStates$Starting.prototype = Object.create(PongScene$PongGameStates.prototype);
  PongScene$PongGameStates$Starting.prototype.constructor = PongScene$PongGameStates$Starting;
  PongScene$PongGameStates$Playing.prototype = Object.create(PongScene$PongGameStates.prototype);
  PongScene$PongGameStates$Playing.prototype.constructor = PongScene$PongGameStates$Playing;
  PongScene$PongGameStates$Scored.prototype = Object.create(PongScene$PongGameStates.prototype);
  PongScene$PongGameStates$Scored.prototype.constructor = PongScene$PongGameStates$Scored;
  PongScene.prototype = Object.create(Scene.prototype);
  PongScene.prototype.constructor = PongScene;
  StoryScene.prototype = Object.create(Scene.prototype);
  StoryScene.prototype.constructor = StoryScene;
  TestScene.prototype = Object.create(Scene.prototype);
  TestScene.prototype.constructor = TestScene;
  GameState$Running.prototype = Object.create(GameState.prototype);
  GameState$Running.prototype.constructor = GameState$Running;
  GameState$Paused.prototype = Object.create(GameState.prototype);
  GameState$Paused.prototype.constructor = GameState$Paused;
  GameState$Resetting.prototype = Object.create(GameState.prototype);
  GameState$Resetting.prototype.constructor = GameState$Resetting;
  function circle$lambda($receiver) {
    return Unit;
  }
  function GameBall(ballPosXAtStart, ballPosYAtStart, gameState, onGameRunning, onGamePaused) {
    GameBall$Companion_getInstance();
    if (ballPosXAtStart === void 0)
      ballPosXAtStart = 0.0;
    if (ballPosYAtStart === void 0)
      ballPosYAtStart = 0.0;
    if (gameState === void 0)
      gameState = new GameState$Paused();
    if (onGamePaused === void 0)
      onGamePaused = GameBall_init$lambda;
    this.ballPosXAtStart_0 = ballPosXAtStart;
    this.ballPosYAtStart_0 = ballPosYAtStart;
    this.gameState_0 = gameState;
    this.onGameRunning_0 = onGameRunning;
    this.onGamePaused_0 = onGamePaused;
    this.currentSpeed_0 = GameBall$Companion_getInstance().defaultSpeed;
  }
  function GameBall$Companion() {
    GameBall$Companion_instance = this;
    this.radius = 10.0;
    this.speedIncrease = 50.0;
    this.defaultSpeed = 300.0;
    this.defaultAngle = Random.Default.nextDouble() * 2 * math.PI;
  }
  GameBall$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameBall$Companion_instance = null;
  function GameBall$Companion_getInstance() {
    if (GameBall$Companion_instance === null) {
      new GameBall$Companion();
    }return GameBall$Companion_instance;
  }
  function GameBall$init$lambda$lambda(this$GameBall) {
    return function ($receiver, it) {
      var tmp$;
      tmp$ = this$GameBall.gameState_0;
      if (Kotlin.isType(tmp$, GameState$Running))
        this$GameBall.onGameRunning_0();
      else if (Kotlin.isType(tmp$, GameState$Paused))
        this$GameBall.onGamePaused_0();
      else if (equals(tmp$, GameState$Resetting_getInstance()))
        this$GameBall.reInit_hyewuq$($receiver);
      return Unit;
    };
  }
  GameBall.prototype.init_st8p7j$ = function ($receiver) {
    var $receiver_0 = addTo(new Circle_init(GameBall$Companion_getInstance().radius, color.Colors.WHITE, true), $receiver);
    position($receiver_0, this.ballPosXAtStart_0, this.ballPosYAtStart_0);
    addUpdater($receiver_0, GameBall$init$lambda$lambda(this));
    return $receiver_0;
  };
  GameBall.prototype.reInit_hyewuq$ = function ($receiver) {
    $receiver.x = this.ballPosXAtStart_0;
    $receiver.y = this.ballPosYAtStart_0;
    this.currentSpeed_0 = GameBall$Companion_getInstance().defaultSpeed;
  };
  function GameBall_init$lambda() {
    return Unit;
  }
  GameBall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameBall',
    interfaces: []
  };
  function main(continuation) {
    return korge.Korge.invoke_dnucxw$(new Korge$Config(GameModule_getInstance()), continuation);
  }
  function GameModule() {
    GameModule_instance = this;
    Module.call(this);
    this.mainScene_kxtxcn$_0 = getKClass(TestScene);
    this.title_4t7dce$_0 = 'The ULTIMATE Classic Game';
    this.size_2gmd87$_0 = SizeInt.Companion.invoke_vux9f0$(1240, 720);
    this.bgcolor_5hh4zw$_0 = color.Colors.BLACK;
    this.icon_2m8d0v$_0 = '/aliens/alien1.png';
  }
  Object.defineProperty(GameModule.prototype, 'mainScene', {
    get: function () {
      return this.mainScene_kxtxcn$_0;
    }
  });
  Object.defineProperty(GameModule.prototype, 'title', {
    get: function () {
      return this.title_4t7dce$_0;
    }
  });
  Object.defineProperty(GameModule.prototype, 'size', {
    get: function () {
      return this.size_2gmd87$_0;
    }
  });
  Object.defineProperty(GameModule.prototype, 'bgcolor', {
    get: function () {
      return this.bgcolor_5hh4zw$_0;
    }
  });
  Object.defineProperty(GameModule.prototype, 'icon', {
    get: function () {
      return this.icon_2m8d0v$_0;
    }
  });
  function Coroutine$GameModule$init$lambda$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$GameModule$init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameModule$init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameModule$init$lambda$lambda.prototype.constructor = Coroutine$GameModule$init$lambda$lambda;
  Coroutine$GameModule$init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new TestScene();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameModule$init$lambda$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$GameModule$init$lambda$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$GameModule$init$lambda$lambda_0($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$GameModule$init$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameModule$init$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameModule$init$lambda$lambda_0.prototype.constructor = Coroutine$GameModule$init$lambda$lambda_0;
  Coroutine$GameModule$init$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new MenuScene();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameModule$init$lambda$lambda_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$GameModule$init$lambda$lambda_0($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$GameModule$init$lambda$lambda_1($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$GameModule$init$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameModule$init$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameModule$init$lambda$lambda_1.prototype.constructor = Coroutine$GameModule$init$lambda$lambda_1;
  Coroutine$GameModule$init$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new StoryScene();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameModule$init$lambda$lambda_1($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$GameModule$init$lambda$lambda_1($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$GameModule$init$lambda$lambda_2($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$GameModule$init$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameModule$init$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameModule$init$lambda$lambda_2.prototype.constructor = Coroutine$GameModule$init$lambda$lambda_2;
  Coroutine$GameModule$init$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new PongScene(new Paddle(), new Paddle());
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameModule$init$lambda$lambda_2($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$GameModule$init$lambda$lambda_2($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  GameModule.prototype.init_y6n311$ = function (injector, continuation) {
    injector.mapPrototype_siz2e9$(getKClass(TestScene), GameModule$init$lambda$lambda);
    injector.mapPrototype_siz2e9$(getKClass(MenuScene), GameModule$init$lambda$lambda_0);
    injector.mapPrototype_siz2e9$(getKClass(StoryScene), GameModule$init$lambda$lambda_1);
    injector.mapPrototype_siz2e9$(getKClass(PongScene), GameModule$init$lambda$lambda_2);
    return Unit;
  };
  GameModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GameModule',
    interfaces: [Module]
  };
  var GameModule_instance = null;
  function GameModule_getInstance() {
    if (GameModule_instance === null) {
      new GameModule();
    }return GameModule_instance;
  }
  function Character() {
    this.actions_w1ze2v$_0 = this.actions_w1ze2v$_0;
  }
  Object.defineProperty(Character.prototype, 'actions', {
    get: function () {
      if (this.actions_w1ze2v$_0 == null)
        return throwUPAE('actions');
      return this.actions_w1ze2v$_0;
    },
    set: function (actions) {
      this.actions_w1ze2v$_0 = actions;
    }
  });
  function Character$Action() {
    this.image_s14nir$_0 = this.image_s14nir$_0;
  }
  Object.defineProperty(Character$Action.prototype, 'image', {
    get: function () {
      if (this.image_s14nir$_0 == null)
        return throwUPAE('image');
      return this.image_s14nir$_0;
    },
    set: function (image) {
      this.image_s14nir$_0 = image;
    }
  });
  function Character$Action$Look() {
    Character$Action.call(this);
  }
  function Character$Action$Look$Forward() {
    Character$Action$Look$Forward_instance = this;
    Character$Action.call(this);
  }
  Character$Action$Look$Forward.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Forward',
    interfaces: [Character$Action]
  };
  var Character$Action$Look$Forward_instance = null;
  function Character$Action$Look$Forward_getInstance() {
    if (Character$Action$Look$Forward_instance === null) {
      new Character$Action$Look$Forward();
    }return Character$Action$Look$Forward_instance;
  }
  function Character$Action$Look$Backward() {
    Character$Action$Look$Backward_instance = this;
    Character$Action.call(this);
  }
  Character$Action$Look$Backward.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Backward',
    interfaces: [Character$Action]
  };
  var Character$Action$Look$Backward_instance = null;
  function Character$Action$Look$Backward_getInstance() {
    if (Character$Action$Look$Backward_instance === null) {
      new Character$Action$Look$Backward();
    }return Character$Action$Look$Backward_instance;
  }
  Character$Action$Look.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Look',
    interfaces: [Character$Action]
  };
  function Character$Action$Move() {
    Character$Action.call(this);
    this.sprite_8ry7uu$_0 = this.sprite_8ry7uu$_0;
  }
  Object.defineProperty(Character$Action$Move.prototype, 'sprite', {
    get: function () {
      if (this.sprite_8ry7uu$_0 == null)
        return throwUPAE('sprite');
      return this.sprite_8ry7uu$_0;
    },
    set: function (sprite) {
      this.sprite_8ry7uu$_0 = sprite;
    }
  });
  function Character$Action$Move$Forward() {
    Character$Action$Move$Forward_instance = this;
    Character$Action$Move.call(this);
  }
  Character$Action$Move$Forward.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Forward',
    interfaces: [Character$Action$Move]
  };
  var Character$Action$Move$Forward_instance = null;
  function Character$Action$Move$Forward_getInstance() {
    if (Character$Action$Move$Forward_instance === null) {
      new Character$Action$Move$Forward();
    }return Character$Action$Move$Forward_instance;
  }
  function Character$Action$Move$Backward() {
    Character$Action$Move$Backward_instance = this;
    Character$Action$Move.call(this);
  }
  Character$Action$Move$Backward.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Backward',
    interfaces: [Character$Action$Move]
  };
  var Character$Action$Move$Backward_instance = null;
  function Character$Action$Move$Backward_getInstance() {
    if (Character$Action$Move$Backward_instance === null) {
      new Character$Action$Move$Backward();
    }return Character$Action$Move$Backward_instance;
  }
  Character$Action$Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: [Character$Action]
  };
  Character$Action.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Action',
    interfaces: []
  };
  Character.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Character',
    interfaces: []
  };
  function Player() {
    Character.call(this);
    this.x_9tkbii$_0 = 255.0;
    this.y_9tkbjd$_0 = 390.0;
    this.maxPosX = this.x + 660;
  }
  Object.defineProperty(Player.prototype, 'x', {
    get: function () {
      return this.x_9tkbii$_0;
    },
    set: function (x) {
      this.x_9tkbii$_0 = x;
    }
  });
  Object.defineProperty(Player.prototype, 'y', {
    get: function () {
      return this.y_9tkbjd$_0;
    }
  });
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: [Character]
  };
  function Ball(radius, initialSpeed, speedIncrement, position, speed, angle) {
    if (radius === void 0)
      radius = 10.0;
    if (initialSpeed === void 0)
      initialSpeed = 300.0;
    if (speedIncrement === void 0)
      speedIncrement = 50.0;
    if (position === void 0)
      position = new Position();
    if (speed === void 0)
      speed = 0.0;
    if (angle === void 0)
      angle = 0.0;
    this.radius = radius;
    this.initialSpeed = initialSpeed;
    this.speedIncrement = speedIncrement;
    this.position = position;
    this.speed = speed;
    this.angle = angle;
  }
  Ball.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ball',
    interfaces: []
  };
  function Paddle(width, height, moveSpeed, distanceFromWall) {
    if (width === void 0)
      width = 10.0;
    if (height === void 0)
      height = 100.0;
    if (moveSpeed === void 0)
      moveSpeed = 10.0;
    if (distanceFromWall === void 0)
      distanceFromWall = 10.0;
    this.width = width;
    this.height = height;
    this.moveSpeed = moveSpeed;
    this.distanceFromWall = distanceFromWall;
  }
  Paddle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paddle',
    interfaces: []
  };
  function Position(x, y) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  Position.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Position',
    interfaces: []
  };
  function image$lambda($receiver) {
    return Unit;
  }
  function circle$lambda_0($receiver) {
    return Unit;
  }
  function solidRect$lambda($receiver) {
    return Unit;
  }
  function FakeSpaceInvaderScene() {
    Scene.call(this);
    this.gameState_0 = new GameState$Paused();
    this.playerLives_0 = 3;
  }
  function FakeSpaceInvaderScene$sceneInit$lambda(this$FakeSpaceInvaderScene) {
    return function ($receiver) {
      $receiver.x = this$FakeSpaceInvaderScene.views.virtualWidth / 3.0;
      return Unit;
    };
  }
  function FakeSpaceInvaderScene$sceneInit$lambda_0(this$FakeSpaceInvaderScene) {
    return function ($receiver) {
      $receiver.x = this$FakeSpaceInvaderScene.views.virtualWidth / 2.0 - 20;
      return Unit;
    };
  }
  function FakeSpaceInvaderScene$sceneInit$lambda_1(this$FakeSpaceInvaderScene) {
    return function ($receiver) {
      $receiver.x = (this$FakeSpaceInvaderScene.views.virtualWidth / 3 | 0) * 2.0;
      return Unit;
    };
  }
  function FakeSpaceInvaderScene$sceneInit$lambda_2(this$FakeSpaceInvaderScene) {
    return function ($receiver) {
      $receiver.x = this$FakeSpaceInvaderScene.views.virtualWidth - 220.0;
      return Unit;
    };
  }
  function FakeSpaceInvaderScene$sceneInit$lambda$lambda(closure$ballPosXAtStart, this$, closure$ballPosYAtStart, closure$speed, closure$angle, this$FakeSpaceInvaderScene) {
    return function () {
      this$.x = closure$ballPosXAtStart;
      this$.y = closure$ballPosYAtStart;
      closure$speed.v = GameBall$Companion_getInstance().defaultSpeed;
      closure$angle.v = GameBall$Companion_getInstance().defaultAngle;
      this$FakeSpaceInvaderScene.gameState_0 = new GameState$Paused();
    };
  }
  function FakeSpaceInvaderScene$sceneInit$lambda$lambda_0(this$FakeSpaceInvaderScene, closure$isNotStarted, closure$speed, closure$angle, closure$resetRound) {
    return function ($receiver, it) {
      if (Kotlin.isType(this$FakeSpaceInvaderScene.gameState_0, GameState$Running)) {
        if (closure$isNotStarted.v) {
          $receiver.x += closure$speed.v * it.seconds;
          $receiver.y += closure$speed.v * it.seconds;
          closure$isNotStarted.v = false;
        } else {
          var tmp$ = closure$speed.v;
          var x = closure$angle.v;
          var cos$result;
          cos$result = Math_0.cos(x);
          $receiver.x += tmp$ * cos$result * it.seconds;
          var tmp$_0 = closure$speed.v;
          var x_0 = closure$angle.v;
          var sin$result;
          sin$result = Math_0.sin(x_0);
          $receiver.y += tmp$_0 * sin$result * it.seconds;
        }
        if ($receiver.x < 0 || $receiver.x > this$FakeSpaceInvaderScene.views.actualVirtualWidth) {
          closure$speed.v += GameBall$Companion_getInstance().speedIncrease;
          closure$angle.v = math.PI - closure$angle.v;
        }if ($receiver.y < 0) {
          closure$speed.v += 10;
          closure$angle.v *= -1;
        }if ($receiver.y > this$FakeSpaceInvaderScene.views.actualVirtualHeight)
          closure$resetRound();
      }return Unit;
    };
  }
  function Coroutine$FakeSpaceInvaderScene$sceneInit$lambda$lambda(this$FakeSpaceInvaderScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$FakeSpaceInvaderScene = this$FakeSpaceInvaderScene_0;
    this.local$it = it_0;
  }
  Coroutine$FakeSpaceInvaderScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FakeSpaceInvaderScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FakeSpaceInvaderScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$FakeSpaceInvaderScene$sceneInit$lambda$lambda;
  Coroutine$FakeSpaceInvaderScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$it.key === Key.SPACE && !Kotlin.isType(this.local$this$FakeSpaceInvaderScene.gameState_0, GameState$Running))
              return this.local$this$FakeSpaceInvaderScene.gameState_0 = new GameState$Running(), Unit;
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function FakeSpaceInvaderScene$sceneInit$lambda$lambda_1(this$FakeSpaceInvaderScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$FakeSpaceInvaderScene$sceneInit$lambda$lambda(this$FakeSpaceInvaderScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FakeSpaceInvaderScene$sceneInit$lambda_3(closure$ship) {
    return function (it) {
      return equals(it, closure$ship);
    };
  }
  function FakeSpaceInvaderScene$sceneInit$lambda_4(closure$speed, closure$angle) {
    return function ($receiver, it) {
      closure$speed.v += 0.3;
      closure$angle.v *= -1;
      return Unit;
    };
  }
  function Coroutine$sceneInit_st8p7j$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver_0 = void 0;
    this.local$$receiver_0_0 = void 0;
    this.local$$receiver_0_1 = void 0;
    this.local$$receiver_0_2 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$.prototype.constructor = Coroutine$sceneInit_st8p7j$;
  Coroutine$sceneInit_st8p7j$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            showMenuListener(this.local$$receiver, this.$this.sceneContainer);
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('aliens/alien1.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            this.local$$receiver_0.x += 200;
            this.state_0 = 3;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('aliens/alien2.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$$receiver_0_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            FakeSpaceInvaderScene$sceneInit$lambda(this.$this)(this.local$$receiver_0_0);
            this.state_0 = 4;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('aliens/alien3.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$$receiver_0_1 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            FakeSpaceInvaderScene$sceneInit$lambda_0(this.$this)(this.local$$receiver_0_1);
            this.state_0 = 5;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('aliens/alien4.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$$receiver_0_2 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            FakeSpaceInvaderScene$sceneInit$lambda_1(this.$this)(this.local$$receiver_0_2);
            this.state_0 = 6;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('aliens/alien1.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var $receiver_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            FakeSpaceInvaderScene$sceneInit$lambda_2(this.$this)($receiver_0);
            var aliens = listOf([this.local$$receiver_0, this.local$$receiver_0_0, this.local$$receiver_0_1, this.local$$receiver_0_2, $receiver_0]);
            this.$this.createPlayerLive_0(this.local$$receiver, this.$this.views.actualVirtualWidth - 50, this.$this.views.actualVirtualHeight - 10);
            var size = 10.0;
            var color_0 = color.Colors.WHITE;
            var inputKeys = this.$this.views.input.keys;
            var shipPosX = ((this.$this.views.actualVirtualWidth / 2 | 0) - 22 | 0) + size * 5;
            var shipPosY = this.$this.views.actualVirtualHeight - 20.0;
            var ship = this.$this.createSpaceShip_0(this.local$$receiver, size, color_0, shipPosX, shipPosY, inputKeys);
            var angle = {v: GameBall$Companion_getInstance().defaultAngle};
            var speed = {v: GameBall$Companion_getInstance().defaultSpeed};
            var $receiver_0_0 = addTo(new Circle_init(GameBall$Companion_getInstance().radius, color.Colors.WHITE, true), this.local$$receiver);
            var ballPosXAtStart = (this.$this.views.actualVirtualWidth / 2 | 0) - 10.0;
            var ballPosYAtStart = (this.$this.views.actualVirtualHeight / 2 | 0) + 10.0;
            position($receiver_0_0, ballPosXAtStart, ballPosXAtStart);
            var resetRound = FakeSpaceInvaderScene$sceneInit$lambda$lambda(ballPosXAtStart, $receiver_0_0, ballPosYAtStart, speed, angle, this.$this);
            var isNotStarted = {v: true};
            addUpdater($receiver_0_0, FakeSpaceInvaderScene$sceneInit$lambda$lambda_0(this.$this, isNotStarted, speed, angle, resetRound));
            var ball = $receiver_0_0;
            get_keys(this.local$$receiver).onKeyDown.invoke_25kf2w$(FakeSpaceInvaderScene$sceneInit$lambda$lambda_1(this.$this));
            onCollision(ball, FakeSpaceInvaderScene$sceneInit$lambda_3(ship), void 0, void 0, FakeSpaceInvaderScene$sceneInit$lambda_4(speed, angle));
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FakeSpaceInvaderScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function FakeSpaceInvaderScene$createSpaceShip$lambda$lambda(this$FakeSpaceInvaderScene, closure$inputKeys) {
    return function ($receiver) {
      if (Kotlin.isType(this$FakeSpaceInvaderScene.gameState_0, GameState$Running) && $receiver.x > 0) {
        if (closure$inputKeys.get_9s040q$(Key.LEFT))
          $receiver.x -= 10;
      }if (Kotlin.isType(this$FakeSpaceInvaderScene.gameState_0, GameState$Running) && $receiver.x < this$FakeSpaceInvaderScene.views.virtualWidth - $receiver.width) {
        if (closure$inputKeys.get_9s040q$(Key.RIGHT))
          $receiver.x += 10;
      }return Unit;
    };
  }
  FakeSpaceInvaderScene.prototype.createSpaceShip_0 = function ($receiver, size, color_0, shipPosX, shipPosY, inputKeys) {
    var $receiver_0 = addTo(new SolidRect_init(size * 15, size, color_0), $receiver);
    position($receiver_0, shipPosX, shipPosY);
    var $receiver_0_0 = addTo(new SolidRect_init(size, size, color.Colors.WHITE), $receiver_0);
    $receiver_0_0.x += size * 7;
    $receiver_0_0.y -= size * 3;
    var $receiver_0_1 = addTo(new SolidRect_init(size * 9, size * 2, color.Colors.WHITE), $receiver_0);
    $receiver_0_1.x += size * 3;
    $receiver_0_1.y -= size * 2;
    addFixedUpdater_0($receiver_0, FakeSpaceInvaderScene$createSpaceShip$lambda$lambda(this, inputKeys));
    return $receiver_0;
  };
  FakeSpaceInvaderScene.prototype.createPlayerLive_0 = function ($receiver, shipPosX, shipPosY, size, color_0) {
    if (size === void 0)
      size = 2.5;
    if (color_0 === void 0)
      color_0 = color.Colors.RED;
    var $receiver_0 = addTo(new SolidRect_init(size * 15, size, color_0), $receiver);
    position($receiver_0, shipPosX, shipPosY);
    var $receiver_0_0 = addTo(new SolidRect_init(size, size, color.Colors.WHITE), $receiver_0);
    $receiver_0_0.x += size * 7;
    $receiver_0_0.y -= size * 3;
    var $receiver_0_1 = addTo(new SolidRect_init(size * 9, size * 2, color.Colors.WHITE), $receiver_0);
    $receiver_0_1.x += size * 3;
    $receiver_0_1.y -= size * 2;
    return $receiver_0;
  };
  FakeSpaceInvaderScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FakeSpaceInvaderScene',
    interfaces: [Scene]
  };
  var SceneContainer$changeToAsync$lambda = wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    function Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$injects = closure$injects_0;
      this.local$closure$time = closure$time_0;
      this.local$closure$transition = closure$transition_0;
      this.local$typeClosure$T = typeClosure$T_0;
      this.local$this$SceneContainer = this$SceneContainer_0;
    }
    Coroutine$SceneContainer$changeToAsync$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$SceneContainer$changeToAsync$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.constructor = Coroutine$SceneContainer$changeToAsync$lambda;
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              var $this = this.local$this$SceneContainer;
              var T_0 = this.local$typeClosure$T;
              var injects = this.local$closure$injects.slice();
              var time = this.local$closure$time;
              var transition = this.local$closure$transition;
              this.state_0 = 2;
              this.result_0 = $this.changeTo_oszfv1$(getKClass(T_0), injects.slice(), time, transition, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function image$lambda_0($receiver) {
    return Unit;
  }
  function sprite$lambda($receiver) {
    return Unit;
  }
  function text$lambda($receiver) {
    return Unit;
  }
  function MainScene(bgMusic) {
    Scene.call(this);
    this.bgMusic_0 = bgMusic;
    this.charStartPosX_0 = 255;
    this.charMaxPosX_0 = this.charStartPosX_0 + 660 | 0;
    this.charStartPosY_0 = 390;
    this.musicChannel_0 = null;
  }
  function MainScene$sceneInit$lambda(this$MainScene) {
    return function ($receiver) {
      position_0($receiver, this$MainScene.charStartPosX_0 + 50 | 0, this$MainScene.charStartPosY_0 - 50 | 0);
      $receiver.visible = false;
      return Unit;
    };
  }
  function MainScene$sceneInit$lambda_0(closure$centerX, this$MainScene) {
    return function ($receiver) {
      position_0($receiver, closure$centerX - 115 | 0, this$MainScene.charStartPosY_0 - 45 | 0);
      $receiver.visible = false;
      return Unit;
    };
  }
  function MainScene$sceneInit$lambda_1(this$MainScene) {
    return function ($receiver) {
      position_0($receiver, this$MainScene.charMaxPosX_0 - 178 | 0, this$MainScene.charStartPosY_0 - 40 | 0);
      $receiver.visible = false;
      return Unit;
    };
  }
  function MainScene$sceneInit$lambda$lambda$lambda$lambda$lambda(this$MainScene) {
    return function (it) {
      var $this = this$MainScene.sceneContainer;
      var injects = [];
      var time;
      var transition;
      if (time === void 0) {
        time = TimeSpan.Companion.fromSeconds_14dthe$(0);
      }if (transition === void 0)
        transition = $this.defaultTransition;
      async(CoroutineScope($this.coroutineContext), SceneContainer$changeToAsync$lambda(injects, time, transition, PongScene, Kotlin.isInstanceOf(PongScene), $this));
      return Unit;
    };
  }
  function MainScene$sceneInit$lambda$lambda$lambda$lambda$lambda_0(this$MainScene) {
    return function (it) {
      var $this = this$MainScene.sceneContainer;
      var injects = [];
      var time;
      var transition;
      if (time === void 0) {
        time = TimeSpan.Companion.fromSeconds_14dthe$(0);
      }if (transition === void 0)
        transition = $this.defaultTransition;
      async(CoroutineScope($this.coroutineContext), SceneContainer$changeToAsync$lambda(injects, time, transition, FakeSpaceInvaderScene, Kotlin.isInstanceOf(FakeSpaceInvaderScene), $this));
      return Unit;
    };
  }
  function Coroutine$MainScene$sceneInit$lambda$lambda$lambda$lambda(closure$door1_0, this$MainScene_0, this$_0, closure$door2_0, closure$door3_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$door1 = closure$door1_0;
    this.local$this$MainScene = this$MainScene_0;
    this.local$this$ = this$_0;
    this.local$closure$door2 = closure$door2_0;
    this.local$closure$door3 = closure$door3_0;
    this.local$it = it_0;
  }
  Coroutine$MainScene$sceneInit$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainScene$sceneInit$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainScene$sceneInit$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$MainScene$sceneInit$lambda$lambda$lambda$lambda;
  Coroutine$MainScene$sceneInit$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$it.key === Key.SPACE)
              if (collidesWith(this.local$this$, this.local$closure$door1)) {
                this.local$closure$door1.playAnimation_tsl5ct$();
                return this.local$closure$door1.onAnimationCompleted.invoke_qlkmfe$(MainScene$sceneInit$lambda$lambda$lambda$lambda$lambda(this.local$this$MainScene)), Unit;
              } else if (collidesWith(this.local$this$, this.local$closure$door2)) {
                this.local$closure$door2.playAnimation_tsl5ct$();
                return this.local$closure$door2.onAnimationCompleted.invoke_qlkmfe$(MainScene$sceneInit$lambda$lambda$lambda$lambda$lambda_0(this.local$this$MainScene)), Unit;
              } else if (collidesWith(this.local$this$, this.local$closure$door3)) {
                var $this = this.local$this$MainScene.sceneContainer;
                var injects = [];
                var time;
                var transition;
                if (time === void 0) {
                  time = TimeSpan.Companion.fromSeconds_14dthe$(0);
                }if (transition === void 0)
                  transition = $this.defaultTransition;
                return async(CoroutineScope($this.coroutineContext), SceneContainer$changeToAsync$lambda(injects, time, transition, PacManScene, Kotlin.isInstanceOf(PacManScene), $this)), Unit;
              }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainScene$sceneInit$lambda$lambda$lambda$lambda(closure$door1_0, this$MainScene_0, this$_0, closure$door2_0, closure$door3_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MainScene$sceneInit$lambda$lambda$lambda$lambda(closure$door1_0, this$MainScene_0, this$_0, closure$door2_0, closure$door3_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MainScene$sceneInit$lambda$lambda(closure$door1, this$MainScene, closure$door2, closure$door3) {
    return function ($receiver) {
      var closure$door1_0 = closure$door1;
      var this$MainScene_0 = this$MainScene;
      var closure$door2_0 = closure$door2;
      var closure$door3_0 = closure$door3;
      get_keys($receiver).onKeyDown.invoke_25kf2w$(MainScene$sceneInit$lambda$lambda$lambda$lambda(closure$door1_0, this$MainScene_0, $receiver, closure$door2_0, closure$door3_0));
      return Unit;
    };
  }
  function MainScene$sceneInit$lambda_2(this$MainScene, closure$door1, closure$door2, closure$door3) {
    return function ($receiver) {
      position_0($receiver, this$MainScene.charStartPosX_0, this$MainScene.charStartPosY_0);
      $receiver.visible = false;
      addFixedUpdater_0($receiver, MainScene$sceneInit$lambda$lambda(closure$door1, this$MainScene, closure$door2, closure$door3));
      return Unit;
    };
  }
  function MainScene$sceneInit$lambda_3(this$MainScene) {
    return function ($receiver) {
      position_0($receiver, this$MainScene.charMaxPosX_0, this$MainScene.charStartPosY_0);
      $receiver.visible = false;
      return Unit;
    };
  }
  function Coroutine$MainScene$sceneInit$lambda$lambda(this$MainScene_0, closure$title_0, closure$instruction_0, closure$headSprite_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MainScene = this$MainScene_0;
    this.local$closure$title = closure$title_0;
    this.local$closure$instruction = closure$instruction_0;
    this.local$closure$headSprite = closure$headSprite_0;
    this.local$it = it_0;
  }
  Coroutine$MainScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$MainScene$sceneInit$lambda$lambda;
  Coroutine$MainScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.local$it.key === Key.SPACE) {
              (tmp$ = this.local$this$MainScene.musicChannel_0) != null ? (tmp$.volume = 1.0) : null;
              this.local$closure$title.visible = false;
              this.local$closure$instruction.visible = false;
              return this.local$closure$headSprite.playAnimation_tsl5ct$(void 0, TimeSpan_0.Companion.fromSeconds_14dthe$(0.15)), Unit;
            }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainScene$sceneInit$lambda$lambda_0(this$MainScene_0, closure$title_0, closure$instruction_0, closure$headSprite_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MainScene$sceneInit$lambda$lambda(this$MainScene_0, closure$title_0, closure$instruction_0, closure$headSprite_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MainScene$sceneInit$lambda_4(closure$headSprite, closure$headOpened, closure$door1, closure$door2, closure$door3, closure$character, closure$boss) {
    return function (it) {
      closure$headSprite.visible = false;
      closure$headOpened.visible = true;
      closure$door1.visible = true;
      closure$door2.visible = true;
      closure$door3.visible = true;
      closure$character.visible = true;
      closure$boss.visible = true;
      return Unit;
    };
  }
  function Coroutine$MainScene$sceneInit$lambda$lambda_0(closure$character_0, this$MainScene_0, closure$characterSpeed_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$character = closure$character_0;
    this.local$this$MainScene = this$MainScene_0;
    this.local$closure$characterSpeed = closure$characterSpeed_0;
    this.local$it = it_0;
  }
  Coroutine$MainScene$sceneInit$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainScene$sceneInit$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainScene$sceneInit$lambda$lambda_0.prototype.constructor = Coroutine$MainScene$sceneInit$lambda$lambda_0;
  Coroutine$MainScene$sceneInit$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$closure$character.visible) {
              switch (this.local$it.key.name) {
                case 'LEFT':
                  if (this.local$closure$character.x > this.local$this$MainScene.charStartPosX_0)
                    return this.local$closure$character.x = this.local$closure$character.x - this.local$closure$characterSpeed, Unit;
                  break;
                case 'RIGHT':
                  if (this.local$closure$character.x < this.local$this$MainScene.charMaxPosX_0)
                    return this.local$closure$character.x = this.local$closure$character.x + this.local$closure$characterSpeed, Unit;
                  break;
                default:return Unit;
              }
            }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainScene$sceneInit$lambda$lambda_1(closure$character_0, this$MainScene_0, closure$characterSpeed_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MainScene$sceneInit$lambda$lambda_0(closure$character_0, this$MainScene_0, closure$characterSpeed_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$sceneInit_st8p7j$_0($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$title = void 0;
    this.local$centerX = void 0;
    this.local$door1 = void 0;
    this.local$door2 = void 0;
    this.local$door3 = void 0;
    this.local$character = void 0;
    this.local$boss = void 0;
    this.local$headOpened = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_0.prototype.constructor = Coroutine$sceneInit_st8p7j$_0;
  Coroutine$sceneInit_st8p7j$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.musicChannel_0 = this.$this.bgMusic_0.play_gfl8bq$();
            showMenuListener(this.local$$receiver, this.$this.sceneContainer);
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('bg_varia.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            image$lambda_0($receiver_0);
            this.state_0 = 3;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('title.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $receiver_0_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            image$lambda_0($receiver_0_0);
            this.local$title = $receiver_0_0;
            this.local$centerX = this.$this.views.actualVirtualWidth / 2 | 0;
            var centerY = this.$this.views.actualVirtualHeight / 2 | 0;
            this.local$tmp$ = SpriteAnimation.Companion;
            this.state_0 = 4;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('doors/door1.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver_0_1 = addTo(Sprite_init(this.local$tmp$.invoke_1yoynw$(this.result_0, 223, 200, void 0, void 0, 5), 0.0, 0.0), this.local$$receiver);
            MainScene$sceneInit$lambda(this.$this)($receiver_0_1);
            this.local$door1 = $receiver_0_1;
            this.local$tmp$_0 = SpriteAnimation.Companion;
            this.state_0 = 5;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('doors/door2.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var $receiver_0_2 = addTo(Sprite_init(this.local$tmp$_0.invoke_1yoynw$(this.result_0, 223, 200, void 0, void 0, 5), 0.0, 0.0), this.local$$receiver);
            MainScene$sceneInit$lambda_0(this.local$centerX, this.$this)($receiver_0_2);
            this.local$door2 = $receiver_0_2;
            this.local$tmp$_1 = SpriteAnimation.Companion;
            this.state_0 = 6;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('doors/door3.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var $receiver_0_3 = addTo(Sprite_init(this.local$tmp$_1.invoke_1yoynw$(this.result_0, 223, 200, void 0, void 0, 5), 0.0, 0.0), this.local$$receiver);
            MainScene$sceneInit$lambda_1(this.$this)($receiver_0_3);
            this.local$door3 = $receiver_0_3;
            this.state_0 = 7;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/character.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            var $receiver_0_4 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            MainScene$sceneInit$lambda_2(this.$this, this.local$door1, this.local$door2, this.local$door3)($receiver_0_4);
            this.local$character = $receiver_0_4;
            this.state_0 = 8;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/boss.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            var $receiver_0_5 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            MainScene$sceneInit$lambda_3(this.$this)($receiver_0_5);
            this.local$boss = $receiver_0_5;
            this.state_0 = 9;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/head_opened.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var $receiver_0_6 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            $receiver_0_6.visible = false;
            this.local$headOpened = $receiver_0_6;
            this.local$tmp$_2 = SpriteAnimation.Companion;
            this.state_0 = 10;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/head_sprite_sheet.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var $receiver_0_7 = addTo(Sprite_init(this.local$tmp$_2.invoke_1yoynw$(this.result_0, 1240, 720, void 0, void 0, 5, 3), 0.0, 0.0), this.local$$receiver);
            sprite$lambda($receiver_0_7);
            var headSprite = $receiver_0_7;
            var text = 'PRESS [SPACE] TO CONTINUE\nAND [ESC] FOR MENU & HELP';
            var color_0_0;
            var font;
            color_0_0 = color_0.Colors.WHITE;
            font = Fonts.Companion.defaultFont;
            var $receiver_0_8 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_0, font), this.local$$receiver);
            text$lambda($receiver_0_8);
            var instruction = position($receiver_0_8, 10.0, 10.0);
            get_keys(this.local$$receiver).onKeyDown.invoke_25kf2w$(MainScene$sceneInit$lambda$lambda_0(this.$this, this.local$title, instruction, headSprite));
            headSprite.onAnimationCompleted.invoke_qlkmfe$(MainScene$sceneInit$lambda_4(headSprite, this.local$headOpened, this.local$door1, this.local$door2, this.local$door3, this.local$character, this.local$boss));
            var characterSpeed = 30;
            get_keys(this.local$$receiver).onKeyDown.invoke_25kf2w$(MainScene$sceneInit$lambda$lambda_1(this.local$character, this.$this, characterSpeed));
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MainScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_0(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneBeforeLeaving($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneBeforeLeaving.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneBeforeLeaving.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneBeforeLeaving.prototype.constructor = Coroutine$sceneBeforeLeaving;
  Coroutine$sceneBeforeLeaving.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneBeforeLeaving.call(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            (tmp$ = this.$this.musicChannel_0) != null ? (tmp$.stop(), Unit) : null;
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MainScene.prototype.sceneBeforeLeaving = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneBeforeLeaving(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  MainScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainScene',
    interfaces: [Scene]
  };
  var SceneContainer$changeToAsync$lambda_0 = wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    function Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$injects = closure$injects_0;
      this.local$closure$time = closure$time_0;
      this.local$closure$transition = closure$transition_0;
      this.local$typeClosure$T = typeClosure$T_0;
      this.local$this$SceneContainer = this$SceneContainer_0;
    }
    Coroutine$SceneContainer$changeToAsync$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$SceneContainer$changeToAsync$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.constructor = Coroutine$SceneContainer$changeToAsync$lambda;
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              var $this = this.local$this$SceneContainer;
              var T_0 = this.local$typeClosure$T;
              var injects = this.local$closure$injects.slice();
              var time = this.local$closure$time;
              var transition = this.local$closure$transition;
              this.state_0 = 2;
              this.result_0 = $this.changeTo_oszfv1$(getKClass(T_0), injects.slice(), time, transition, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda;
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda(closure$handler, it));
      return Unit;
    };
  }
  function text$lambda_0($receiver) {
    return Unit;
  }
  function textButton$lambda($receiver) {
    return Unit;
  }
  function MenuScene() {
    Scene.call(this);
  }
  function Coroutine$MenuScene$sceneInit$lambda$lambda(this$MenuScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MenuScene = this$MenuScene_0;
  }
  Coroutine$MenuScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MenuScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MenuScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$MenuScene$sceneInit$lambda$lambda;
  Coroutine$MenuScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$MenuScene.sceneContainer;
            var injects = [];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            return async(CoroutineScope($this.coroutineContext), SceneContainer$changeToAsync$lambda_0(injects, time, transition, TestScene, Kotlin.isInstanceOf(TestScene), $this));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MenuScene$sceneInit$lambda$lambda(this$MenuScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MenuScene$sceneInit$lambda$lambda(this$MenuScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MenuScene$sceneInit$lambda$lambda_0(this$MenuScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MenuScene = this$MenuScene_0;
  }
  Coroutine$MenuScene$sceneInit$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MenuScene$sceneInit$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MenuScene$sceneInit$lambda$lambda_0.prototype.constructor = Coroutine$MenuScene$sceneInit$lambda$lambda_0;
  Coroutine$MenuScene$sceneInit$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$MenuScene.sceneContainer;
            var injects = [];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            return async(CoroutineScope($this.coroutineContext), SceneContainer$changeToAsync$lambda_0(injects, time, transition, StoryScene, Kotlin.isInstanceOf(StoryScene), $this));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MenuScene$sceneInit$lambda$lambda_0(this$MenuScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MenuScene$sceneInit$lambda$lambda_0(this$MenuScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MenuScene$sceneInit$lambda$lambda_1(this$MenuScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MenuScene = this$MenuScene_0;
  }
  Coroutine$MenuScene$sceneInit$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MenuScene$sceneInit$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MenuScene$sceneInit$lambda$lambda_1.prototype.constructor = Coroutine$MenuScene$sceneInit$lambda$lambda_1;
  Coroutine$MenuScene$sceneInit$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$MenuScene.views.gameWindow.close(), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MenuScene$sceneInit$lambda$lambda_1(this$MenuScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MenuScene$sceneInit$lambda$lambda_1(this$MenuScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  MenuScene.prototype.sceneInit_st8p7j$ = function ($receiver, continuation) {
    var text = 'Press [SPACE] when you hit one of the door to launch a game.\n\n' + 'Press [RIGHT|LEFT] to move.\n\n' + 'Have fun and Thanks for playing! <3\n\n\n\n';
    var color_0_0;
    var font;
    color_0_0 = color_0.Colors.WHITE;
    font = Fonts.Companion.defaultFont;
    var $receiver_0_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_0, font), $receiver);
    text$lambda_0($receiver_0_0);
    position($receiver_0_0, 10.0, 10.0);
    var text_0 = 'So BIG thanks, eternal life & free (blank) ammo for:\n\n' + 'DESIGN: Borbala Matolay - one of my sister\n\n' + 'ANIMATIONS: (mostly) Bernadett Toth & Andras Matolay - my mother & father\n\n' + 'TRANSLATION: Vivien Karacyonyi - one of my favourite friend\n\n' + 'CODE CONTRIBUTION: Gabor Varga who made the PONG much better and cleaner\n\n' + "KorGE Team to make this possible. I'm looking forward to the next one.";
    var color_0_1;
    var font_0;
    color_0_1 = color_0.Colors.WHITE;
    font_0 = Fonts.Companion.defaultFont;
    var $receiver_0_1 = addTo(Text.Companion.invoke_8ii8iq$(text_0, 16.0, color_0_1, font_0), $receiver);
    text$lambda_0($receiver_0_1);
    position($receiver_0_1, 10.0, this.views.actualVirtualHeight / 2.0 + 128);
    var $receiver_0_2 = addTo(new TextButton_init(256.0, 32.0, color.Colors.BLACK.hexString, get_defaultUISkin($receiver), get_defaultUIFont($receiver)), $receiver);
    $receiver_0_2.text = 'MAIN SCREEN';
    position_0($receiver_0_2, (this.views.actualVirtualWidth / 2 | 0) - 128 | 0, (this.views.actualVirtualHeight / 2 | 0) - 192 | 0);
    var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$;
    if ((tmp$ = $receiver_0_2 != null ? get_mouse($receiver_0_2) : null) != null) {
      prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$, MenuScene$sceneInit$lambda$lambda(this)));
    }var $receiver_0_3 = addTo(new TextButton_init(256.0, 32.0, color.Colors.BLACK.hexString, get_defaultUISkin($receiver), get_defaultUIFont($receiver)), $receiver);
    $receiver_0_3.text = 'STORY';
    position_0($receiver_0_3, (this.views.actualVirtualWidth / 2 | 0) - 128 | 0, (this.views.actualVirtualHeight / 2 | 0) - 128 | 0);
    var prop_0 = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$_0;
    if ((tmp$_0 = $receiver_0_3 != null ? get_mouse($receiver_0_3) : null) != null) {
      prop_0.get(tmp$_0).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$_0, MenuScene$sceneInit$lambda$lambda_0(this)));
    }var $receiver_0_4 = addTo(new TextButton_init(256.0, 32.0, color.Colors.BLACK.hexString, get_defaultUISkin($receiver), get_defaultUIFont($receiver)), $receiver);
    $receiver_0_4.text = 'EXIT';
    position_0($receiver_0_4, (this.views.actualVirtualWidth / 2 | 0) - 128 | 0, (this.views.actualVirtualHeight / 2 | 0) - 64 | 0);
    var prop_1 = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$_1;
    if ((tmp$_1 = $receiver_0_4 != null ? get_mouse($receiver_0_4) : null) != null) {
      prop_1.get(tmp$_1).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$_1, MenuScene$sceneInit$lambda$lambda_1(this)));
    }};
  MenuScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuScene',
    interfaces: [Scene]
  };
  function image$lambda_1($receiver) {
    return Unit;
  }
  function text$lambda_1($receiver) {
    return Unit;
  }
  function PacManScene() {
    Scene.call(this);
  }
  function Coroutine$sceneInit_st8p7j$_1($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_1.prototype.constructor = Coroutine$sceneInit_st8p7j$_1;
  Coroutine$sceneInit_st8p7j$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('pacman/pman_sprite.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            image$lambda_1($receiver_0);
            var text = 'COMING SOON';
            var color_0_0;
            var font;
            color_0_0 = color_0.Colors.WHITE;
            font = Fonts.Companion.defaultFont;
            var $receiver_0_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_0, font), this.local$$receiver);
            text$lambda_1($receiver_0_0);
            position_0($receiver_0_0, this.$this.views.actualVirtualWidth / 2 | 0, this.$this.views.actualVirtualHeight / 2 | 0);
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  PacManScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_1(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  PacManScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PacManScene',
    interfaces: [Scene]
  };
  function text$lambda_2($receiver) {
    return Unit;
  }
  function solidRect$lambda_0($receiver) {
    return Unit;
  }
  function circle$lambda_1($receiver) {
    return Unit;
  }
  function PongScene(playerPaddle, computerPaddle) {
    Scene.call(this);
    this.playerPaddle_0 = playerPaddle;
    this.computerPaddle_0 = computerPaddle;
    this.playState_0 = PongScene$PongGameStates$Starting_getInstance();
    this.ball_0 = new Ball();
    this.leftPlayerScore_0 = 0;
    this.rightPlayerScore_0 = 0;
    this.paddlePosYAtStart_0 = 0.0;
    this.ballPosXAtStart_0 = 0.0;
    this.ballPosYAtStart_0 = 0.0;
  }
  function PongScene$PongGameStates() {
  }
  function PongScene$PongGameStates$Starting() {
    PongScene$PongGameStates$Starting_instance = this;
    PongScene$PongGameStates.call(this);
  }
  PongScene$PongGameStates$Starting.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Starting',
    interfaces: [PongScene$PongGameStates]
  };
  var PongScene$PongGameStates$Starting_instance = null;
  function PongScene$PongGameStates$Starting_getInstance() {
    if (PongScene$PongGameStates$Starting_instance === null) {
      new PongScene$PongGameStates$Starting();
    }return PongScene$PongGameStates$Starting_instance;
  }
  function PongScene$PongGameStates$Playing() {
    PongScene$PongGameStates$Playing_instance = this;
    PongScene$PongGameStates.call(this);
  }
  PongScene$PongGameStates$Playing.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Playing',
    interfaces: [PongScene$PongGameStates]
  };
  var PongScene$PongGameStates$Playing_instance = null;
  function PongScene$PongGameStates$Playing_getInstance() {
    if (PongScene$PongGameStates$Playing_instance === null) {
      new PongScene$PongGameStates$Playing();
    }return PongScene$PongGameStates$Playing_instance;
  }
  function PongScene$PongGameStates$Scored() {
    PongScene$PongGameStates$Scored_instance = this;
    PongScene$PongGameStates.call(this);
  }
  PongScene$PongGameStates$Scored.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Scored',
    interfaces: [PongScene$PongGameStates]
  };
  var PongScene$PongGameStates$Scored_instance = null;
  function PongScene$PongGameStates$Scored_getInstance() {
    if (PongScene$PongGameStates$Scored_instance === null) {
      new PongScene$PongGameStates$Scored();
    }return PongScene$PongGameStates$Scored_instance;
  }
  PongScene$PongGameStates.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PongGameStates',
    interfaces: []
  };
  PongScene.prototype.initPongScene_0 = function (sceneView) {
    this.paddlePosYAtStart_0 = (sceneView.actualVirtualHeight / 2 | 0) - 50.0;
    this.ballPosXAtStart_0 = (sceneView.actualVirtualWidth / 2 | 0) - 10.0;
    this.ballPosYAtStart_0 = (sceneView.actualVirtualHeight / 2 | 0) + 10.0;
  };
  function PongScene$sceneInit$lambda$lambda(this$PongScene) {
    return function ($receiver, it) {
      var tmp$;
      tmp$ = this$PongScene.playState_0;
      if (Kotlin.isType(tmp$, PongScene$PongGameStates$Starting)) {
        $receiver.visible = true;
        $receiver.text = 'Welcome to the PONG Game!\n\n' + '-- To move the your Paddle, use the keys [W] and [S] or UP] and [DOWN].\n\n' + '-- To open the Menu, use [ESC]\n\n' + '-- To Start the game, use [SPACE]';
      } else if (Kotlin.isType(tmp$, PongScene$PongGameStates$Scored)) {
        $receiver.visible = true;
        $receiver.text = 'Press [SPACE] for the next round!';
      } else {
        $receiver.visible = false;
      }
      return Unit;
    };
  }
  function PongScene$sceneInit$lambda$lambda_0(this$PongScene) {
    return function ($receiver, it) {
      $receiver.text = this$PongScene.leftPlayerScore_0.toString();
      return Unit;
    };
  }
  function PongScene$sceneInit$lambda$lambda_1(this$PongScene) {
    return function ($receiver, it) {
      $receiver.text = this$PongScene.rightPlayerScore_0.toString();
      return Unit;
    };
  }
  function PongScene$sceneInit$lambda$lambda_2(this$PongScene) {
    return function ($receiver, it) {
      this$PongScene.playerPaddleController_0(this$PongScene.views, $receiver, this$PongScene.playerPaddle_0);
      return Unit;
    };
  }
  function PongScene$sceneInit$lambda$lambda_3(this$PongScene) {
    return function ($receiver, it) {
      this$PongScene.computerPaddleController_0(this$PongScene.views, $receiver, this$PongScene.computerPaddle_0);
      return Unit;
    };
  }
  function PongScene$sceneInit$lambda$lambda_4(this$PongScene, closure$leftPaddle, closure$rightPaddle) {
    return function ($receiver, timeSpan) {
      this$PongScene.ballController_0(this$PongScene.views, timeSpan, $receiver, closure$leftPaddle, closure$rightPaddle);
      return Unit;
    };
  }
  function Coroutine$PongScene$sceneInit$lambda$lambda(this$PongScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$PongScene = this$PongScene_0;
    this.local$it = it_0;
  }
  Coroutine$PongScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PongScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PongScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$PongScene$sceneInit$lambda$lambda;
  Coroutine$PongScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (equals(this.local$it.key, Key.SPACE))
              return this.local$this$PongScene.playState_0 = PongScene$PongGameStates$Playing_getInstance(), Unit;
            else {
              return Unit;
            }

          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function PongScene$sceneInit$lambda$lambda_5(this$PongScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$PongScene$sceneInit$lambda$lambda(this$PongScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  PongScene.prototype.sceneInit_st8p7j$ = function ($receiver, continuation) {
    this.initPongScene_0(this.views);
    addFpsText($receiver, this.views.gameWindow);
    showMenuListener($receiver, this.sceneContainer);
    var color_0_0;
    var font;
    color_0_0 = color_0.Colors.WHITE;
    font = Fonts.Companion.defaultFont;
    var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$('', 16.0, color_0_0, font), $receiver);
    position_0($receiver_0, 10, 100);
    addUpdater($receiver_0, PongScene$sceneInit$lambda$lambda(this));
    var color_0_1;
    var font_0;
    color_0_1 = color_0.Colors.WHITE;
    font_0 = Fonts.Companion.defaultFont;
    var $receiver_0_0 = addTo(Text.Companion.invoke_8ii8iq$('0', 16.0, color_0_1, font_0), $receiver);
    position_0($receiver_0_0, this.views.actualVirtualWidth / 4 | 0, this.views.actualVirtualHeight / 2 | 0);
    addUpdater($receiver_0_0, PongScene$sceneInit$lambda$lambda_0(this));
    var color_0_2;
    var font_1;
    color_0_2 = color_0.Colors.WHITE;
    font_1 = Fonts.Companion.defaultFont;
    var $receiver_0_1 = addTo(Text.Companion.invoke_8ii8iq$('0', 16.0, color_0_2, font_1), $receiver);
    position_0($receiver_0_1, (this.views.actualVirtualWidth * 3 | 0) / 4 | 0, this.views.actualVirtualHeight / 2 | 0);
    addUpdater($receiver_0_1, PongScene$sceneInit$lambda$lambda_1(this));
    var $receiver_0_2 = addTo(new SolidRect_init(this.playerPaddle_0.width, this.playerPaddle_0.height, color.Colors.RED), $receiver);
    position($receiver_0_2, this.playerPaddle_0.distanceFromWall, this.paddlePosYAtStart_0);
    addUpdater($receiver_0_2, PongScene$sceneInit$lambda$lambda_2(this));
    var leftPaddle = $receiver_0_2;
    var $receiver_0_3 = addTo(new SolidRect_init(this.computerPaddle_0.width, this.computerPaddle_0.height, color.Colors.BLUE), $receiver);
    position($receiver_0_3, this.views.actualVirtualWidth - this.computerPaddle_0.distanceFromWall - this.computerPaddle_0.width, this.paddlePosYAtStart_0);
    addUpdater($receiver_0_3, PongScene$sceneInit$lambda$lambda_3(this));
    var rightPaddle = $receiver_0_3;
    var $receiver_0_4 = addTo(new Circle_init(this.ball_0.radius, color.Colors.WHITE, true), $receiver);
    position($receiver_0_4, this.ballPosXAtStart_0, this.ballPosYAtStart_0);
    this.resetRound_0($receiver_0_4, true);
    addUpdater($receiver_0_4, PongScene$sceneInit$lambda$lambda_4(this, leftPaddle, rightPaddle));
    get_keys($receiver).onKeyDown.invoke_25kf2w$(PongScene$sceneInit$lambda$lambda_5(this));
  };
  PongScene.prototype.resetRound_0 = function (ballCircle, isInit) {
    if (isInit === void 0)
      isInit = false;
    this.ball_0.position.x = this.ballPosXAtStart_0;
    this.ball_0.position.y = this.ballPosYAtStart_0;
    this.ball_0.speed = this.ball_0.initialSpeed;
    this.ball_0.angle = Random.Default.nextDouble_lu1900$(0.4, 0.6) * 2 * math.PI;
    ballCircle.x = this.ball_0.position.x;
    ballCircle.y = this.ball_0.position.y;
    if (!isInit) {
      this.playState_0 = PongScene$PongGameStates$Scored_getInstance();
    }};
  PongScene.prototype.ballController_0 = function (sceneView, timeSpan, ballCircle, leftPaddle, rightPaddle) {
    if (equals(this.playState_0, PongScene$PongGameStates$Playing_getInstance())) {
      var tmp$ = this.ball_0.position;
      var tmp$_0 = this.ball_0.position.x;
      var tmp$_1 = this.ball_0.speed;
      var x = this.ball_0.angle;
      tmp$.x = tmp$_0 + tmp$_1 * Math_0.cos(x) * timeSpan.seconds;
      var tmp$_2 = this.ball_0.position;
      var tmp$_3 = this.ball_0.position.y;
      var tmp$_4 = this.ball_0.speed;
      var x_0 = this.ball_0.angle;
      tmp$_2.y = tmp$_3 + tmp$_4 * Math_0.sin(x_0) * timeSpan.seconds;
      ballCircle.x = this.ball_0.position.x;
      ballCircle.y = this.ball_0.position.y;
      if (collidesWith_0(ballCircle, listOf([leftPaddle, rightPaddle]))) {
        this.ball_0.speed = this.ball_0.speed + this.ball_0.speedIncrement;
        this.ball_0.angle = math.PI - this.ball_0.angle;
      }var isWallHit = ballCircle.y < 0 || ballCircle.y > (sceneView.actualVirtualHeight - 20 | 0);
      if (isWallHit) {
        this.ball_0.speed = this.ball_0.speed + 10;
        this.ball_0.angle = this.ball_0.angle * -1;
      }var isLeftPlayerGoal = ballCircle.x > sceneView.actualVirtualWidth;
      var isRightPlayerGoal = ballCircle.x < -20;
      if (isLeftPlayerGoal) {
        this.resetRound_0(ballCircle);
        this.leftPlayerScore_0 = this.leftPlayerScore_0 + 1 | 0;
      } else if (isRightPlayerGoal) {
        this.resetRound_0(ballCircle);
        this.rightPlayerScore_0 = this.rightPlayerScore_0 + 1 | 0;
      }}};
  PongScene.prototype.playerPaddleController_0 = function (sceneView, paddleRectView, paddle) {
    var isUpPressed = sceneView.input.keys.get_9s040q$(Key.W) || sceneView.input.keys.get_9s040q$(Key.UP);
    var isDownPressed = sceneView.input.keys.get_9s040q$(Key.S) || sceneView.input.keys.get_9s040q$(Key.DOWN);
    if (isUpPressed && paddleRectView.y > 0) {
      paddleRectView.y = paddleRectView.y - paddle.moveSpeed;
    } else if (isDownPressed && paddleRectView.y < sceneView.actualVirtualHeight - paddle.height) {
      paddleRectView.y = paddleRectView.y + paddle.moveSpeed;
    }};
  PongScene.prototype.computerPaddleController_0 = function (sceneView, paddleRectView, paddle) {
    if (Kotlin.isType(this.playState_0, PongScene$PongGameStates$Playing)) {
      var isBallAbovePaddle = this.ball_0.position.y < paddleRectView.y;
      var isBallBelowPaddle = this.ball_0.position.y > paddleRectView.y + paddle.height;
      var isPadBelowTopWall = paddleRectView.y > 0;
      var isPadAboveBottomWall = paddleRectView.y < sceneView.actualVirtualHeight - paddle.height;
      if (isPadBelowTopWall && isPadAboveBottomWall) {
        if (isBallAbovePaddle) {
          paddleRectView.y = paddleRectView.y - paddle.moveSpeed;
        } else if (isBallBelowPaddle) {
          paddleRectView.y = paddleRectView.y + paddle.moveSpeed;
        }} else {
        if (isPadBelowTopWall) {
          paddleRectView.y = paddleRectView.y - paddle.moveSpeed;
        } else {
          paddleRectView.y = paddleRectView.y + paddle.moveSpeed;
        }
      }
    }};
  PongScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PongScene',
    interfaces: [Scene]
  };
  function Coroutine$doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda_0;
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda_0(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda_0(closure$handler, it));
      return Unit;
    };
  }
  var SceneContainer$changeToAsync$lambda_1 = wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    function Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$injects = closure$injects_0;
      this.local$closure$time = closure$time_0;
      this.local$closure$transition = closure$transition_0;
      this.local$typeClosure$T = typeClosure$T_0;
      this.local$this$SceneContainer = this$SceneContainer_0;
    }
    Coroutine$SceneContainer$changeToAsync$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$SceneContainer$changeToAsync$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.constructor = Coroutine$SceneContainer$changeToAsync$lambda;
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              var $this = this.local$this$SceneContainer;
              var T_0 = this.local$typeClosure$T;
              var injects = this.local$closure$injects.slice();
              var time = this.local$closure$time;
              var transition = this.local$closure$transition;
              this.state_0 = 2;
              this.result_0 = $this.changeTo_oszfv1$(getKClass(T_0), injects.slice(), time, transition, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function image$lambda_2($receiver) {
    return Unit;
  }
  function textButton$lambda_0($receiver) {
    return Unit;
  }
  function StoryScene(music) {
    if (music === void 0)
      music = null;
    Scene.call(this);
    this.music = music;
    this.channel_13st4k$_0 = this.channel_13st4k$_0;
    this.pageIndex_0 = 1;
  }
  Object.defineProperty(StoryScene.prototype, 'channel_0', {
    get: function () {
      if (this.channel_13st4k$_0 == null)
        return throwUPAE('channel');
      return this.channel_13st4k$_0;
    },
    set: function (channel) {
      this.channel_13st4k$_0 = channel;
    }
  });
  function StoryScene$sceneInit$lambda(this$StoryScene) {
    return function ($receiver) {
      $receiver.x = this$StoryScene.views.actualVirtualWidth - 520;
      $receiver.scale = 0.5;
      return Unit;
    };
  }
  function StoryScene$sceneInit$lambda_0(this$StoryScene) {
    return function ($receiver) {
      $receiver.x = this$StoryScene.views.actualVirtualWidth - 520;
      $receiver.scale = 0.5;
      $receiver.visible = false;
      return Unit;
    };
  }
  function StoryScene$sceneInit$lambda_1(this$StoryScene) {
    return function ($receiver) {
      $receiver.x = this$StoryScene.views.actualVirtualWidth - 520;
      $receiver.scale = 0.5;
      $receiver.visible = false;
      return Unit;
    };
  }
  function Coroutine$StoryScene$sceneInit$lambda$lambda(this$StoryScene_0, closure$pages_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$StoryScene = this$StoryScene_0;
    this.local$closure$pages = closure$pages_0;
  }
  Coroutine$StoryScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$StoryScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$StoryScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$StoryScene$sceneInit$lambda$lambda;
  Coroutine$StoryScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            println(this.local$this$StoryScene.pageIndex_0);
            switch (this.local$this$StoryScene.pageIndex_0) {
              case 1:
                this.local$closure$pages.get_za3lpa$(0).visible = false;
                this.local$closure$pages.get_za3lpa$(1).visible = false;
                this.local$closure$pages.get_za3lpa$(2).visible = true;
                this.local$closure$pages.get_za3lpa$(3).visible = true;
                return this.local$this$StoryScene.pageIndex_0 = this.local$this$StoryScene.pageIndex_0 + 1 | 0, this.local$this$StoryScene.pageIndex_0;
              case 2:
                this.local$closure$pages.get_za3lpa$(2).visible = false;
                this.local$closure$pages.get_za3lpa$(3).visible = false;
                this.local$closure$pages.get_za3lpa$(4).visible = true;
                this.local$closure$pages.get_za3lpa$(5).visible = true;
                return this.local$this$StoryScene.pageIndex_0 = this.local$this$StoryScene.pageIndex_0 + 1 | 0, this.local$this$StoryScene.pageIndex_0;
              case 3:
                this.local$closure$pages.get_za3lpa$(4).visible = false;
                this.local$closure$pages.get_za3lpa$(5).visible = false;
                this.local$closure$pages.get_za3lpa$(0).visible = true;
                this.local$closure$pages.get_za3lpa$(1).visible = true;
                return this.local$this$StoryScene.pageIndex_0 = 1, Unit;
            }

            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function StoryScene$sceneInit$lambda$lambda(this$StoryScene_0, closure$pages_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$StoryScene$sceneInit$lambda$lambda(this$StoryScene_0, closure$pages_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$StoryScene$sceneInit$lambda$lambda_0(this$StoryScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$StoryScene = this$StoryScene_0;
    this.local$it = it_0;
  }
  Coroutine$StoryScene$sceneInit$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$StoryScene$sceneInit$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$StoryScene$sceneInit$lambda$lambda_0.prototype.constructor = Coroutine$StoryScene$sceneInit$lambda$lambda_0;
  Coroutine$StoryScene$sceneInit$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$it.key === Key.ESCAPE) {
              var $this = this.local$this$StoryScene.sceneContainer;
              var injects = [];
              var time;
              var transition;
              if (time === void 0) {
                time = TimeSpan.Companion.fromSeconds_14dthe$(0);
              }if (transition === void 0)
                transition = $this.defaultTransition;
              return async(CoroutineScope($this.coroutineContext), SceneContainer$changeToAsync$lambda_1(injects, time, transition, MenuScene, Kotlin.isInstanceOf(MenuScene), $this)), Unit;
            }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function StoryScene$sceneInit$lambda$lambda_0(this$StoryScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$StoryScene$sceneInit$lambda$lambda_0(this$StoryScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$sceneInit_st8p7j$_2($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver_0 = void 0;
    this.local$$receiver_0_0 = void 0;
    this.local$$receiver_0_1 = void 0;
    this.local$$receiver_0_2 = void 0;
    this.local$$receiver_0_3 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_2.prototype.constructor = Coroutine$sceneInit_st8p7j$_2;
  Coroutine$sceneInit_st8p7j$_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('story/page1.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            this.local$$receiver_0.scale = 0.5;
            this.local$$receiver_0.x += 20;
            this.state_0 = 3;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('story/page2.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$$receiver_0_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            StoryScene$sceneInit$lambda(this.$this)(this.local$$receiver_0_0);
            this.state_0 = 4;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('story/page3.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$$receiver_0_1 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            this.local$$receiver_0_1.scale = 0.5;
            this.local$$receiver_0_1.x += 20;
            this.local$$receiver_0_1.visible = false;
            this.state_0 = 5;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('story/page4.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$$receiver_0_2 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            StoryScene$sceneInit$lambda_0(this.$this)(this.local$$receiver_0_2);
            this.state_0 = 6;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('story/page5.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$$receiver_0_3 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            this.local$$receiver_0_3.scale = 0.5;
            this.local$$receiver_0_3.x += 20;
            this.local$$receiver_0_3.visible = false;
            this.state_0 = 7;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('story/page6.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            var $receiver_0_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            StoryScene$sceneInit$lambda_1(this.$this)($receiver_0_0);
            var pages = listOf([this.local$$receiver_0, this.local$$receiver_0_0, this.local$$receiver_0_1, this.local$$receiver_0_2, this.local$$receiver_0_3, $receiver_0_0]);
            var $receiver_0_1 = addTo(new TextButton_init(150.0, 32.0, 'Button', get_defaultUISkin(this.local$$receiver), get_defaultUIFont(this.local$$receiver)), this.local$$receiver);
            $receiver_0_1.text = 'NEXT';
            position_0($receiver_0_1, (this.$this.views.actualVirtualWidth / 2 | 0) - 75 | 0, this.$this.views.actualVirtualHeight / 2 | 0);
            var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$;
            if ((tmp$ = $receiver_0_1 != null ? get_mouse($receiver_0_1) : null) != null) {
              prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda_0(tmp$, StoryScene$sceneInit$lambda$lambda(this.$this, pages)));
            }
            get_keys(this.local$$receiver).onKeyDown.invoke_25kf2w$(StoryScene$sceneInit$lambda$lambda_0(this.$this));
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  StoryScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_2(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneBeforeLeaving_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneBeforeLeaving_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneBeforeLeaving_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneBeforeLeaving_0.prototype.constructor = Coroutine$sceneBeforeLeaving_0;
  Coroutine$sceneBeforeLeaving_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneBeforeLeaving.call(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.channel_0.stop();
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  StoryScene.prototype.sceneBeforeLeaving = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneBeforeLeaving_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  StoryScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StoryScene',
    interfaces: [Scene]
  };
  function image$lambda_3($receiver) {
    return Unit;
  }
  var SceneContainer$changeToAsync$lambda_2 = wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    function Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$injects = closure$injects_0;
      this.local$closure$time = closure$time_0;
      this.local$closure$transition = closure$transition_0;
      this.local$typeClosure$T = typeClosure$T_0;
      this.local$this$SceneContainer = this$SceneContainer_0;
    }
    Coroutine$SceneContainer$changeToAsync$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$SceneContainer$changeToAsync$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.constructor = Coroutine$SceneContainer$changeToAsync$lambda;
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              var $this = this.local$this$SceneContainer;
              var T_0 = this.local$typeClosure$T;
              var injects = this.local$closure$injects.slice();
              var time = this.local$closure$time;
              var transition = this.local$closure$transition;
              this.state_0 = 2;
              this.result_0 = $this.changeTo_oszfv1$(getKClass(T_0), injects.slice(), time, transition, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function sprite$lambda_0($receiver) {
    return Unit;
  }
  function text$lambda_3($receiver) {
    return Unit;
  }
  function TestScene() {
    Scene.call(this);
    this.player_0 = new Player();
    this.isOpened_0 = false;
  }
  function TestScene$sceneInit$lambda(this$TestScene) {
    return function ($receiver) {
      position($receiver, this$TestScene.views.actualVirtualWidth / 2.0, this$TestScene.player_0.y - 45);
      $receiver.visible = false;
      return Unit;
    };
  }
  function TestScene$sceneInit$lambda$lambda(this$TestScene) {
    return function ($receiver) {
      $receiver.visible = false;
      position($receiver, this$TestScene.player_0.x, this$TestScene.player_0.y);
      return Unit;
    };
  }
  function TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda$lambda(closure$door) {
    return function (it) {
      closure$door.setFrame_za3lpa$(0);
      return Unit;
    };
  }
  function TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda$lambda_0(this$TestScene) {
    return function (it) {
      var $this = this$TestScene.sceneContainer;
      var injects = [];
      var time;
      var transition;
      if (time === void 0) {
        time = TimeSpan.Companion.fromSeconds_14dthe$(0);
      }if (transition === void 0)
        transition = $this.defaultTransition;
      async(CoroutineScope($this.coroutineContext), SceneContainer$changeToAsync$lambda_2(injects, time, transition, PongScene, Kotlin.isInstanceOf(PongScene), $this));
      return Unit;
    };
  }
  function Coroutine$TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda(closure$door_0, this$TestScene_0, this$_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$door = closure$door_0;
    this.local$this$TestScene = this$TestScene_0;
    this.local$this$ = this$_0;
    this.local$it = it_0;
  }
  Coroutine$TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda;
  Coroutine$TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$it.key === Key.SPACE)
              if (collidesWith(this.local$this$, this.local$closure$door)) {
                this.local$closure$door.playAnimation_tsl5ct$();
                this.local$closure$door.onAnimationCompleted.invoke_qlkmfe$(TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda$lambda(this.local$closure$door));
                return this.local$closure$door.onAnimationCompleted.invoke_qlkmfe$(TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$this$TestScene)), Unit;
              }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda(closure$door_0, this$TestScene_0, this$_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda(closure$door_0, this$TestScene_0, this$_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function TestScene$sceneInit$lambda$lambda$lambda(closure$door, this$TestScene) {
    return function ($receiver) {
      var closure$door_0 = closure$door;
      var this$TestScene_0 = this$TestScene;
      get_keys($receiver).onKeyDown.invoke_25kf2w$(TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda(closure$door_0, this$TestScene_0, $receiver));
      return Unit;
    };
  }
  function TestScene$sceneInit$lambda$lambda_0(this$TestScene, closure$door) {
    return function ($receiver) {
      $receiver.visible = false;
      position($receiver, this$TestScene.player_0.x, this$TestScene.player_0.y);
      addFixedUpdater_0($receiver, TestScene$sceneInit$lambda$lambda$lambda(closure$door, this$TestScene));
      return Unit;
    };
  }
  function TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda_0(this$) {
    return function (it) {
      this$.visible = true;
      return Unit;
    };
  }
  function TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda_1(this$) {
    return function (it) {
      this$.setFrame_za3lpa$(0);
      return Unit;
    };
  }
  function TestScene$sceneInit$lambda$lambda$lambda$lambda(closure$headSprite, closure$headOpened, closure$door, this$TestScene) {
    return function (it) {
      var tmp$;
      closure$headSprite.visible = false;
      closure$headOpened.visible = true;
      closure$door.visible = true;
      (Kotlin.isType(tmp$ = this$TestScene.player_0.actions.get_za3lpa$(1), Character$Action$Move) ? tmp$ : throwCCE()).sprite.visible = true;
      closure$door.visible = true;
      return Unit;
    };
  }
  function Coroutine$TestScene$sceneInit$lambda$lambda(this$TestScene_0, closure$instruction_0, closure$title_0, closure$headSprite_0, closure$headOpened_0, closure$door_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$TestScene = this$TestScene_0;
    this.local$closure$instruction = closure$instruction_0;
    this.local$closure$title = closure$title_0;
    this.local$closure$headSprite = closure$headSprite_0;
    this.local$closure$headOpened = closure$headOpened_0;
    this.local$closure$door = closure$door_0;
    this.local$it = it_0;
  }
  Coroutine$TestScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TestScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TestScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$TestScene$sceneInit$lambda$lambda;
  Coroutine$TestScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            switch (this.local$it.key.name) {
              case 'LEFT':
                this.local$this$TestScene.player_0.actions.get_za3lpa$(0).image.visible = true;
                return (Kotlin.isType(tmp$ = this.local$this$TestScene.player_0.actions.get_za3lpa$(1), Character$Action$Move) ? tmp$ : throwCCE()).sprite.visible = false, Unit;
              case 'RIGHT':
                this.local$this$TestScene.player_0.actions.get_za3lpa$(0).image.visible = false;
                var $receiver = (Kotlin.isType(tmp$_0 = this.local$this$TestScene.player_0.actions.get_za3lpa$(1), Character$Action$Move) ? tmp$_0 : throwCCE()).sprite;
                var this$TestScene = this.local$this$TestScene;
                var tmp$_1;
                $receiver.visible = true;
                if ($receiver.visible && this$TestScene.player_0.x < this$TestScene.player_0.maxPosX) {
                  this$TestScene.player_0.x = this$TestScene.player_0.x + 10;
                  this$TestScene.player_0.actions.get_za3lpa$(0).image.x = this$TestScene.player_0.x;
                  var $receiver_0 = (Kotlin.isType(tmp$_1 = this$TestScene.player_0.actions.get_za3lpa$(1), Character$Action$Move) ? tmp$_1 : throwCCE()).sprite;
                  $receiver_0.playAnimation_tsl5ct$(void 0, TimeSpan_0.Companion.fromSeconds_14dthe$(0.1));
                  $receiver_0.onAnimationStarted.invoke_qlkmfe$(TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda_0($receiver_0));
                  $receiver_0.onAnimationCompleted.invoke_qlkmfe$(TestScene$sceneInit$lambda$lambda$lambda$lambda$lambda_1($receiver_0));
                  $receiver_0.x = this$TestScene.player_0.x;
                }
                return $receiver;
              case 'SPACE':
                if (!this.local$this$TestScene.isOpened_0) {
                  this.local$closure$instruction.visible = false;
                  this.local$closure$title.visible = false;
                  var $receiver_1 = this.local$closure$headSprite;
                  var closure$headSprite = this.local$closure$headSprite;
                  var closure$headOpened = this.local$closure$headOpened;
                  var closure$door = this.local$closure$door;
                  var this$TestScene_0 = this.local$this$TestScene;
                  $receiver_1.playAnimation_tsl5ct$(void 0, TimeSpan_0.Companion.fromSeconds_14dthe$(0.15));
                  $receiver_1.onAnimationCompleted.invoke_qlkmfe$(TestScene$sceneInit$lambda$lambda$lambda$lambda(closure$headSprite, closure$headOpened, closure$door, this$TestScene_0));
                  return this.local$this$TestScene.isOpened_0 = true, Unit;
                }
                break;
              default:return Unit;
            }

            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function TestScene$sceneInit$lambda$lambda_1(this$TestScene_0, closure$instruction_0, closure$title_0, closure$headSprite_0, closure$headOpened_0, closure$door_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$TestScene$sceneInit$lambda$lambda(this$TestScene_0, closure$instruction_0, closure$title_0, closure$headSprite_0, closure$headOpened_0, closure$door_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$sceneInit_st8p7j$_3($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$title = void 0;
    this.local$door = void 0;
    this.local$headOpened = void 0;
    this.local$headSprite = void 0;
    this.local$instruction = void 0;
    this.local$tmp$_1 = void 0;
    this.local$$receiver_0 = void 0;
    this.local$$receiver_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_3.prototype.constructor = Coroutine$sceneInit_st8p7j$_3;
  Coroutine$sceneInit_st8p7j$_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            showMenuListener(this.local$$receiver, this.$this.sceneContainer);
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('bg_varia.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            image$lambda_3($receiver_0);
            this.state_0 = 3;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('title.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $receiver_0_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            image$lambda_3($receiver_0_0);
            this.local$title = $receiver_0_0;
            this.local$tmp$ = SpriteAnimation.Companion;
            this.state_0 = 4;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('doors/door1.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver_0_1 = addTo(Sprite_init(this.local$tmp$.invoke_1yoynw$(this.result_0, 223, 200, void 0, void 0, 5), 0.0, 0.0), this.local$$receiver);
            TestScene$sceneInit$lambda(this.$this)($receiver_0_1);
            this.local$door = $receiver_0_1;
            this.state_0 = 5;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/head_opened.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var $receiver_0_2 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            $receiver_0_2.visible = false;
            this.local$headOpened = $receiver_0_2;
            this.local$tmp$_0 = SpriteAnimation.Companion;
            this.state_0 = 6;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/head_sprite_sheet.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var $receiver_0_3 = addTo(Sprite_init(this.local$tmp$_0.invoke_1yoynw$(this.result_0, 1240, 720, void 0, void 0, 5, 3), 0.0, 0.0), this.local$$receiver);
            sprite$lambda_0($receiver_0_3);
            this.local$headSprite = $receiver_0_3;
            var text = 'PRESS [SPACE] TO CONTINUE\nAND [ESC] FOR MENU & HELP';
            var color_0_0;
            var font;
            color_0_0 = color_0.Colors.WHITE;
            font = Fonts.Companion.defaultFont;
            var $receiver_0_4 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_0, font), this.local$$receiver);
            text$lambda_3($receiver_0_4);
            this.local$instruction = position($receiver_0_4, 10.0, 10.0);
            this.local$tmp$_1 = this.$this.player_0;
            this.local$$receiver_0 = Character$Action$Look$Backward_getInstance();
            this.state_0 = 7;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/boss.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            var $receiver_0_5 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            TestScene$sceneInit$lambda$lambda(this.$this)($receiver_0_5);
            this.local$$receiver_0.image = $receiver_0_5;
            this.local$$receiver_1 = Character$Action$Move$Forward_getInstance();
            this.local$tmp$_2 = SpriteAnimation.Companion;
            this.state_0 = 8;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/character_moving_forward.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            var $receiver_0_6 = addTo(Sprite_init(this.local$tmp$_2.invoke_1yoynw$(this.result_0, 40, 150, void 0, void 0, 5), 0.0, 0.0), this.local$$receiver);
            TestScene$sceneInit$lambda$lambda_0(this.$this, this.local$door)($receiver_0_6);
            this.local$$receiver_1.sprite = $receiver_0_6;
            this.local$tmp$_1.actions = listOf([this.local$$receiver_0, this.local$$receiver_1]);
            get_keys(this.local$$receiver).onKeyDown.invoke_25kf2w$(TestScene$sceneInit$lambda$lambda_1(this.$this, this.local$instruction, this.local$title, this.local$headSprite, this.local$headOpened, this.local$door));
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  TestScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_3(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneDestroy($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneDestroy.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneDestroy.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneDestroy.prototype.constructor = Coroutine$sceneDestroy;
  Coroutine$sceneDestroy.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneDestroy.call(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.views.gameWindow.fullscreen = false;
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  TestScene.prototype.sceneDestroy = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneDestroy(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  TestScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestScene',
    interfaces: [Scene]
  };
  function text$lambda_4($receiver) {
    return Unit;
  }
  var SceneContainer$changeToAsync$lambda_3 = wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    function Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$injects = closure$injects_0;
      this.local$closure$time = closure$time_0;
      this.local$closure$transition = closure$transition_0;
      this.local$typeClosure$T = typeClosure$T_0;
      this.local$this$SceneContainer = this$SceneContainer_0;
    }
    Coroutine$SceneContainer$changeToAsync$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$SceneContainer$changeToAsync$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.constructor = Coroutine$SceneContainer$changeToAsync$lambda;
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              var $this = this.local$this$SceneContainer;
              var T_0 = this.local$typeClosure$T;
              var injects = this.local$closure$injects.slice();
              var time = this.local$closure$time;
              var transition = this.local$closure$transition;
              this.state_0 = 2;
              this.result_0 = $this.changeTo_oszfv1$(getKClass(T_0), injects.slice(), time, transition, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function addFpsText$lambda$lambda(closure$window) {
    return function ($receiver) {
      $receiver.text = 'FPS: ' + closure$window.fps.toString();
      return Unit;
    };
  }
  function addFpsText($receiver, window_0) {
    var color_0_0;
    var font;
    color_0_0 = color_0.Colors.WHITE;
    font = Fonts.Companion.defaultFont;
    var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$('FPS: 0', 16.0, color_0_0, font), $receiver);
    position_0($receiver_0, 10, 10);
    addFixedUpdater_0($receiver_0, addFpsText$lambda$lambda(window_0));
    return $receiver_0;
  }
  function Coroutine$showMenuListener$lambda$lambda(closure$sceneContainer_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$sceneContainer = closure$sceneContainer_0;
    this.local$it = it_0;
  }
  Coroutine$showMenuListener$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showMenuListener$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showMenuListener$lambda$lambda.prototype.constructor = Coroutine$showMenuListener$lambda$lambda;
  Coroutine$showMenuListener$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$it.key === Key.ESCAPE) {
              var $this = this.local$closure$sceneContainer;
              var injects = [];
              var time;
              var transition;
              if (time === void 0) {
                time = TimeSpan.Companion.fromSeconds_14dthe$(0);
              }if (transition === void 0)
                transition = $this.defaultTransition;
              return async(CoroutineScope($this.coroutineContext), SceneContainer$changeToAsync$lambda_3(injects, time, transition, MenuScene, Kotlin.isInstanceOf(MenuScene), $this)), Unit;
            }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function showMenuListener$lambda$lambda(closure$sceneContainer_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$showMenuListener$lambda$lambda(closure$sceneContainer_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function showMenuListener($receiver, sceneContainer) {
    return get_keys($receiver).onKeyDown.invoke_25kf2w$(showMenuListener$lambda$lambda(sceneContainer));
  }
  function GameState() {
  }
  function GameState$Running(scene) {
    if (scene === void 0)
      scene = null;
    GameState.call(this);
  }
  GameState$Running.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Running',
    interfaces: [GameState]
  };
  function GameState$Paused(isMenuOpened) {
    if (isMenuOpened === void 0)
      isMenuOpened = false;
    GameState.call(this);
  }
  GameState$Paused.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paused',
    interfaces: [GameState]
  };
  function GameState$Resetting() {
    GameState$Resetting_instance = this;
    GameState.call(this);
  }
  GameState$Resetting.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Resetting',
    interfaces: [GameState]
  };
  var GameState$Resetting_instance = null;
  function GameState$Resetting_getInstance() {
    if (GameState$Resetting_instance === null) {
      new GameState$Resetting();
    }return GameState$Resetting_instance;
  }
  GameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameState',
    interfaces: []
  };
  function get_0($receiver, action) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      equals(element, action);
    }
    return null;
  }
  function get_1($receiver, action) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      equals(element, action);
    }
    return null;
  }
  function addFixedUpdater_0($receiver, updatable) {
    return addFixedUpdater($receiver, get_timesPerSecond(60), void 0, void 0, updatable);
  }
  Object.defineProperty(GameBall, 'Companion', {
    get: GameBall$Companion_getInstance
  });
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  _.GameBall = GameBall;
  _.main = main;
  $$importsForInline$$['korinject-root-korinject'] = $module$korinject_root_korinject;
  Object.defineProperty(_, 'GameModule', {
    get: GameModule_getInstance
  });
  Object.defineProperty(Character$Action$Look, 'Forward', {
    get: Character$Action$Look$Forward_getInstance
  });
  Object.defineProperty(Character$Action$Look, 'Backward', {
    get: Character$Action$Look$Backward_getInstance
  });
  Character$Action.Look = Character$Action$Look;
  Object.defineProperty(Character$Action$Move, 'Forward', {
    get: Character$Action$Move$Forward_getInstance
  });
  Object.defineProperty(Character$Action$Move, 'Backward', {
    get: Character$Action$Move$Backward_getInstance
  });
  Character$Action.Move = Character$Action$Move;
  Character.Action = Character$Action;
  var package$model = _.model || (_.model = {});
  package$model.Character = Character;
  package$model.Player = Player;
  var package$pong = _.pong || (_.pong = {});
  package$pong.Ball = Ball;
  package$pong.Paddle = Paddle;
  package$pong.Position = Position;
  var package$scene = _.scene || (_.scene = {});
  package$scene.FakeSpaceInvaderScene = FakeSpaceInvaderScene;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  package$scene.MainScene = MainScene;
  package$scene.MenuScene = MenuScene;
  package$scene.PacManScene = PacManScene;
  Object.defineProperty(PongScene$PongGameStates, 'Starting', {
    get: PongScene$PongGameStates$Starting_getInstance
  });
  Object.defineProperty(PongScene$PongGameStates, 'Playing', {
    get: PongScene$PongGameStates$Playing_getInstance
  });
  Object.defineProperty(PongScene$PongGameStates, 'Scored', {
    get: PongScene$PongGameStates$Scored_getInstance
  });
  PongScene.PongGameStates = PongScene$PongGameStates;
  package$scene.PongScene = PongScene;
  package$scene.StoryScene = StoryScene;
  package$scene.TestScene = TestScene;
  var package$utils = _.utils || (_.utils = {});
  package$utils.addFpsText_bvte2f$ = addFpsText;
  package$utils.showMenuListener_xqu3g0$ = showMenuListener;
  GameState.Running = GameState$Running;
  GameState.Paused = GameState$Paused;
  Object.defineProperty(GameState, 'Resetting', {
    get: GameState$Resetting_getInstance
  });
  package$utils.GameState = GameState;
  package$utils.get_a4kbbm$ = get_0;
  package$utils.get_uqzjut$ = get_1;
  package$utils.addFixedUpdater_mbuwh6$ = addFixedUpdater_0;
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('TheUltimateClassicGame', _);
  return _;
}));

//# sourceMappingURL=TheUltimateClassicGame.js.map
