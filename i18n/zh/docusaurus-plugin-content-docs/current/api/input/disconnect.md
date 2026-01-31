---
sidebar_position: 1
title: disconnect 手柄失去连接事件
---

## disconnect

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

手柄失去连接事件

参数 `event`: 手柄事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `GamepadEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 872 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L872)

```typescript
private disconnect(event: GamepadEvent): void {
    const pads = navigator.getGamepads()
    for (const pad of pads) {
      if (pad) {
        return
      }
    }
    Controller.update = Function.empty
    Controller.reset()
  }
```

---



文档生成时间：2026/1/31 13:13:59
