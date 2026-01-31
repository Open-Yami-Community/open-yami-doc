---
sidebar_position: 1
title: createHTMLInputElement 创建HTML输入框元素
---

## createHTMLInputElement

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

创建HTML输入框元素

参数 `data`: 文本框元素数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `data` | `MiniTextBoxElementData` | - | - |

### 返回值

类型: `TextBoxShadowInput`

### 源代码

**位置**: [第 2953 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L2953)

```typescript
private createHTMLInputElement(data: MiniTextBoxElementData): TextBoxShadowInput {
    const input: TextBoxShadowInput = document.createElement('input')
    input.classList.add('text-box-shadow-input')
    // 创建影子输入框事件列表
    input.events = [
      ['keydown', this.keydownEvent.bind(this)],
      ['wheel', this.wheelEvent.bind(this)],
      ['beforeinput', this.beforeinputEvent.bind(this)],
      ['input', this.inputEvent.bind(this)],
      ['change', this.changeEvent.bind(this)],
      ['focus', this.focusEvent.bind(this)],
      ['blur', this.blurEvent.bind(this)],
    ]
    // 根据类型获取对应的初始值
    switch (data.type) {
      case 'text':
        input.value = data.text
        break
      case 'number':
        input.value = data.number.toString()
        break
    }
    input.target = this
    input.maxLength = data.maxLength
    input.style.boxSizing = 'border-box'
    input.style.position = 'fixed'
    input.style.fontFamily = Printer.generateFontFamily(data.font)
    input.style.fontSize = `${data.size}px`
    input.style.padding = `${data.padding}px`
    input.style.textAlign = data.align
    // 将影子输入框设为透明，只是用来输入
    // 文字渲染用GL来实现，可以像素化渲染
    input.style.color = 'transparent'
    input.style.backgroundColor = 'transparent'
    input.style.border = 'none'
    input.style.outline = 'none'
    input.style.display = 'none'
    return document.body.appendChild(input)
  }
```

---



文档生成时间：2026/1/31 13:13:59
