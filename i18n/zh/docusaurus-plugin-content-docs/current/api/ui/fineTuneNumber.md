---
sidebar_position: 1
title: fineTuneNumber 微调输入框数值
---

## fineTuneNumber

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

微调输入框数值

参数 `offset`: 数值偏差

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `offset` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 3098 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3098)

```typescript
private fineTuneNumber(offset: number): void {
    this.input.value = this.readInputNumber(offset).toString()
    this.inputEvent(new InputEvent('input'))
  }
```

---



文档生成时间：2026/1/31 13:13:59
