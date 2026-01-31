---
sidebar_position: 1
title: encodeURL 编码字符串为CSSURL
---

## encodeURL

**类型**: `FunctionDeclaration`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

编码字符串为CSSURL

保证可以正常获取CSS资源

参数 `uri`: URI

返回值:CSSURL

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `uri` | `string` | - | - |

### 返回值

类型: `string`

CSSURL

### 源代码

**位置**: [第 208 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L208)

```typescript
function encodeURL(uri: string): string
```

---



文档生成时间：2026/1/31 13:13:59
