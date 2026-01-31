---
sidebar_position: 1
title: render 调用列表中模块的渲染方法
---

## render

**类型**: `MethodDeclaration`

**所属类**: `RendererList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

调用列表中模块的渲染方法

### 返回值

类型: `void`

### 源代码

**位置**: [第 586 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L586)

```typescript
public render() {
    for (const module of this) {
      module.render()
      GL.reset()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
