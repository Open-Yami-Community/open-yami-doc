---
sidebar_position: 1
title: inheritEquipment 继承父级装备的数据
---

## inheritEquipment

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

继承父级装备的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `equipment` | `EquipmentFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 498 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L498)

```typescript
private inheritEquipment(equipment: EquipmentFile): void {
    if (equipment.parent) {
      Data.mergeArrayByProperty(equipment.attributes, equipment.parent.attributes, 'key')
      Object.setPrototypeOf(equipment.events, equipment.parent.events)
      Data.mergeScripts(equipment.scripts, equipment.parent.scripts)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
