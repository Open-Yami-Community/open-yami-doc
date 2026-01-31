---
sidebar_position: 1
title: getPointerEventRoot 获取指针事件根元素
---

## getPointerEventRoot

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

获取指针事件根元素

返回值:当前的界面根元素

### 返回值

类型: `UIElement`

当前的界面根元素

### 源代码

**位置**: [第 264 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L264)

```typescript
public getPointerEventRoot(): UIElement {
    const roots = this.pointerEventRoots
    return roots[roots.length - 1] ?? this.root
  }
```

---



文档生成时间：2026/1/31 13:13:59
