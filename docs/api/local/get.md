---
sidebar_position: 1
title: get 获取本地化文本
---

## get

**类型**: `MethodDeclaration`

**定义位置**: [`local.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts)

### 描述

获取本地化文本

参数 `id`: 本地化文本ID

返回值:当前语言包的本地化文本

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |

### 返回值

类型: `string`

当前语言包的本地化文本

### 源代码

**位置**: [第 147 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/local.ts#L147)

```typescript
private get(id: string): string {
    const content = this.textMap[id]?.contents[this.active]
    return typeof content === 'function' ? content() : content!
  }
```

---



文档生成时间：2026/1/31 13:13:59
