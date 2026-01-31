---
sidebar_position: 1
title: updateAnimation 更新触发器动画播放进度
---

## updateAnimation

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

更新触发器动画播放进度

参数 `deltaTime`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `deltaTime` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 394 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L394)

```typescript
public updateAnimation(deltaTime: number): void {
    const {animation} = this
    // 如果不存在动画，返回
    if (animation === null) return
    if (animation.redirect) {
      // 如果开启了动画方向计算
      this.calculateAnimDirection()
    } else if (animation.rotatable) {
      // 如果开启了动画旋转，调整旋转角度
      animation.rotation = this.angle
    }
    // 更新动画
    animation.update(deltaTime)
  }
```

---



文档生成时间：2026/1/31 13:13:59
