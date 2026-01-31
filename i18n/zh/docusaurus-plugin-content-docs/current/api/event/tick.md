---
sidebar_position: 1
title: tick 等待计时函数
---

## tick

**类型**: `MethodDeclaration`

**所属类**: `EventTimer`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

等待计时函数

参数 `this`: 事件处理器

参数 `deltaTime`: 增量时间(毫秒)

返回值:事件是否执行完毕

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `this` | `EventHandler` | - | - |
| `deltaTime` | `number` | - | - |

### 返回值

类型: `boolean`

事件是否执行完毕

### 源代码

**位置**: [第 719 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L719)

```typescript
private tick(this: EventHandler, deltaTime: number): boolean {
    if ((this.timer!.duration -= deltaTime) <= 0) {
      this.update = EventHandler.prototype.update
      return this.update(deltaTime)
    }
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:59
