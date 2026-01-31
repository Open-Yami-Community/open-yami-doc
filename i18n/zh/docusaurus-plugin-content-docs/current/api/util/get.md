---
sidebar_position: 1
title: get 获取模块
---

## get

**类型**: `MethodDeclaration`

**所属类**: `ModuleList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

获取模块

参数 `key`: 模块的键

返回值:设置了此键的模块

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `T \| undefined`

设置了此键的模块

### 源代码

**位置**: [第 483 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L483)

```typescript
public get(key: string): T | undefined {
    return this.moduleMap[key]
  }
```

---



文档生成时间：2026/1/31 13:13:59
