---
sidebar_position: 1
title: drawBack 绘制背景粒子
---

## drawBack

**类型**: `MethodDeclaration`

**所属类**: `AnimationParticleEmitterManager`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

绘制背景粒子

参数 `matrix`: 投影矩阵

参数 `opacity`: 不透明度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `matrix` | `Matrix` | - | - |
| `opacity` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1342 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1342)

```typescript
public drawBack(matrix: Matrix, opacity: number): void {
    for (const emitter of this.backList) {
      const emitterOpacity = emitter.opacity
      emitter.opacity *= opacity
      emitter.draw(matrix)
      emitter.opacity = emitterOpacity
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
