---
sidebar_position: 1
title: compileEquipment 编译装备对象
---

## compileEquipment

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译装备对象

参数 `equipment`: 装备访问器

返回值:装备访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `equipment` | `EquipmentGetter` | - | - |

### 返回值

类型: `() =&gt; Equipment \| undefined`

装备访问器函数

### 源代码

**位置**: [第 583 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L583)

```typescript
public compileEquipment(equipment: EquipmentGetter): () => Equipment | undefined {
    switch (equipment.type) {
      case 'trigger':
        return () => CurrentEvent.triggerEquipment
      case 'latest':
        return () => Equipment.latest
      case 'by-slot': {
        const getActor = Command.compileActor(equipment.actor)
        const getSlot = Command.compileEnumValue(equipment.slot)
        return () => {
          return getActor()?.equipment.get(getSlot())
        }
      }
      case 'by-id-equipped': {
        const getActor = Command.compileActor(equipment.actor)
        return () => getActor()?.equipment.getById(equipment.equipmentId)
      }
      case 'by-id-inventory': {
        const getActor = Command.compileActor(equipment.actor)
        return () => {
          const asset = getActor()?.inventory.get(equipment.equipmentId)
          return asset instanceof Equipment ? asset : undefined
        }
      }
      case 'variable':
        return Command.compileVariable(equipment.variable, Attribute.EQUIPMENT_GET)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
