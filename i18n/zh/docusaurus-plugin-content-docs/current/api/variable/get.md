---
sidebar_position: 1
title: get 获取数据项
---

## get

**类型**: `MethodDeclaration`

**所属类**: `ItemGroup`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

获取数据项

参数 `key`: 键

返回值:数据项

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `T \| undefined`

数据项

### 源代码

**位置**: [第 752 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L752)

```typescript
public get(key: string): T | undefined {
    return this.map[key]
  }
```

---



文档生成时间：2026/1/31 13:13:59
