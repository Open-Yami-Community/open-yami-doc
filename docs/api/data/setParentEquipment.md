---
sidebar_position: 1
title: setParentEquipment 设置父级装备的引用
---

## setParentEquipment

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

设置父级装备的引用

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `equipment` | `EquipmentFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 488 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L488)

```typescript
private setParentEquipment(equipment: EquipmentFile): void {
    if (equipment.inherit !== '' && equipment.inherit !== equipment.id) {
      const parent = Data.equipments[equipment.inherit]
      if (parent !== undefined) {
        equipment.parent = parent
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
