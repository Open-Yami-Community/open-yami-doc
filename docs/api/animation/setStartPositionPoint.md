---
sidebar_position: 1
title: setStartPositionPoint 设置初始位置 - 点发射区域
---

## setStartPositionPoint

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置初始位置 - 点发射区域

### 返回值

类型: `void`

### 源代码

**位置**: [第 2329 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2329)

```typescript
private setStartPositionPoint(): void {
    const emitter = this.emitter
    const pos = this.getAreaPosition()
    this.x = emitter.startX + pos[0]
    this.y = emitter.startY + pos[1]
    this.transformStartPosition()
  }
```

---



文档生成时间：2026/1/31 13:13:58
