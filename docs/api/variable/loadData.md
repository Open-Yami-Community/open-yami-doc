---
sidebar_position: 1
title: loadData 加载全局变量数据
---

## loadData

**类型**: `MethodDeclaration`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

加载全局变量数据

参数 `groupIndex`: 变量群组索引(0:常规, 1:共享)

参数 `variables`: 保存的全局变量数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `groupIndex` | `number` | - | - |
| `variables` | `AttributeMap` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 156 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L156)

```typescript
public loadData(groupIndex: number, variables: AttributeMap): void {
    const group = Variable.groups[groupIndex]
    const length = group.length
    for (let i = 0; i < length; i++) {
      const item = group[i]
      const key = item.id
      // 从存档数据中加载变量值
      // 如果类型有效，则写入值
      const value = variables[key]
      const type = typeof item.value
      if (type === typeof value) {
        Variable.map[key] = value
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
