---
sidebar_position: 1
title: setLanguageFont 设置本地化语言包字体
---

## setLanguageFont

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

设置本地化语言包字体

参数 `guid`: 字体文件ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `guid` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1379 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1379)

```typescript
public static setLanguageFont(guid: string): void {
    if (this.languageFont !== guid) {
      this.deleteFont(this.languageFont)
      this.languageFont = guid
      this.updateFont()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
