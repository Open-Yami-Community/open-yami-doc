---
sidebar_position: 1
title: saveData 保存全局变量数据
---

## saveData

**类型**: `MethodDeclaration`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

保存全局变量数据

参数 `groupIndex`: 变量群组索引(0:常规, 1:共享)

返回值:变量存档数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `groupIndex` | `0 \| 1` | - | - |

### 返回值

类型: `AttributeMap`

变量存档数据

### 源代码

**位置**: [第 140 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L140)

```typescript
public saveData(groupIndex: 0 | 1): AttributeMap {
    const data: AttributeMap = {}
    const group = Variable.groups[groupIndex]
    const length = group.length
    for (let i = 0; i < length; i++) {
      const key = group[i].id
      data[key] = Variable.map[key]
    }
    return data
  }
```

---



文档生成时间：2026/1/31 13:13:59
