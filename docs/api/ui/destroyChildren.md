---
sidebar_position: 1
title: destroyChildren 销毁所有子元素
---

## destroyChildren

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

销毁所有子元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 1241 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1241)

```typescript
private destroyChildren(): void {
    const children = this.children
    let i = children.length
    while (--i >= 0) {
      children[i]?.destroy()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
