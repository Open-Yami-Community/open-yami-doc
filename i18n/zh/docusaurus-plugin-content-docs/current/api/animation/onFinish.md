---
sidebar_position: 1
title: onFinish 设置当前动作播放结束时的回调函数
---

## onFinish

**类型**: `MethodDeclaration`

**所属类**: `AnimationPlayer`

**定义位置**: [`animation.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts)

### 描述

设置当前动作播放结束时的回调函数

参数 `callback`: 回调函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `callback` | `(animation\: this) =&gt; void` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 886 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/animation.ts#L886)

```typescript
public onFinish(callback: (animation: this) => void): void {
    if (this.ended) {
      callback(this)
    } else {
      if (this.callbacks) {
        this.callbacks.push(callback)
      } else {
        this.callbacks = [callback]
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
