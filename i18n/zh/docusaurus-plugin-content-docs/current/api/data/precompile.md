---
sidebar_position: 1
title: precompile 预编译对象数据
---

## precompile

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

预编译对象数据

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 255 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L255)

```typescript
private async precompile(): Promise<void> {
    await (this.attribute as any)
    await (this.enumeration as any)
    Attribute.initialize()
    Enum.initialize()
    this.precompileScenes()
    this.precompileActors()
    this.precompileSkills()
    this.precompileTriggers()
    this.precompileItems()
    this.precompileEquipments()
    this.precompileStates()
    this.precompileAnimations()
  }
```

---



文档生成时间：2026/1/31 13:13:58
