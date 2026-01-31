---
sidebar_position: 1
title: parseGUID 从元数据中解析文件GUID
---

## parseGUID

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

从元数据中解析文件GUID

参数 `meta`: 文件的元数据

返回值:文件GUID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `meta` | `FileMeta` | - | - |

### 返回值

类型: `string`

文件GUID

### 源代码

**位置**: [第 670 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L670)

```typescript
private parseGUID(meta: FileMeta): string {
    const match = meta.path.match(this.fileGuidRegExp)
    return match ? match[1] : ''
  }
```

---



文档生成时间：2026/1/31 13:13:58
