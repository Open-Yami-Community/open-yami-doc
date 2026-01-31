---
sidebar_position: 1
title: createContainer 创建容器元素
---

## createContainer

**类型**: `MethodDeclaration`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

创建容器元素

### 返回值

类型: `HTMLDivElement`

### 源代码

**位置**: [第 79 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L79)

```typescript
private createContainer(): HTMLDivElement {
    const container = document.createElement('div')
    container.style.position = 'fixed'
    document.body.insertBefore(
      container, document.body.firstChild,
    )
    return container
  }
```

---



文档生成时间：2026/1/31 13:13:59
