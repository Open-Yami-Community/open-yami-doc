---
sidebar_position: 1
title: setStartColorFixed 设置初始颜色 - 固定
---

## setStartColorFixed

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置初始颜色 - 固定

### 返回值

类型: `void`

### 源代码

**位置**: [第 2502 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2502)

```typescript
private setStartColorFixed(): void {
    const {rgba} = this.data.color as ParticleColorFixed
    const {color} = this
    this.colorChanged = true
    color[0] = rgba[0]
    color[1] = rgba[1]
    color[2] = rgba[2]
    color[3] = rgba[3]
  }
```

---



文档生成时间：2026/1/31 13:13:58
