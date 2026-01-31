---
sidebar_position: 1
title: routeSave 获取存档文件路径(Node.js)
---

## routeSave

**类型**: `MethodDeclaration`

**定义位置**: [`loader.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts)

### 描述

获取存档文件路径(Node.js)

参数 `relativePath`: 相对路径

返回值:绝对路径

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `relativePath` | `string` | - | - |

### 返回值

类型: `string`

绝对路径

### 源代码

**位置**: [第 195 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/loader.ts#L195)

```typescript
public routeSave(relativePath: string): string {
    return require('path').resolve(Data.saveDir, relativePath)
  }
```

---



文档生成时间：2026/1/31 13:13:59
