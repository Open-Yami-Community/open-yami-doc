---
sidebar_position: 1
title: set 设置模块(替换同名模块)
---

## set

**类型**: `MethodDeclaration`

**所属类**: `ModuleList`

**定义位置**: [`util.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts)

### 描述

设置模块(替换同名模块)

参数 `key`: 模块的键

参数 `module`: 模块对象

返回值:传入的模块对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |
| `module` | `T` | - | - |

### 返回值

类型: `T`

传入的模块对象

### 源代码

**位置**: [第 493 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/util.ts#L493)

```typescript
public set(key: string, module: T): T {
    const map = this.moduleMap
    if (key in map) {
      const index = this.indexOf(map[key]!)
      this[index] = module
      map[key] = module
    } else {
      map[key] = module
      this.push(module)
    }
    return module
  }
```

---



文档生成时间：2026/1/31 13:13:59
