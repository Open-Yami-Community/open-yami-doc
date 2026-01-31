---
sidebar_position: 1
title: getBlobOrRawUrl 获取二进制对象或原生链接
---

## getBlobOrRawUrl

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

获取二进制对象或原生链接

参数 `path`: 原生路径

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `guid` | `string` | - | - |

### 返回值

类型: `string`

### 源代码

**位置**: [第 313 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L313)

```typescript
public getBlobOrRawUrl(guid: string): string {
    const path = this.getPathByGUID(guid)
    return this.cachedUrls[path] ?? path
  }
```

---



文档生成时间：2026/1/31 13:13:59
