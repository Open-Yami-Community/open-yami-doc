---
sidebar_position: 1
title: updateSpriteFrame 更新精灵帧
---

## updateSpriteFrame

**类型**: `MethodDeclaration`

**所属类**: `ParticleElement`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

更新精灵帧

### 返回值

类型: `void`

### 源代码

**位置**: [第 2249 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L2249)

```typescript
private updateSpriteFrame() {
    this.spriteX = this.spriteFrame % this.spriteHframes
    this.spriteY = Math.floor(this.spriteFrame / this.spriteHframes)
  }
```

---



文档生成时间：2026/1/31 13:13:58
