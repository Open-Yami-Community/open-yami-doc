---
sidebar_position: 1
title: getVisibleGridColumns 获取窗口内部可见的网格列数
---

## getVisibleGridColumns

**类型**: `MethodDeclaration`

**所属类**: `WindowElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

获取窗口内部可见的网格列数

返回值:列数

### 返回值

类型: `number`

列数

### 源代码

**位置**: [第 5786 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5786)

```typescript
public getVisibleGridColumns(): number {
    switch (this.layout) {
      case 'normal':
        return 0
    }
    const innerWidth = this.width + this.gridGapX - this.paddingX * 2
    const unitWidth = this.gridWidth + this.gridGapX
    return unitWidth > 0 ? Math.floor(innerWidth / unitWidth) : Infinity
  }
```

---



文档生成时间：2026/1/31 13:13:59
