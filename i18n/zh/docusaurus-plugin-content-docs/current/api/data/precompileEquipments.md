---
sidebar_position: 1
title: precompileEquipments 预编译装备数据
---

## precompileEquipments

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

预编译装备数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 478 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L478)

```typescript
private precompileEquipments(): void {
    const equipments = Object.values(this.equipments) as Array<EquipmentFile>
    for (const equipment of equipments) {
      this.compileEvents(equipment, equipment.path)
      this.setParentEquipment(equipment)
    }
    this.inheritForEach(equipments, this.inheritEquipment)
  }
```

---



文档生成时间：2026/1/31 13:13:58
