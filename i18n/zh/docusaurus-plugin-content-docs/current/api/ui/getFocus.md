---
sidebar_position: 1
title: getFocus 获取最新的焦点
---

## getFocus

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

获取最新的焦点

### 返回值

类型: `UIElement \| undefined`

### 源代码

**位置**: [第 418 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L418)

```typescript
public getFocus(): UIElement | undefined {
    const focuses = this.focuses
    return focuses[focuses.length - 1]
  }
```

---



文档生成时间：2026/1/31 13:13:59
