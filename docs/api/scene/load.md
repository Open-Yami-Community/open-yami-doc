---
sidebar_position: 1
title: load 加载
---

## load

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

加载

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 2782 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2782)

```typescript
private async load(): Promise<void> {
    const promise = this.loadTextures()
    if (!this.loaded) {
      this.draw = Function.empty
      await promise
      // @ts-ignore
      delete this.draw
    }
    this.createAllImageData()
  }
```

---



文档生成时间：2026/1/31 13:13:59
