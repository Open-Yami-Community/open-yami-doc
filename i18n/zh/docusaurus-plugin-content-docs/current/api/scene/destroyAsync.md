---
sidebar_position: 1
title: destroyAsync 异步销毁粒子发射器
---

## destroyAsync

**类型**: `MethodDeclaration`

**所属类**: `SceneParticleEmitter`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

异步销毁粒子发射器

### 返回值

类型: `void`

### 源代码

**位置**: [第 5497 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5497)

```typescript
public destroyAsync(): void {
    Callback.push(() => {
      this.destroy()
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
