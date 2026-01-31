---
sidebar_position: 1
title: moveTo 移动摄像机到指定位置
---

## moveTo

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

移动摄像机到指定位置

参数 `x`: 场景X

参数 `y`: 场景Y

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 119 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L119)

```typescript
public moveTo(x: number, y: number, easingId: string = '', duration: number = 0): void {
    this.unfollow()
    const {updaters} = this
    if (duration > 0) {
      let elapsed = 0
      const sx = this.x
      const sy = this.y
      const easing = Easing.get(easingId)
      // 创建更新器
      updaters.set('move', {
        update: deltaTime => {
          elapsed += deltaTime
          const time = easing.get(elapsed / duration)
          this.x = sx * (1 - time) + x * time
          this.y = sy * (1 - time) + y * time
          if (elapsed >= duration) {
            updaters.deleteDelay('move')
          }
        }
      })
    } else {
      // 立即移动摄像机
      updaters.deleteDelay('move')
      this.x = x
      this.y = y
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
