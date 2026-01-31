---
sidebar_position: 1
title: follow 摄像机跟随目标角色
---

## follow

**类型**: `MethodDeclaration`

**定义位置**: [`camera.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts)

### 描述

摄像机跟随目标角色

参数 `target`: 目标角色

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `target` | `Actor` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 153 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/camera.ts#L153)

```typescript
public follow(target: Actor, easingId: string = '', duration: number = 0): void {
    this.target = target
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
          this.x = sx * (1 - time) + target.x * time
          this.y = sy * (1 - time) + target.y * time
          if (elapsed >= duration) {
            updaters.set('move', this.createFollowingUpdater())
          }
        }
      })
    } else {
      // 立即移动摄像机
      updaters.set('move', this.createFollowingUpdater())
      this.x = target.x
      this.y = target.y
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
