---
sidebar_position: 1
title: setTint 设置图像色调
---

## setTint

**类型**: `MethodDeclaration`

**所属类**: `ImageElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

设置图像色调

参数 `tint`: 图像色调属性选项\{red?: -255~255, green?: -255~255, blue?: -255~255, gray?: 0~255\}

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `tint` | `ImageTintOptions` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1890 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1890)

```typescript
public setTint(tint: ImageTintOptions, easingId: string = '', duration: number = 0): void {
    const {red, green, blue, gray} = tint
    const {updaters} = this
    if (duration > 0) {
      let elapsed = 0
      const start = Array.from(this.tint)
      const easing = Easing.get(easingId)
      updaters.set('tint', {
        update: deltaTime => {
          elapsed += deltaTime
          const time = easing.get(elapsed / duration)
          const tint = this.tint
          if (Number.isFinite(red)) {
            tint[0] = Math.clamp(start[0] * (1 - time) + red! * time, -255, 255)
          }
          if (Number.isFinite(green)) {
            tint[1] = Math.clamp(start[1] * (1 - time) + green! * time, -255, 255)
          }
          if (Number.isFinite(blue)) {
            tint[2] = Math.clamp(start[2] * (1 - time) + blue! * time, -255, 255)
          }
          if (Number.isFinite(gray)) {
            tint[3] = Math.clamp(start[3] * (1 - time) + gray! * time, 0, 255)
          }
          // 如果过渡结束，延迟移除更新器
          if (elapsed >= duration) {
            updaters.deleteDelay('tint')
          }
        }
      })
    } else {
      if (Number.isFinite(red)) this.tint[0] = red!
      if (Number.isFinite(green)) this.tint[1] = green!
      if (Number.isFinite(blue)) this.tint[2] = blue!
      if (Number.isFinite(gray)) this.tint[3] = gray!
      // 如果存在色调更新器，延迟移除
      if (updaters.get('tint')) {
        updaters.deleteDelay('tint')
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
