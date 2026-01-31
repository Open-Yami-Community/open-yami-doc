---
sidebar_position: 1
title: on 设置加载回调
---

## on

**类型**: `MethodDeclaration`

**所属类**: `ImageTexture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

设置加载回调

参数 `type`: 回调事件类型

参数 `callback`: 回调函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `callback` | `(texture\: this) =&gt; void` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2309 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2309)

```typescript
public on(type: string, callback: (texture: this) => void): void {
    BaseTexture.prototype.on.call(this, type, callback as any)
  }
```

---



文档生成时间：2026/1/31 13:13:59
