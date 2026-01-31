---
sidebar_position: 1
title: updateFont 更新字体
---

## updateFont

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

更新字体

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 1388 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1388)

```typescript
private static async updateFont(): Promise<void> {
    let font = this.font ?? ''
    const fontFamily = Data.config.text.fontFamily || 'sans-serif'
    const guid = this.languageFont
    if (guid) {
      const meta = Data.manifest.guidMap[guid] as FontFileMeta | undefined
      if (!meta) return
      const name = meta.name ?? meta.path.match(/([^/]+)\.\S+\.\S+$/)?.[1]
      if (name) {
        await this.importFonts([guid])
        font = `${name}, ${fontFamily}`
      }
    } else {
      font = fontFamily
    }
    if (this.font !== font) {
      this.font = font
      this.updateAllPrinters()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
