---
sidebar_position: 1
title: getName 获取枚举名称(未使用)
---

## getName

**类型**: `MethodDeclaration`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

获取枚举名称(未使用)

参数 `enumId`: 枚举ID

返回值:枚举名称

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `enumId` | `string` | - | - |

### 返回值

类型: `string`

枚举名称

### 源代码

**位置**: [第 688 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L688)

```typescript
public getName(enumId: string): string {
    return this.idMap[enumId]?.name ?? ''
  }
```

---



文档生成时间：2026/1/31 13:13:59
