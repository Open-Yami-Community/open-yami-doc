---
sidebar_position: 1
title: loadAnimation 加载触发器动画
---

## loadAnimation

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

加载触发器动画

参数 `data`: 触发器文件数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `data` | `TriggerFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 147 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L147)

```typescript
private loadAnimation(data: TriggerFile): void {
    const animData = Data.animations[data.animationId]
    if (animData !== undefined) {
      const animation = new AnimationPlayer(animData)
      animation.parent = this
      animation.scale = this.scale
      animation.setPosition(this)
      animation.priority = data.priority
      animation.offsetY = data.offsetY
      animation.setMotion(data.motion)
      animation.redirect = animation.dirList.length > 1
      animation.rotatable = data.rotatable
      this.animation = animation
      if (this.duration === 0) {
        // 如果触发器持续时间是0，将会使用动画的持续时间
        this.duration = animation.length * AnimationPlayer.step
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
