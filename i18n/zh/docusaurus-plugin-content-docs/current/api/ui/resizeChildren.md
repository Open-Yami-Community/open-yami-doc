---
sidebar_position: 1
title: resizeChildren 调整所有子元素
---

## resizeChildren

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

调整所有子元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 1232 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1232)

```typescript
protected resizeChildren(): void {
    const children = this.children
    const length = children.length
    for (let i = 0; i < length; i++) {
      children[i].resize()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
