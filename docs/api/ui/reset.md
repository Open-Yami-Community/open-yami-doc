---
sidebar_position: 1
title: reset 重置界面，销毁所有元素
---

## reset

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

重置界面，销毁所有元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 238 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L238)

```typescript
public reset(): void {
    UI.resetFocuses()
    UI.resetPointerEventRoots()
    const {children} = UI.root
    let i = children.length
    // 逆序删除根元素下的内容
    while (--i >= 0) {
      // 可能在销毁回调中销毁了其他元素
      // 因此做个有效性判断
      children[i]?.destroy()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
