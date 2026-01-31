---
sidebar_position: 1
title: set 设置数据项
---

## set

**类型**: `MethodDeclaration`

**所属类**: `ItemGroup`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

设置数据项

参数 `key`: 键

参数 `item`: 数据项

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `item` | `T` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 761 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L761)

```typescript
public set(key: string, item: T): void {
    if (!(key in this.map)) {
      this.map[key] = item
      this.list.push(item)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
