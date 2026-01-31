---
sidebar_position: 1
title: shake 震动屏幕
---

## shake

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

震动屏幕

参数 `mode`: 震动模式

参数 `power`: 强度

参数 `speed`: 速度

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(ms)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `mode` | `CameraShakeMode` | - | 'random' |
| `power` | `number` | - | n5 |
| `speed` | `number` | - | n5 |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n1000 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 437 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L437)

```typescript
public shake(mode: CameraShakeMode = 'random', power: number = 5, speed: number = 5, easingId: string = '', duration: number = 1000): void {
    let progress = 0
    let elapsed = 0
    let startX = this.shakeX
    let startY = this.shakeY
    let endX = 0
    let endY = 0
    let interval = 200 / speed
    const easing = Easing.get(easingId)
    const updateNextPosition = () => {
      switch (mode) {
        case 'random': {
          const offset = Math.random() * power
          const angle = Math.random() * Math.PI * 2
          endX = Math.cos(angle) * offset
          endY = Math.sin(angle) * offset
          break
        }
        case 'horizontal':
          endX = endX < 0 ? power : -power
          break
        case 'vertical':
          endY = endY < 0 ? power : -power
          break
      }
      const dist = Math.dist(startX, startY, endX, endY)
      if (elapsed === 0 || elapsed + interval < duration) {
        interval = dist * 40 / speed
      } else if (startX !== 0 || startY !== 0) {
        endX = 0
        endY = 0
        interval = Math.dist(startX, startY, 0, 0) * 40 / speed
      } else {
        this.updaters.deleteDelay('shake')
      }
    }
    updateNextPosition()
    this.updaters.set('shake', {
      update: deltaTime => {
        elapsed += deltaTime
        progress += deltaTime
        if (progress < interval) {
          const time = easing.get(progress / interval)
          this.shakeX = startX * (1 - time) + endX * time
          this.shakeY = startY * (1 - time) + endY * time
        } else {
          progress -= interval
          this.shakeX = startX = endX
          this.shakeY = startY = endY
          updateNextPosition()
        }
      }
    })
  }
```

---



文档生成时间：2026/1/31 13:13:58
