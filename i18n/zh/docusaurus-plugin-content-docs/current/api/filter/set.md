---
sidebar_position: 1
title: set 设置场景色调
---

## set

**类型**: `MethodDeclaration`

**定义位置**: [`filter.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/filter.ts)

### 描述

设置场景色调

参数 `tint`: 色调数组[-255~255, -255~255, -255~255, 0~255]

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `tint` | `ImageTint` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 103 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/filter.ts#L103)

```typescript
public set(tint: ImageTint, easingId: string = '', duration: number = 0): void {
    // 如果上一次的色调过渡未结束，移除
    if (this.transition) {
      this.transition.remove()
      delete this.transition
    }
    if (duration > 0) {
      const start = Array.from(this.tint)
      const end = tint
      const easing = Easing.get(easingId)
      // 创建色调过渡计时器
      this.transition = new Timer({
        duration: duration,
        update: timer => {
          const tint = this.tint
          const time = easing.get(timer.elapsed / duration)
          tint[0] = Math.clamp(start[0] * (1 - time) + end[0] * time, -255, 255)
          tint[1] = Math.clamp(start[1] * (1 - time) + end[1] * time, -255, 255)
          tint[2] = Math.clamp(start[2] * (1 - time) + end[2] * time, -255, 255)
          tint[3] = Math.clamp(start[3] * (1 - time) + end[3] * time, 0, 255)
        },
        callback: () => {
          delete this.transition
        },
      }).add()
    } else {
      // 直接设置色调
      this.tint[0] = tint[0]
      this.tint[1] = tint[1]
      this.tint[2] = tint[2]
      this.tint[3] = tint[3]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
