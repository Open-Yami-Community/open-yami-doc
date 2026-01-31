---
sidebar_position: 1
title: createShadowText 创建影子文本元素
---

## createShadowText

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

创建影子文本元素

参数 `data`: 按钮元素数据

返回值:影子文本元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `data` | `ButtonElementData` | - | - |

### 返回值

类型: `TextElement`

影子文本元素

### 源代码

**位置**: [第 4870 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4870)

```typescript
private createShadowText(data: ButtonElementData): TextElement {
    const {textData} = ButtonElement
    textData.color = data.normalColor
    textData.direction = data.direction
    textData.horizontalAlign = data.horizontalAlign
    textData.verticalAlign = data.verticalAlign
    textData.content = data.content
    textData.size = data.size
    textData.letterSpacing = data.letterSpacing
    textData.font = data.font
    textData.typeface = data.typeface
    textData.effect = data.textEffect
    const element = new TextElement(textData)
    element.parent = this
    element.connected = true
    this.updaters.add(element.updaters)
    return element
  }
```

---



文档生成时间：2026/1/31 13:13:59
