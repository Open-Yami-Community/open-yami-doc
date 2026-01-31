---
sidebar_position: 1
title: deleteFont 删除指定的字体
---

## deleteFont

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

删除指定的字体

参数 `guid`: 字体文件ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `guid` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1413 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1413)

```typescript
private static deleteFont(guid: string): void {
    const fonts = document.fonts
    for (const font of fonts) {
      if (font.guid === guid) {
        fonts.delete(font)
        this.imported.remove(font.name)
        break
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
