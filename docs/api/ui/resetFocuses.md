---
sidebar_position: 1
title: resetFocuses 重置焦点
---

## resetFocuses

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

重置焦点

### 返回值

类型: `void`

### 源代码

**位置**: [第 424 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L424)

```typescript
public resetFocuses(): void {
    while (this.focuses.length !== 0) {
      this.removeLatestFocus()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
