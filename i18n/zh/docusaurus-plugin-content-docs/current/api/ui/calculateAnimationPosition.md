---
sidebar_position: 1
title: calculateAnimationPosition 
---

## calculateAnimationPosition

**类型**: `MethodDeclaration`

**所属类**: `AnimationElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 返回值

类型: `void`

### 源代码

**位置**: [第 5312 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5312)

```typescript
private calculateAnimationPosition() {
    this.animationX = this.x + this.width / 2 + this.offsetX
    this.animationY = this.y + this.height / 2 + this.offsetY
  }
```

---



文档生成时间：2026/1/31 13:13:59
