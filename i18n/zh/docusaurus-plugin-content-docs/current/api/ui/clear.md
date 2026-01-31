---
sidebar_position: 1
title: clear 清除所有子元素
---

## clear

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

清除所有子元素

返回值:当前元素

### 返回值

类型: `this`

当前元素

### 源代码

**位置**: [第 1356 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1356)

```typescript
public clear(): this {
    const {children} = this
    let i = children.length
    while (--i >= 0) {
      children[i]?.destroy()
    }
    return this
  }
```

---



文档生成时间：2026/1/31 13:13:59
