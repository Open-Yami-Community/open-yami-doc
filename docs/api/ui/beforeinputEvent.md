---
sidebar_position: 1
title: beforeinputEvent 输入框输入前事件
---

## beforeinputEvent

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

输入框输入前事件

参数 `event`: 输入事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `InputEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3039 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3039)

```typescript
private beforeinputEvent(event: InputEvent): void {
    if (this.type === 'number' &&
      typeof event.data === 'string' &&
      !TextBoxElement.numberFilter.test(event.data)) {
      // 阻止在数值输入框中输入非法字符
      event.preventDefault()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
