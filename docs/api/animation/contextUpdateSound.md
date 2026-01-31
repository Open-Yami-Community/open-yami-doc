---
sidebar_position: 1
title: contextUpdateSound 上下文方法 - 更新音效层
---

## contextUpdateSound

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

上下文方法 - 更新音效层

参数 `frame`: 动画图层当前帧的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `this` | `AnimationFrameContext` | - | - |
| `frame` | `AnimationSoundFrame` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1263 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1263)

```typescript
private static contextUpdateSound(this: AnimationFrameContext, frame: AnimationSoundFrame): void {
    // 如果当前帧是关键帧
    const animation = this.animation
    if (animation.paused) return
    if (animation.index < frame.start + 1) {
      // 如果当前帧未播放过
      const version = animation.cycleIndex * animation.length + Math.floor(animation.index)
      if (this.version !== version) {
        this.version = version
        // 在动画的位置播放衰减音效
        if (frame.sound && animation.position) {
          const layer = this.layer as AnimationSoundLayer
          const speed = layer.playbackRate === 'inherit' ? animation.speed : 1
          if (animation.isUIComponent) {
            AudioManager.se.play(frame.sound, frame.volume, speed)
          } else {
            AudioManager.se.playAt(frame.sound, animation.position, frame.volume, speed)
          }
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
