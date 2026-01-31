---
sidebar_position: 1
title: getColorInt 获取整数型颜色
---

## getColorInt

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

获取整数型颜色

返回值:粒子颜色

### 返回值

类型: `number`

粒子颜色

### 源代码

**位置**: [第 2234 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2234)

```typescript
private getColorInt(): number {
    const {color} = this
    if (this.colorChanged) {
      this.colorChanged = false
      const r = color[0]
      const g = color[1]
      const b = color[2]
      const a = Math.round(color[3] * this.opacity)
      // 将RGBA生成的整数型颜色代码存放在color[4]中
      color[4] = r + (g + (b + a * 256) * 256) * 256
    }
    return color[4]
  }
```

---



文档生成时间：2026/1/31 13:13:58
