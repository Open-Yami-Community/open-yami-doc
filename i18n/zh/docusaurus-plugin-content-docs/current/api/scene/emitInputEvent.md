---
sidebar_position: 1
title: emitInputEvent 发送场景输入事件
---

## emitInputEvent

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

发送场景输入事件

参数 `type`: 场景事件类型

参数 `argument`: 场景事件传递参数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `argument` | `any` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 578 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L578)

```typescript
private emitInputEvent(type: string, argument: any): void {
    for (const listener of this.listeners[type] ?? []) {
      // 每次调用侦听器时判断一下，因为调用后可能发生变化
      if (Game.paused === false && Scene.preventInputEvents === 0) {
        listener(argument)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
