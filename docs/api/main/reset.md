---
sidebar_position: 1
title: reset 重置游戏
---

## reset

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

重置游戏

### 返回值

类型: `void`

### 源代码

**位置**: [第 140 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L140)

```typescript
public reset(): void {
    this.pauseCount = 0
    this.paused = false

    // 重置相关组件
    Time.reset()
    UI.reset()
    Scene.reset()
    Camera.reset()
    ScreenTinter.reset()
    Variable.reset()
    SelfVariable.reset()
    AudioManager.reset()
    EventManager.reset()
    ActorManager.reset()
    Party.reset()

    // 触发reset事件
    Game.emit('reset')
  }
```

---



文档生成时间：2026/1/31 13:13:59
