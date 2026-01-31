---
sidebar_position: 1
title: transformStartPosition 变换粒子的初始位置
---

## transformStartPosition

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

变换粒子的初始位置

### 返回值

类型: `void`

### 源代码

**位置**: [第 2298 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2298)

```typescript
private transformStartPosition(): void {
    const {matrix} = this.emitter
    // 如果发射器中存在矩阵，变换位置
    if (matrix !== null) {
      const a = matrix[0]
      const b = matrix[1]
      const c = matrix[3]
      const d = matrix[4]
      const e = matrix[6]
      const f = matrix[7]
      const {x, y} = this
      this.x = a * x + c * y + e
      this.y = b * x + d * y + f
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
