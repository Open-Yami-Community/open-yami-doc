---
sidebar_position: 1
title: getGroup 获取枚举群组
---

## getGroup

**类型**: `MethodDeclaration`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

获取枚举群组

参数 `groupId`: 群组ID

返回值:枚举群组

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `groupId` | `string` | - | - |

### 返回值

类型: `EnumerationGroup \| undefined`

枚举群组

### 源代码

**位置**: [第 706 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L706)

```typescript
public getGroup(groupId: string): EnumerationGroup | undefined {
    return this.groupMap[groupId]
  }
```

---



文档生成时间：2026/1/31 13:13:59
