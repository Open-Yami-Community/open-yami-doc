---
sidebar_position: 1
title: simulateKey 模拟键盘按键
---

## simulateKey

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

模拟键盘按键

参数 `type`: 键盘事件类型

参数 `keycode`: 键码

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `keycode` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 322 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L322)

```typescript
public simulateKey(type: string, keycode: string): void {
    const event = Input.event
    window.dispatchEvent(new KeyboardEvent(type, {code: keycode}))
    Input.event = event
  }
```

---



文档生成时间：2026/1/31 13:13:59
