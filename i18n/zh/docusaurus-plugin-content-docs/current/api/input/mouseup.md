---
sidebar_position: 1
title: mouseup 鼠标弹起事件
---

## mouseup

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

鼠标弹起事件

参数 `event`: 鼠标事件

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `event` | `MouseEvent` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 459 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L459)

```typescript
private mouseup(event: MouseEvent): void {
    if (Input.buttons[event.button] === 1) {
      Input.buttons[event.button] = 0
      Input.mouseupList.add(event.button)
      const scriptEvent = new ScriptMouseEvent(event)
      switch (event.button) {
        case 0: Input.emit('mouseupLB', scriptEvent); break
        case 2: Input.emit('mouseupRB', scriptEvent); break
        // 阻止Chrome浏览器：
        // 前进/后退键弹起页面导航行为
        case 3:
        case 4: event.preventDefault(); break
      }
      Input.emit('mouseup', scriptEvent)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
