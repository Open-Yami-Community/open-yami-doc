---
sidebar_position: 1
title: add 添加对象到管理器
---

## add

**类型**: `MethodDeclaration`

**所属类**: `EntityManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

添加对象到管理器

参数 `object`: 实体对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `object` | `EntityObject` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 6602 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L6602)

```typescript
public add(object: EntityObject): void {
    // 添加对象到实体列表
    this.list.push(object)

    // 添加对象到实体ID映射表
    let {entityId} = object
    if (entityId === '') {
      // 生成对象的实体ID
      do {entityId = GUID.generate64bit()}
      while (entityId in this.entityIdMap)
      object.entityId = entityId
    }
    this.entityIdMap[entityId] = object

    // 添加对象到预设ID映射表
    if (object.presetId) {
      this.presetIdMap[object.presetId] = object
    }

    // 添加对象到名称映射表
    if (object.name) {
      this.nameMap[object.name] = object
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
