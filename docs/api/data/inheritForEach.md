---
sidebar_position: 1
title: inheritForEach 遍历继承父级数据
---

## inheritForEach

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

遍历继承父级数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `files` | `Array&lt;T&gt;` | - | - |
| `handler` | `(file\: T) =&gt; void` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 271 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L271)

```typescript
private inheritForEach<T extends {parent?: T}>(files: Array<T>, handler: (file: T) => void): void {
    const flags: Set<T> = new Set()
    while (files.length !== 0) {
      let i = files.length
      while (--i >= 0) {
        const file = files[i]
        const parent = file.parent
        if (parent === undefined) {
          files.splice(i, 1)
          flags.add(file)
          continue
        }
        if (flags.has(parent)) {
          handler(file)
          files.splice(i, 1)
          flags.add(file)
          continue
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
