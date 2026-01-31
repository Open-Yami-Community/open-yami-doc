---
sidebar_position: 1
title: blur 失去焦点事件
---

## blur

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

失去焦点事件

参数 `event`: 焦点事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `FocusEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 302 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L302)

```typescript
private blur(event: FocusEvent): void {
    // 弹起所有按下的键盘按键
    for (const [keycode, state] of Object.entries(Input.keys)) {
      if (state === 1) {
        Input.simulateKey('keyup', keycode)
      }
    }
    // 弹起所有按下的鼠标按键
    for (let i = 0; i < Input.buttons.length; i++) {
      if (Input.buttons[i] === 1) {
        Input.simulateButton('pointerup', i)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
