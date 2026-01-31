---
sidebar_position: 1
title: removeLatestPointerEventRoot 移除最新的指针事件根元素
---

## removeLatestPointerEventRoot

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

移除最新的指针事件根元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 290 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L290)

```typescript
public removeLatestPointerEventRoot(): void {
    const roots = this.pointerEventRoots
    this.removePointerEventRoot(roots[roots.length - 1])
  }
```

---



文档生成时间：2026/1/31 13:13:59
