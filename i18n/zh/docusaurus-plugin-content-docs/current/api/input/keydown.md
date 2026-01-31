---
sidebar_position: 1
title: keydown 键盘按下事件
---

## keydown

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

键盘按下事件

参数 `event`: 键盘事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `KeyboardEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 944 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L944)

```typescript
private keydown(event: KeyboardEvent): void {
    const {virtualAxis} = Data.config
    switch (event.code) {
      case virtualAxis.up:
        this.states.up = true
        this.update()
        break
      case virtualAxis.down:
        this.states.down = true
        this.update()
        break
      case virtualAxis.left:
        this.states.left = true
        this.update()
        break
      case virtualAxis.right:
        this.states.right = true
        this.update()
        break
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
