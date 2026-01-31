---
sidebar_position: 1
title: getKey 获取属性键
---

## getKey

**类型**: `MethodDeclaration`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

获取属性键

参数 `attrId`: 属性ID

返回值:属性键

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `attrId` | `string` | - | - |

### 返回值

类型: `string`

属性键

### 源代码

**位置**: [第 210 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L210)

```typescript
public getKey(attrId: string): string {
    return this.idMap[attrId]?.key ?? ''
  }
```

---



文档生成时间：2026/1/31 13:13:59
