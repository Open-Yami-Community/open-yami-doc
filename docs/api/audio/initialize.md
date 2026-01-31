---
sidebar_position: 1
title: initialize 初始化音频管理器
---

## initialize

**类型**: `MethodDeclaration`

**定义位置**: [`audio.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts)

### 描述

初始化音频管理器

### 返回值

类型: `void`

### 源代码

**位置**: [第 20 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/audio.ts#L20)

```typescript
public initialize(): void {
    // 创建音频上下文
    const context = new AudioContext()
    this.context = context

    // 创建播放器
    const bgm = new SingleAudioPlayer(true)
    const bgs = new SingleAudioPlayer(true)
    const cv = new SingleAudioPlayer(false)
    const se = new MultipleAudioPlayer()
    this.bgm = bgm
    this.bgs = bgs
    this.cv = cv
    this.se = se
    this.attenDist = Data.config.soundAttenuation.distance
    this.attenEasingId = Data.config.soundAttenuation.easingId

    Promise.resolve().then(() => {
      // 创建混响卷积器(比较消耗CPU，放到栈尾执行避免阻塞)
      AudioReverb.getConvolver()
    })

    // 移动设备：切出去的时候暂停播放
    if (Stats.isMobile()) {
      document.on('visibilitychange', () => {
        if (context.state === 'running') {
          if (document.hidden) {
            bgm.pause()
            bgs.pause()
            cv.pause()
            se.pause()
          } else {
            bgm.continue()
            bgs.continue()
            cv.continue()
            se.continue()
          }
        }
      })
    }

    // Web模式：按下键盘或鼠标时恢复音频上下文
    // 如果在用户发生交互操作前创建了音频上下文
    // 被Chrome浏览器默认暂停以避免打扰用户
    if (context.state === 'suspended') {
      const resume = (event: Event) => {
        if (context.state === 'suspended') {
          context.resume()
        }
      }
      const statechange = (event: Event) => {
        if (context.state === 'running') {
          bgm.audio.src &&
          bgm.audio.play()
          bgs.audio.src &&
          bgs.audio.play()
          cv.audio.src &&
          cv.audio.play()
          for (const audio of se.audios) {
            audio.src &&
            audio.play()
          }
          window.off('keydown', resume, {capture: true})
          window.off('mousedown', resume, {capture: true})
          window.off('touchend', resume, {capture: true})
          context.off('statechange', statechange)
        }
      }
      // 以下这些事件在Android测试后可以有效恢复音频上下文
      window.on('keydown', resume, {capture: true})
      window.on('mousedown', resume, {capture: true})
      window.on('touchend', resume, {capture: true})
      context.on('statechange', statechange)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
