---
sidebar_position: 1
title: initialize 初始化
---

## initialize

**类型**: `MethodDeclaration`

**所属类**: `SceneDirectLightRenderer`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

初始化

### 返回值

类型: `void`

### 源代码

**位置**: [第 5994 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5994)

```typescript
public initialize(): void {
    this.states = new Uint8Array(GL.zeros.buffer, 0, 512 * 512)
    this.indices = new Uint32Array(GL.arrays[1].uint32.buffer, 0, 512 * 512)
    this.vertices = new Float64Array(GL.arrays[0].float64.buffer, 0, 512 * 512 * 6)
    this.openset = new Uint32Array(GL.zeros.buffer, 512 * 512, 512 * 512 * 2 / 4)
    this.queue = new Uint32Array(GL.arrays[2].uint32.buffer, 0, 100)
  }
```

---



文档生成时间：2026/1/31 13:13:59
