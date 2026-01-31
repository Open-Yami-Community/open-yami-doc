---
sidebar_position: 1
title: onTransitionEnd 设置时间缩放过渡结束回调
---

## onTransitionEnd

**类型**: `MethodDeclaration`

**定义位置**: [`time.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts)

### 描述

设置时间缩放过渡结束回调

参数 `callback`: 回调函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `callback` | `CallbackFunction` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 140 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/time.ts#L140)

```typescript
public onTransitionEnd(callback: CallbackFunction): void {
    if (this.callbacks !== null) {
      this.callbacks.push(callback)
    } else {
      this.callbacks = [callback]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
