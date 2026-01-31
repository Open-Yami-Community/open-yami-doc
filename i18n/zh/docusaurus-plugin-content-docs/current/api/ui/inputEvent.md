---
sidebar_position: 1
title: inputEvent 输入框输入事件
---

## inputEvent

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

输入框输入事件

参数 `event`: 输入事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `InputEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3052 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3052)

```typescript
private inputEvent(event: InputEvent): void {
    const {printer, input} = this
    // 如果输入框内容发生变化，重置选中位置
    if (printer.content !== input.value) {
      this.selectionStart = -1
      this.selectionEnd = -1
      // 发送输入事件
      this.emit('input', new ScriptInputEvent(event), false)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
