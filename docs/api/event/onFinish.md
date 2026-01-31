---
sidebar_position: 1
title: onFinish 设置事件结束回调
---

## onFinish

**类型**: `MethodDeclaration`

**所属类**: `EventHandler`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

设置事件结束回调

参数 `callback`: 回调函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `callback` | `(event\: this) =&gt; void` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 570 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L570)

```typescript
public onFinish(callback: (event: this) => void): void {
    if (this.complete) {
      callback(this)
    } else {
      // 添加回调函数到队列中
      if (this.callbacks !== undefined) {
        this.callbacks.push(callback)
      } else {
        this.callbacks = [callback]
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
