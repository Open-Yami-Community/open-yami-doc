---
sidebar_position: 1
title: resize 重新调整容器元素
---

## resize

**类型**: `MethodDeclaration`

**所属类**: `ContainerElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

重新调整容器元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 6157 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6157)

```typescript
public resize(): void {
    if (this.visible) {
      if (this.parent instanceof WindowElement) {
        return this.parent.requestResizing()
      }
      this.calculatePosition()
      this.resizeChildren()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
