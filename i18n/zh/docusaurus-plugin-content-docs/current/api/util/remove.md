---
sidebar_position: 1
title: remove 移除模块
---

## remove

**类型**: `MethodDeclaration`

**所属类**: `ModuleList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

移除模块

参数 `module`: 模块对象

返回值:操作是否成功

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `module` | `T` | - | - |

### 返回值

类型: `boolean`

操作是否成功

### 源代码

**位置**: [第 521 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L521)

```typescript
public remove(module: T): boolean {
    const index = this.indexOf(module)
    if (index !== -1) {
      this.splice(index, 1)
      return true
    }
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:59
