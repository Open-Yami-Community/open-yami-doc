---
sidebar_position: 1
title: get 从映射表中获取对象
---

## get

**类型**: `MethodDeclaration`

**所属类**: `EntityManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

从映射表中获取对象

参数 `key`: 实体ID/预设ID/名称

返回值:返回实体对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `EntityObject \| undefined`

返回实体对象

### 源代码

**位置**: [第 6594 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L6594)

```typescript
public get(key: string): EntityObject | undefined {
    return this.presetIdMap[key] ?? this.nameMap[key] ?? this.entityIdMap[key]
  }
```

---



文档生成时间：2026/1/31 13:13:59
