---
sidebar_position: 1
title: loadEntries 加载属性词条到映射表中
---

## loadEntries

**类型**: `MethodDeclaration`

**定义位置**: [`variable.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts)

### 描述

加载属性词条到映射表中

参数 `map`: 属性映射表

参数 `entries`: 属性键值对列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `map` | `AttributeMap` | - | - |
| `entries` | `Array&lt;InitialAttribute&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 256 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/variable.ts#L256)

```typescript
public loadEntries(map: AttributeMap, entries: Array<InitialAttribute>): void {
    for (const entry of entries) {
      const attr = Attribute.get(entry.key)
      if (attr !== undefined) {
        if (attr.type === 'enum') {
          const enumstr = Enum.get(entry.value as string)
          if (enumstr !== undefined) {
            map[attr.key] = enumstr.value
          }
        } else {
          map[attr.key] = entry.value
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
