---
sidebar_position: 1
title: mergeArrayByProperty 通过关键属性合并列表数据
---

## mergeArrayByProperty

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

通过关键属性合并列表数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `a` | `Array&lt;any&gt;` | - | - |
| `b` | `Array&lt;any&gt;` | - | - |
| `key` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 294 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L294)

```typescript
private mergeArrayByProperty(a: Array<any>, b: Array<any>, key: string): void {
    const map: HashMap<boolean> = {}
    for (const item of a) {
      const id = item[key]
      map[id] = true
    }
    for (const item of b) {
      const id = item[key]
      if (id in map) continue
      map[id] = true
      a.push(item)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
