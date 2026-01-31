---
sidebar_position: 1
title: updateDisplayMode 更新显示模式
---

## updateDisplayMode

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

更新显示模式

参数 `se`: 是否播放选中音效

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `se` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4946 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4946)

```typescript
public updateDisplayMode(se: boolean = false): void {
    let mode = this.mode
    if (mode === 'normal') {
      mode = this.state
      if (mode === 'hover' && this.isProtected()) {
        mode = 'active'
      }
    }
    if (this.activeMode !== mode) {
      this.activeMode = mode
      switch (mode) {
        case 'normal':
          this.image = this.normalImage
          this.color = this.normalColor
          this.clip = this.normalClip
          switch (this.imageEffect) {
            case 'none':
              break
            case 'tint-1':
            case 'tint-2':
            case 'tint-3':
              this.tint = this.normalTint
              break
          }
          break
        case 'hover':
          this.image = this.hoverImage || this.normalImage
          this.color = this.hoverColor || this.normalColor
          this.clip = this.hoverImage && this.hoverClip || this.normalClip
          switch (this.imageEffect) {
            case 'none':
              break
            case 'tint-1':
              this.tint = this.normalTint
              break
            case 'tint-2':
            case 'tint-3':
              this.tint = this.hoverTint
              break
          }
          if (se) {
            this.playHoverSound()
          }
          break
        case 'active':
          this.image = this.activeImage || this.hoverImage || this.normalImage
          this.color = this.activeColor || this.hoverColor || this.normalColor
          this.clip = this.activeImage && this.activeClip || this.hoverImage && this.hoverClip || this.normalClip
          switch (this.imageEffect) {
            case 'none':
              break
            case 'tint-1':
              this.tint = this.normalTint
              break
            case 'tint-2':
              this.tint = this.hoverTint
              break
            case 'tint-3':
              this.tint = this.activeTint
              break
          }
          break
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
