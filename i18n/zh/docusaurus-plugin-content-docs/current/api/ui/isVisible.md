---
sidebar_position: 1
title: isVisible 判断是否可见
---

## isVisible

**类型**: `MethodDeclaration`

**所属类**: `UIElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

判断是否可见

返回值:是否可见

### 返回值

类型: `boolean`

是否可见

### 源代码

**位置**: [第 1453 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L1453)

```typescript
public isVisible(): boolean {
    let element: UIElement | null = this
    // 如果自己或祖先元素有一个不可见
    // 则本元素不可见，返回false
    while (element) {
      if (!element.visible) {
        return false
      }
      element = element.parent
    }
    return true
  }
```

---



文档生成时间：2026/1/31 13:13:59
