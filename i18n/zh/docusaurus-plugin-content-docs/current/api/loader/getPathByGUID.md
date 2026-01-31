---
sidebar_position: 1
title: getPathByGUID 获取文件路径(通过GUID)
---

## getPathByGUID

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

获取文件路径(通过GUID)

参数 `guid`: 文件GUID

返回值:文件路径或空字符串

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `guid` | `string` | - | - |

### 返回值

类型: `string`

文件路径或空字符串

### 源代码

**位置**: [第 204 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L204)

```typescript
public getPathByGUID(guid: string): string {
    return Data.manifest.guidMap[guid]?.path ?? ''
  }
```

---



文档生成时间：2026/1/31 13:13:59
