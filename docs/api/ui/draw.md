---
sidebar_position: 1
title: draw 绘制容器元素
---

## draw

**类型**: `MethodDeclaration`

**所属类**: `ContainerElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

绘制容器元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 6150 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6150)

```typescript
public draw(): void {
    if (this.visible) {
      this.drawChildren()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
