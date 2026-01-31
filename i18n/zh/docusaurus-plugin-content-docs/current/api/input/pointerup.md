---
sidebar_position: 1
title: pointerup 指针弹起事件(单指触控结束)
---

## pointerup

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

指针弹起事件(单指触控结束)

参数 `event`: 指针事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `PointerEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 500 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L500)

```typescript
private pointerup(event: PointerEvent): void {
    if (event.pointerType !== 'mouse' && event.isPrimary && Input.buttons[0] === 1) {
      // 模拟鼠标弹起行为:
      // 1.鼠标[左键]弹起
      // 2.鼠标离开游戏窗口
      Input.buttons[0] = 0
      Input.mouseupList.add(0)
      const scriptEvent = new ScriptMouseEvent(event)
      Input.emit('mouseupLB', scriptEvent)
      Input.emit('mouseup', scriptEvent)
      Mouse.pointerleave(event)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
