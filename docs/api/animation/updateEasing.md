---
sidebar_position: 1
title: updateEasing 更新过渡映射表
---

## updateEasing

**类型**: `MethodDeclaration`

**所属类**: `ParticleLayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

更新过渡映射表

### 返回值

类型: `void`

### 源代码

**位置**: [第 1851 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L1851)

```typescript
private updateEasing(): void {
    const {color} = this.data
    if (color.mode === 'easing') {
      this.easing = Easing.get(color.easingId)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
