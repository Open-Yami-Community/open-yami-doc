---
sidebar_position: 1
title: wheelEvent 输入框鼠标滚轮事件
---

## wheelEvent

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

输入框鼠标滚轮事件

参数 `event`: 滚轮事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `WheelEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3028 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3028)

```typescript
private wheelEvent(event: WheelEvent): void {
    // 如果是数值输入框且获得焦点，滚轮滚动可微调数值
    if (this.type === 'number' && this.focusing) {
      this.fineTuneNumber(event.deltaY < 0 ? +1 : -1)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
