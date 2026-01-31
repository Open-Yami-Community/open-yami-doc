---
sidebar_position: 1
title: translateParticles 平移粒子的位置
---

## translateParticles

**类型**: `MethodDeclaration`

**所属类**: `ParticleLayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

平移粒子的位置

参数 `x`: 水平位移

参数 `y`: 垂直位移

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `x` | `number` | - | - |
| `y` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1675 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1675)

```typescript
public translateParticles(x: number, y: number): void {
    const {elements} = this
    const {count} = elements
    for (let i = 0; i < count; i++) {
      const element = elements[i]!
      element.x += x
      element.y += y
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
