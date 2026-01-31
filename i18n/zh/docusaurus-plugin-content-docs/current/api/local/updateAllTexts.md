---
sidebar_position: 1
title: updateAllTexts 更新所有文本
---

## updateAllTexts

**类型**: `MethodDeclaration`

**定义位置**: [`local.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts)

### 描述

更新所有文本

### 返回值

类型: `void`

### 源代码

**位置**: [第 165 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts#L165)

```typescript
private updateAllTexts(): void {
    const update = (elements: Array<UIElement>) => {
      for (const element of elements) {
        element.updateTextContent?.()
        update(element.children)
      }
    }
    if (UI.root instanceof UIElement) {
      update(UI.root.children)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
