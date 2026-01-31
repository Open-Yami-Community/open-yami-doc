---
sidebar_position: 1
title: setWordWrap 设置自动换行规则
---

## setWordWrap

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

设置自动换行规则

参数 `wordWrap`: 自动换行规则

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `wordWrap` | `WordWrap` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1460 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1460)

```typescript
public static setWordWrap(wordWrap: WordWrap): void {
    if (this.wordWrap !== wordWrap) {
      this.wordWrap = wordWrap
      this.updateAllPrinters()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
