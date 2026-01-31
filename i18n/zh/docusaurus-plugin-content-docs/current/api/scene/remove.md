---
sidebar_position: 1
title: remove 从管理器中移除对象
---

## remove

**类型**: `MethodDeclaration`

**所属类**: `EntityManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

从管理器中移除对象

参数 `object`: 实体对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `object` | `EntityObject` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 6631 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L6631)

```typescript
public remove(object: EntityObject): void {
    // 从实体列表中移除对象
    this.list.remove(object)

    // 从实体ID映射表中移除对象
    delete this.entityIdMap[object.entityId]

    // 从预设ID映射表中移除对象
    if (this.presetIdMap[object.presetId] === object) {
      delete this.presetIdMap[object.presetId]
    }

    // 从名称映射表中移除对象
    if (this.nameMap[object.name] === object) {
      delete this.nameMap[object.name]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
