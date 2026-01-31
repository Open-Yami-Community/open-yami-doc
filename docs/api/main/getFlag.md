---
sidebar_position: 1
title: getFlag 查询是否设置过这个标记
---

## getFlag

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

查询是否设置过这个标记

参数 `key`: 键

返回值:是否设置过

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `boolean`

是否设置过

### 源代码

**位置**: [第 206 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L206)

```typescript
public getFlag(key: string): boolean {
    return this.flags[key] ?? false
  }
```

---



文档生成时间：2026/1/31 13:13:59
