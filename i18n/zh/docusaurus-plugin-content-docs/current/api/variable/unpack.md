---
sidebar_position: 1
title: unpack 解包枚举和群组的数据
---

## unpack

**类型**: `MethodDeclaration`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

解包枚举和群组的数据

参数 `items`: 枚举数据列表

参数 `groupKeys`: 群组ID的栈列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `items` | `EnumerationDirectory` | - | - |
| `groupKeys` | `Array&lt;string&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 715 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L715)

```typescript
private unpack(items: EnumerationDirectory, groupKeys: Array<string>): void {
    for (const item of items) {
      const id = item.id
      if ('children' in item) {
        // 解包文件夹中的枚举对象
        Enum.groupMap[id] = new ItemGroup()
        groupKeys.push(id)
        this.unpack(item.children, groupKeys)
        groupKeys.pop()
      } else {
        // 构建枚举对象映射关系
        this.idMap[id] = item
        if (item.value === '') {
          item.value = id
        }
        // 构建{群组ID:枚举值:枚举名称}映射表
        for (const key of groupKeys) {
          Enum.groupMap[key]!.set(item.id, item)
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
