---
sidebar_position: 1
title: simulateButton 模拟鼠标按键
---

## simulateButton

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

模拟鼠标按键

参数 `type`: 指针事件类型

参数 `button`: 键码

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `button` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 333 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L333)

```typescript
public simulateButton(type: string, button: number): void {
    const event = Input.event
    window.dispatchEvent(new PointerEvent(type, {button: button}))
    Input.event = event
  }
```

---



文档生成时间：2026/1/31 13:13:59
