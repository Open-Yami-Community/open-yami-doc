---
sidebar_position: 1
title: getValue 获取枚举值
---

## getValue

**类型**: `MethodDeclaration`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

获取枚举值

参数 `enumId`: 枚举ID

返回值:枚举值(默认: '')

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `enumId` | `string` | - | - |

### 返回值

类型: `string`

枚举值(默认: '')

### 源代码

**位置**: [第 697 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L697)

```typescript
public getValue(enumId: string): string {
    return this.idMap[enumId]?.value ?? ''
  }
```

---



文档生成时间：2026/1/31 13:13:59
