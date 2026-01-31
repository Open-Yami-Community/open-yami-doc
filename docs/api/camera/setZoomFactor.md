---
sidebar_position: 1
title: setZoomFactor 设置摄像机缩放系数
---

## setZoomFactor

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

设置摄像机缩放系数

参数 `zoom`: 缩放系数[1-8]

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `zoom` | `number` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 212 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L212)

```typescript
public setZoomFactor(zoom: number, easingId: string = '', duration: number = 0): void {
    const {updaters} = this
    if (duration > 0) {
      let elapsed = 0
      const start = this.rawZoom
      const easing = Easing.get(easingId)
      // 创建zoom更新器
      updaters.set('zoom', {
        update: deltaTime => {
          elapsed += deltaTime
          const time = easing.get(elapsed / duration)
          this.rawZoom = start * (1 - time) + zoom * time
          this.updateZoom()
          if (elapsed >= duration) {
            updaters.deleteDelay('zoom')
          }
        }
      })
    } else {
      // 立即设置摄像机缩放系数
      updaters.deleteDelay('zoom')
      this.rawZoom = zoom
      this.updateZoom()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
