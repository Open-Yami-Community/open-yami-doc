---
sidebar_position: 1
title: mousedown 鼠标按下事件
---

## mousedown

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

鼠标按下事件

参数 `event`: 鼠标事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `MouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 442 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L442)

```typescript
private mousedown(event: MouseEvent): void {
    if (Input.buttons[event.button] === 0) {
      Input.buttons[event.button] = 1
      Input.mousedownList.add(event.button)
      const scriptEvent = new ScriptMouseEvent(event)
      switch (event.button) {
        case 0: Input.emit('mousedownLB', scriptEvent); break
        case 2: Input.emit('mousedownRB', scriptEvent); break
      }
      Input.emit('mousedown', scriptEvent)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
