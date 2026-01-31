---
sidebar_position: 1
title: loadDefault 加载默认设置
---

## loadDefault

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

加载默认设置

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 1167 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1167)

```typescript
private static async loadDefault(): Promise<void> {
    // 设置打印机默认上下文属性
    const text = Data.config.text
    this.updateFont()
    this.size = 16
    this.color = Color.parseCSSColor('ffffffff')
    this.effect = {type: 'none'}
    this.highDefinition = text.highDefinition

    // 导入字体
    await this.importFonts(text.importedFonts)
  }
```

---



文档生成时间：2026/1/31 13:13:59
