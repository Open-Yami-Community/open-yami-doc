---
sidebar_position: 1
title: keydownEvent 输入框键盘按下事件
---

## keydownEvent

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

输入框键盘按下事件

参数 `event`: 键盘事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `KeyboardEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2997 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L2997)

```typescript
private keydownEvent(event: KeyboardEvent): void {
    Input.keydownFilter(event)
    // 数值输入框：上下键进行数值微调
    if (this.type === 'number') {
      switch (event.code) {
        case 'ArrowUp':
          event.preventDefault()
          event.stopPropagation()
          this.fineTuneNumber(+1)
          break
        case 'ArrowDown':
          event.preventDefault()
          event.stopPropagation()
          this.fineTuneNumber(-1)
          break
        case 'ArrowLeft':
        case 'ArrowRight':
          event.stopPropagation()
          break
        case 'Escape':
          event.stopPropagation()
          this.input.blur()
          break
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
