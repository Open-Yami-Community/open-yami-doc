---
sidebar_position: 1
title: setFlag 设置指定名称的标记
---

## setFlag

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

设置指定名称的标记

参数 `key`: 键

返回值:操作是否成功

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `boolean`

操作是否成功

### 源代码

**位置**: [第 215 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L215)

```typescript
public setFlag(key: string): boolean {
    if (key in this.flags) {
      return false
    }
    this.flags[key] = true
    return true
  }
```

---



文档生成时间：2026/1/31 13:13:59
