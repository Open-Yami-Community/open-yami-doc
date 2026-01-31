---
sidebar_position: 1
title: reset 重置指定群组的变量值
---

## reset

**类型**: `MethodDeclaration`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

重置指定群组的变量值

参数 `groupIndices`: 变量群组索引数组

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `groupIndices` | `Array&lt;0 \| 1 \| 2&gt;` | - | [0, 2\] |

### 返回值

类型: `void`

### 源代码

**位置**: [第 94 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L94)

```typescript
public reset(groupIndices: Array<0 | 1 | 2> = [0, 2]): void {
    for (const i of groupIndices) {
      for (const item of Variable.groups[i]) {
        // 以ID为键，写入变量值
        Variable.map[item.id] = item.value ?? undefined
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
