---
sidebar_position: 1
title: setOffsetY 设置动画垂直偏移位置
---

## setOffsetY

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置动画垂直偏移位置

参数 `id`: 过渡更新器的ID

参数 `updaters`: 更新器列表

参数 `offsetY`: 垂直偏移位置

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |
| `updaters` | `UpdaterList` | - | - |
| `offsetY` | `number` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 442 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L442)

```typescript
public setOffsetY(id: string, updaters: UpdaterList, offsetY: number, easingId: string = '', duration: number = 0): void {
    if (duration > 0) {
      let elapsed = 0
      const start = this.offsetY
      const easing = Easing.get(easingId)
      updaters.set(id, {
        update: deltaTime => {
          elapsed += deltaTime
          const time = easing.get(elapsed / duration)
          this.offsetY = start * (1 - time) + offsetY * time
          // 如果过渡结束，延迟移除更新器
          if (elapsed >= duration) {
            updaters.deleteDelay(id)
          }
        }
      })
    } else {
      this.offsetY = offsetY
      // 如果存在垂直偏移更新器，延迟移除
      if (updaters.get(id)) {
        updaters.deleteDelay(id)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
