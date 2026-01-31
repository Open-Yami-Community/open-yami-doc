---
sidebar_position: 1
title: setTint 设置动画色调
---

## setTint

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置动画色调

参数 `id`: 过渡更新器的ID

参数 `updaters`: 更新器列表

参数 `tint`: 动画色调属性选项\{red?: -255~255, green?: -255~255, blue?: -255~255, gray?: 0~255\}

参数 `easingId`: 过渡曲线ID

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |
| `updaters` | `UpdaterList` | - | - |
| `tint` | `ImageTintOptions` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 347 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L347)

```typescript
public setTint(id: string, updaters: UpdaterList, tint: ImageTintOptions, easingId: string = '', duration: number = 0): void {
    const {red, green, blue, gray} = tint
    // 优先使用现有的色调数组
    let activeTint = this.tints.find((t: any) => t.key === this)
    // 创建动画色调数组
    if (!activeTint) {
      activeTint = [0, 0, 0, 0];
      (activeTint as any).key = this
      this.tints.push(activeTint)
    }
    if (duration > 0) {
      let elapsed = 0
      const start = [...activeTint]
      const easing = Easing.get(easingId)
      updaters.set(id, {
        update: deltaTime => {
          elapsed += deltaTime
          const time = easing.get(elapsed / duration)
          if (Number.isFinite(red)) {
            activeTint[0] = Math.clamp(start[0] * (1 - time) + red! * time, -255, 255)
          }
          if (Number.isFinite(green)) {
            activeTint[1] = Math.clamp(start[1] * (1 - time) + green! * time, -255, 255)
          }
          if (Number.isFinite(blue)) {
            activeTint[2] = Math.clamp(start[2] * (1 - time) + blue! * time, -255, 255)
          }
          if (Number.isFinite(gray)) {
            activeTint[3] = Math.clamp(start[3] * (1 - time) + gray! * time, 0, 255)
          }
          // 如果过渡结束，延迟移除更新器
          if (elapsed >= duration) {
            if (Array.isZero(activeTint)) {
              this.tints.remove(activeTint)
            }
            updaters.deleteDelay(id)
          }
        }
      })
    } else {
      if (Number.isFinite(red)) activeTint[0] = red!
      if (Number.isFinite(green)) activeTint[1] = green!
      if (Number.isFinite(blue)) activeTint[2] = blue!
      if (Number.isFinite(gray)) activeTint[3] = gray!
      if (Array.isZero(activeTint)) {
        this.tints.remove(activeTint)
      }
      // 如果存在色调更新器，延迟移除
      if (updaters.get(id)) {
        updaters.deleteDelay(id)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
