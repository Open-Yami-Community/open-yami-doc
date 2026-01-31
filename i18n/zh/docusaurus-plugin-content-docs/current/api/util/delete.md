---
sidebar_position: 1
title: delete 从列表中删除模块
---

## delete

**类型**: `MethodDeclaration`

**所属类**: `ModuleList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

从列表中删除模块

参数 `key`: 模块的键

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 534 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L534)

```typescript
public delete(key: string): void {
    const map = this.moduleMap
    const module = map[key]
    if (module) {
      this.remove(module)
      delete map[key]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
