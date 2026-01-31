---
sidebar_position: 1
title: reply 执行加载回调
---

## reply

**类型**: `MethodDeclaration`

**所属类**: `ImageTexture`

**定义位置**: [`webgl.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts)

### 描述

执行加载回调

参数 `type`: 回调事件类型

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2317 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/webgl.ts#L2317)

```typescript
private reply(type: string): void {
    BaseTexture.prototype.reply.call(this, type)
  }
```

---



文档生成时间：2026/1/31 13:13:59
