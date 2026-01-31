---
sidebar_position: 1
title: precompileAnimations 预编译动画数据
---

## precompileAnimations

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

预编译动画数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 536 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L536)

```typescript
private precompileAnimations(): void {
    // 计算动画当前动作的帧数
    const calculateLength = (layers: Array<AnimationLayer>, length: number) => {
      // 遍历所有图层的尾帧，获取最大长度
      for (const layer of layers) {
        const frames = layer.frames
        const frame = frames[frames.length - 1]
        if (frame !== undefined) {
          length = Math.max(length, frame.end)
        }
        if (layer.class === 'joint') {
          length = calculateLength(layer.children, length)
        }
      }
      return length
    }
    for (const animation of Object.values(this.animations) as Array<AnimationFile>) {
      // 加载动作哈希表
      const motionMap: HashMap<AnimationMotionData> = {}
      for (const motion of animation.motions as unknown as Array<AnimationMotionData>) {
        // 设置动作名称
        motion.name = Enum.get(motion.id)?.value ?? motion.id
        // 添加当前动作的方向映射列表
        motion.dirList = AnimationPlayer.dirListMap[motion.mode]
        // 计算当前动作的动画帧数和循环起始位置
        for (const dirCase of motion.dirCases) {
          const length = calculateLength(dirCase.layers, 0)
          const lastFrame = length - 1
          dirCase.loopStart = motion.loop ? Math.min(motion.loopStart, lastFrame) : 0
          dirCase.length = motion.skip && dirCase.loopStart < lastFrame ? lastFrame : length
        }
        // 添加动作到映射表中
        motionMap[motion.name] = motion
      }
      // 加载精灵哈希表
      const spriteMap: HashMap<AnimationSpriteData> = {}
      const imageMap: HashMap<string> = {}
      // 使用精灵数组生成精灵和图像哈希表
      for (const sprite of animation.sprites as unknown as Array<AnimationSpriteData>) {
        spriteMap[sprite.id] = sprite
        imageMap[sprite.id] = sprite.image
      }
      // 将动作列表替换为{名称:动作数据}映射表
      animation.motions = motionMap
      // 将精灵列表替换为{精灵ID:精灵图数据}映射表
      animation.sprites = spriteMap
      // 添加{精灵ID:图像ID}映射表
      animation.images = imageMap
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
