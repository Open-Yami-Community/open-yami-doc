---
sidebar_position: 1
title: initialize 初始化游戏
---

## initialize

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

初始化游戏

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 24 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L24)

```typescript
public async initialize(): Promise<void> {
    // 注册退出事件
    Game.registerExitEvent()

    // 初始化数据内容
    await Data.initialize()

    // 初始化组件对象
    Command.initialize()
    EventManager.initialize()
    PluginManager.initialize()
    Time.initialize()
    WebGL.initialize()
    Stage.initialize()
    Local.initialize()
    Input.initialize()
    Mouse.initialize()
    Controller.initialize()
    VirtualAxis.initialize()
    UI.initialize()
    Scene.initialize()
    Camera.initialize()
    PathFinder.initialize()
    Actor.initialize()
    ActorCollider.initialize()
    AnimationPlayer.initialize()
    ParticleLayer.initialize()
    Trigger.initialize()
    Team.initialize()
    Easing.initialize()
    Variable.initialize()
    AudioManager.initialize()
    MessageReporter.initialize()

    // 设置更新器(按顺序更新每一帧)
    Game.updaters = new UpdaterList(
      Callback,
      Loader,
      Input,
      Timer,
      Scene,
      Camera,
      EventManager,
      UI,
      AudioManager,
      CacheList,
      Callback,
    )

    // 设置渲染器(按顺序渲染每一帧)
    Game.renderers = new RendererList(
      Camera,
      OffscreenStart,
      Scene,
      OffscreenEnd,
      UI,
    )

    // 开始游戏循环
    Game.loop(0)

    // 加载字体
    await Printer.initialize()

    // 预加载文件
    await Loader.preload()

    // 触发ready事件
    Game.emit('ready')

    // 开始游戏
    Game.start()
  }
```

---



文档生成时间：2026/1/31 13:13:59
