---
sidebar_position: 1
title: updateFrameParameters 更新当前播放的动画帧参数
---

## updateFrameParameters

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

更新当前播放的动画帧参数

### 返回值

类型: `void`

### 源代码

**位置**: [第 501 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L501)

```typescript
private updateFrameParameters(): void {
    const {contexts, index} = this
    const {count} = contexts
    // 遍历所有动画图层
    outer: for (let i = 0; i < count; i++) {
      const context = contexts[i]!
      const frames = context.layer.frames
      const last = frames.length - 1
      for (let i = 0; i <= last; i++) {
        const frame = frames[i]
        const start = frame.start
        const end = frame.end
        // 查找index所在的动画关键帧
        if (index >= start && index < end) {
          // @ts-ignore
          const easingId: string | undefined = frame.easingId
          // 如果存在过渡，并且不是尾部关键帧
          if (easingId && i < last) {
            // 在当前帧和下一帧之间进行过渡插值
            const next = frames[i + 1]
            const time = Easing.get(easingId).get(
              (index - start) / (next.start - start)
            )
            // 更新插值后的上下文
            context.update(frame, time, next)
          } else {
            // 更新当前帧的上下文
            context.update(frame)
          }
          continue outer
        }
      }
      // 找不到关键帧就重置上下文
      context.reset()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
