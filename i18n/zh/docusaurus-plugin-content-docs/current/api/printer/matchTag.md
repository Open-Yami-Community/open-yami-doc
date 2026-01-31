---
sidebar_position: 1
title: matchTag 匹配富文本标签
---

## matchTag

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

匹配富文本标签

返回值:是否成功匹配标签

### 返回值

类型: `boolean`

是否成功匹配标签

### 源代码

**位置**: [第 852 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L852)

```typescript
public matchTag(): boolean {
    const regexps = Printer.regexps
    const startIndex = this.index
    const endIndex = this.content.indexOf('>', startIndex + 1) + 1
    const string = this.content.slice(startIndex, endIndex)
    let match
    // 使用索引颜色
    if (match = string.match(regexps.colorIndex)) {
      const index = parseInt(match[1])
      const hex = Data.config.indexedColors[index].code
      const color = Color.parseCSSColor(hex)
      this.drawBuffer()
      this.colors.unshift(color)
      this.index += match[0].length
      return true
    }
    // 使用指定颜色
    if (match = string.match(regexps.color)) {
      const hex = match[1] + match[2] + match[3] + (match[4] ?? 'ff')
      const color = Color.parseCSSColor(hex)
      this.drawBuffer()
      this.colors.unshift(color)
      this.index += match[0].length
      return true
    }
    // 结束文字颜色
    if ((match = string.match(regexps.colorRestore)) && this.colors.length > 1) {
      this.drawBuffer()
      this.colors.shift()
      this.index += match[0].length
      return true
    }
    // 使用字体
    if (match = string.match(regexps.font)) {
      const font = `${match[1]}${match[2] ? `, ${match[2]}` : ''}`
      this.drawBuffer()
      this.fonts.unshift(font)
      this.updateFont()
      this.index += match[0].length
      return true
    }
    // 结束字体
    if ((match = string.match(regexps.fontRestore)) && this.fonts.length > 1) {
      this.drawBuffer()
      this.fonts.shift()
      this.updateFont()
      this.index += match[0].length
      return true
    }
    // 使用斜体样式
    if (match = string.match(regexps.italic)) {
      this.drawBuffer()
      this.styles.unshift('italic')
      this.updateFont()
      this.index += match[0].length
      return true
    }
    // 结束斜体样式
    if ((match = string.match(regexps.italicRestore)) && this.styles.length > 1) {
      this.drawBuffer()
      this.styles.shift()
      this.updateFont()
      this.index += match[0].length
      return true
    }
    // 使用粗体字
    if (match = string.match(regexps.bold)) {
      this.drawBuffer()
      this.weights.unshift('bold')
      this.updateFont()
      this.index += match[0].length
      return true
    }
    // 结束粗体字
    if ((match = string.match(regexps.boldRestore)) && this.weights.length > 1) {
      this.drawBuffer()
      this.weights.shift()
      this.updateFont()
      this.index += match[0].length
      return true
    }
    // 使用字体大小
    if (match = string.match(regexps.fontSize)) {
      const size = parseInt(match[1])
      this.drawBuffer()
      this.sizes.unshift(size)
      this.updateFont()
      this.index += match[0].length
      return true
    }
    // 结束字体大小
    if ((match = string.match(regexps.fontSizeRestore)) && this.sizes.length > 1) {
      this.drawBuffer()
      this.sizes.shift()
      this.updateFont()
      this.index += match[0].length
      return true
    }
    // 设置文字位置
    if (match = string.match(regexps.textPosition)) {
      const axis = match[1].toLowerCase() as 'x' | 'y'
      const operation = match[2] || 'set'
      const value = parseInt(match[3])
      this.drawBuffer()
      const position = (
        operation === 'set' ? value
      : operation === 'add' ? this[axis] + value
      : 0
      )
      this[axis] = Math.max(position, 0)
      this.index += match[0].length
      return true
    }
    // 使用阴影效果
    if (match = string.match(regexps.textShadow)) {
      const r = parseInt(match[3], 16)
      const g = parseInt(match[4], 16)
      const b = parseInt(match[5], 16)
      const a = parseInt(match[6] || 'ff', 16)
      const effect: TextEffectShadow = {
        type: 'shadow',
        shadowOffsetX: parseInt(match[1]),
        shadowOffsetY: parseInt(match[2]),
        color: `rgba(${r}, ${g}, ${b}, ${a})`,
      }
      this.drawBuffer()
      this.effects.unshift(effect)
      this.index += match[0].length
      return true
    }
    // 结束阴影效果
    if ((match = string.match(regexps.textShadowRestore)) && this.effects.length > 1 && this.effects[0].type === 'shadow') {
      this.drawBuffer()
      this.effects.shift()
      this.index += match[0].length
      return true
    }
    // 使用描边效果
    if (match = string.match(regexps.textStroke)) {
      const r = parseInt(match[2], 16)
      const g = parseInt(match[3], 16)
      const b = parseInt(match[4], 16)
      const a = parseInt(match[5] || 'ff', 16)
      const effect: TextEffectStroke = {
        type: 'stroke',
        strokeWidth: parseInt(match[1]),
        color: `rgba(${r}, ${g}, ${b}, ${a})`,
      }
      this.drawBuffer()
      this.effects.unshift(effect)
      this.index += match[0].length
      return true
    }
    // 结束描边效果
    if ((match = string.match(regexps.textStrokeRestore)) && this.effects.length > 1 && this.effects[0].type === 'stroke') {
      this.drawBuffer()
      this.effects.shift()
      this.index += match[0].length
      return true
    }
    // 使用轮廓效果
    if (match = string.match(regexps.textOutline)) {
      const r = parseInt(match[1], 16)
      const g = parseInt(match[2], 16)
      const b = parseInt(match[3], 16)
      const a = parseInt(match[4] || 'ff', 16)
      const effect: TextEffectOutline = {
        type: 'outline',
        color: `rgba(${r}, ${g}, ${b}, ${a})`,
      }
      this.drawBuffer()
      this.effects.unshift(effect)
      this.index += match[0].length
      return true
    }
    // 结束轮廓效果
    if ((match = string.match(regexps.textOutlineRestore)) && this.effects.length > 1 && this.effects[0].type === 'outline') {
      this.drawBuffer()
      this.effects.shift()
      this.index += match[0].length
      return true
    }
    // 使用指定图像
    if (match = string.match(regexps.image)) {
      const guid = match[1]
      let clip: ImageClip | null = null
      let width = 0
      let height = 0
      if (!match[2]) {
        // 存在1个参数
        width = this.sizes[0]
        height = this.sizes[0]
      } else if (!match[4]) {
        // 存在3个参数
        width = parseInt(match[2])
        height = parseInt(match[3])
      } else {
        // 存在5-7个参数
        clip = [
          parseInt(match[2]),
          parseInt(match[3]),
          parseInt(match[4]),
          parseInt(match[5]),
        ]
        width = parseInt(match[6] ?? this.sizes[0])
        height = parseInt(match[7] ?? this.sizes[0])
      }
      this.drawBuffer()
      this.loadImage(guid, clip, width, height)
      this.index += match[0].length
      return true
    }
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:59
