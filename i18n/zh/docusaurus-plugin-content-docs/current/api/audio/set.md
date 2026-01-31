---
sidebar_position: 1
title: set 设置混响参数
---

## set

**类型**: `MethodDeclaration`

**所属类**: `AudioReverb`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

设置混响参数

参数 `dry`: 干声增益[0-1]

参数 `wet`: 湿声增益[0-1]

参数 `easingId`: 过渡曲线

参数 `duration`: 持续时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `dry` | `number` | - | - |
| `wet` | `number` | - | - |
| `easingId` | `string` | - | '' |
| `duration` | `number` | - | n0 |

### 返回值

类型: `void`

### 源代码

**位置**: [第 666 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L666)

```typescript
public set(dry: number, wet: number, easingId: string = '', duration: number = 0): void {
    // 如果上一次的混响过渡未结束，移除
    if (this.transition !== null) {
      this.transition.remove()
      this.transition = null
    }
    if (duration > 0) {
      if (this.dry === null) {
        this.setDry(1)
        this.setWet(0)
      }
      const startDry = this.dry
      const startWet = this.wet
      const easing = Easing.get(easingId)
      // 创建混响过渡计时器
      this.transition = new Timer({
        duration: duration,
        update: timer => {
          const time = easing.get(timer.elapsed / timer.duration)
          this.setDry(startDry * (1 - time) + dry * time)
          this.setWet(startWet * (1 - time) + wet * time)
        },
        callback: () => {
          this.transition = null
          if (dry === 1 && wet === 0) {
            this.disconnect()
          }
        },
      }).add()
    } else {
      // 直接设置混响
      this.setDry(dry)
      this.setWet(wet)
      // 如果没有混响，断开连接
      if (dry === 1 && wet === 0) {
        this.disconnect()
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
