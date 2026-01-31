---
sidebar_position: 1
title: updateAllPrinters 更新所有打印机
---

## updateAllPrinters

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

更新所有打印机

### 返回值

类型: `void`

### 源代码

**位置**: [第 1468 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1468)

```typescript
private static updateAllPrinters(): void {
    const update = (elements: Array<UIElement>) => {
      for (const element of elements) {
        // 更新字体
        if ('font' in element) {
          element.font = element.font
        }
        element.updatePrinter?.()
        update(element.children)
      }
    }
    if (UI.root instanceof UIElement) {
      update(UI.root.children)
    }
    // 发送rescale事件
    window.dispatchEvent(new Event('rescale'))
  }
```

---



文档生成时间：2026/1/31 13:13:59
