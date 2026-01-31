---
sidebar_position: 1
title: loadImage 加载图像
---

## loadImage

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

加载图像

参数 `guid`: 图像GUID

参数 `clip`: 图像裁剪区域

参数 `width`: 图像显示宽度

参数 `height`: 图像显示高度

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `guid` | `string` | - | - |
| `clip` | `ImageClip \| null` | - | - |
| `width` | `number` | - | - |
| `height` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 462 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L462)

```typescript
public loadImage(guid: string, clip: ImageClip | null, width: number, height: number): void {
    // 排除无效图像宽高
    if (width * height === 0) return

    // 换行模式：宽度溢出时强制换行(但至少绘制一个字符)
    const horizontal = this.horizontal
    const imageWidth = width * Printer.scale
    const imageHeight = height * Printer.scale
    const letterSpacing = this.getScaledLetterSpacing()
    if (this.wordWrap && this.breakable && (horizontal
    ? this.x + Printer.lineWidth + imageWidth > this.getScaledPrintWidth()
    : this.y + Printer.lineWidth + imageHeight > this.getScaledPrintHeight())) {
      this.newLine()
    }

    // 创建图像元素
    const imageElement = new ImageElement() as PrinterImageElement
    imageElement.startX = this.getRawX()
    imageElement.startY = this.getRawY()
    imageElement.image = guid
    imageElement.set({
      x: imageElement.startX,
      y: imageElement.startY,
      width: width,
      height: height,
    })
    if (clip) {
      imageElement.display = 'clip'
      Array.fill(imageElement.clip, clip)
    }
    this.images.push(imageElement)
    this.images.changed = true

    // 设置打印机指令
    const commands = this.commands
    const command = Printer.fetchCommand()
    commands.push(command)
    command.x = this.x
    command.y = this.y
    command.image = imageElement
    command.imageWidth = imageWidth
    command.imageHeight = imageHeight
    command.imageSpacing = (horizontal ? imageWidth : imageHeight) + letterSpacing
    command.drawingMethod = Function.empty

    // 重置属性(通用)
    this.breakable = true
    // 根据不同的文本方向，计算下一个位置、行高、文本区域宽度、文本区域高度
    if (horizontal) {
      this.x += imageWidth + letterSpacing
      this.lineHeight = Math.max(this.lineHeight, imageHeight)
      this.width = Math.max(this.width, this.x)
      this.height = Math.max(this.height, this.y + this.lineHeight)
    } else {
      this.y += imageHeight + letterSpacing
      this.lineHeight = Math.max(this.lineHeight, imageWidth)
      this.width = Math.max(this.width, this.x + this.lineHeight)
      this.height = Math.max(this.height, this.y)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
