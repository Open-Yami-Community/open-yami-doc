---
sidebar_position: 1
title: getVisibleGridRows 获取窗口内部可见的网格行数
---

## getVisibleGridRows

**类型**: `MethodDeclaration`

**所属类**: `WindowElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

获取窗口内部可见的网格行数

返回值:行数

### 返回值

类型: `number`

行数

### 源代码

**位置**: [第 5800 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5800)

```typescript
public getVisibleGridRows(): number {
    switch (this.layout) {
      case 'normal':
        return 0
    }
    const innerHeight = this.height + this.gridGapY - this.paddingY * 2
    const unitHeight = this.gridHeight + this.gridGapY
    return unitHeight > 0 ? Math.floor(innerHeight / unitHeight) : Infinity
  }
```

---



文档生成时间：2026/1/31 13:13:59
