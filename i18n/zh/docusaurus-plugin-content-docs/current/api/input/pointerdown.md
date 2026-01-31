---
sidebar_position: 1
title: pointerdown 指针按下事件(单指触控开始)
---

## pointerdown

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

指针按下事件(单指触控开始)

参数 `event`: 指针事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `PointerEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 480 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L480)

```typescript
private pointerdown(event: PointerEvent): void {
    if (event.pointerType !== 'mouse' && event.isPrimary && Input.buttons[0] === 0) {
      // 模拟鼠标按下行为:
      // 1.鼠标进入游戏窗口
      // 2.鼠标移动到目标位置
      // 3.鼠标[左键]按下
      Mouse.pointerenter(event)
      Mouse.pointermove(event)
      Input.buttons[0] = 1
      Input.mousedownList.add(0)
      const scriptEvent = new ScriptMouseEvent(event)
      Input.emit('mousedownLB', scriptEvent)
      Input.emit('mousedown', scriptEvent)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
