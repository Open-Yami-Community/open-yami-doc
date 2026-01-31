---
sidebar_position: 1
title: setAsUIComponent 设置为UI动画组件
---

## setAsUIComponent

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置为UI动画组件

### 返回值

类型: `void`

### 源代码

**位置**: [第 910 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L910)

```typescript
public setAsUIComponent(): void {
    if (!this.isUIComponent) {
      this.isUIComponent = true
      this.emitterManager = new AnimationParticleEmitterManager()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
