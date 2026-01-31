---
sidebar_position: 1
title: destroyContextEmitters 销毁图层上下文的粒子发射器
---

## destroyContextEmitters

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

销毁图层上下文的粒子发射器

### 返回值

类型: `void`

### 源代码

**位置**: [第 862 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L862)

```typescript
private destroyContextEmitters(): void {
    const {contexts} = this
    const {count} = contexts
    for (let i = 0; i < count; i++) {
      const context = contexts[i]!
      const emitter = context.emitter
      if (emitter !== null) {
        // 标记发射器为已禁用
        emitter.disabled = true
        context.emitter = null
        this.emitterCount--
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
