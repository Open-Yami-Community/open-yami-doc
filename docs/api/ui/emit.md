---
sidebar_position: 1
title: emit 调用元素事件和脚本
---

## emit

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

调用元素事件和脚本

参数 `type`: 元素事件类型

参数 `event`: 脚本事件对象或元素

参数 `bubble`: 是否传递事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `event` | `InputScriptEvent \| UIElement` | - | this |
| `bubble` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5088 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5088)

```typescript
public emit(type: string, event: InputScriptEvent | UIElement = this, bubble: boolean = false): void {
    // 调用影子脚本方法
    this.shadowScript.emit(type, this)
    // 当按钮处于受保护状态时，忽略部分事件
    switch (type) {
      case 'mousemove':
      case 'mouseenter':
      case 'mouseleave':
      case 'mousedown':
      case 'mousedownLB':
      case 'mousedownRB':
      case 'mouseup':
      case 'mouseupLB':
      case 'mouseupRB':
      case 'click':
        if (this.isProtected()) return
        Input.bubbles.stop()
        break
    }
    return super.emit(type, event, bubble)
  }
```

---



文档生成时间：2026/1/31 13:13:59
