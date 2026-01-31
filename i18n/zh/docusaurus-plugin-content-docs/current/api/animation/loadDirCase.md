---
sidebar_position: 1
title: loadDirCase 加载动画方向
---

## loadDirCase

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

加载动画方向

### 返回值

类型: `void`

### 源代码

**位置**: [第 198 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L198)

```typescript
private loadDirCase(): void {
    const params = this.dirList[this.direction]
    if (params) {
      const dirCase = this.dirCases[params.index]
      this.layers = dirCase.layers
      // 销毁上下文中的粒子发射器
      // 加载当前动作的上下文
      this.destroyContextEmitters()
      this.loadContexts(this.contexts)
      this.length = dirCase.length
      this.loopStart = dirCase.loopStart
      this.cycleIndex = 0
      this.ended = false
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
