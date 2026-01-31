---
sidebar_position: 1
title: precompileTriggers 预编译触发器数据
---

## precompileTriggers

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

预编译触发器数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 412 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L412)

```typescript
private precompileTriggers(): void {
    const triggers = Object.values(this.triggers) as Array<TriggerFile>
    for (const trigger of triggers) {
      trigger.motion = Enum.getValue(trigger.motion)
      this.compileEvents(trigger, trigger.path)
      this.setParentTrigger(trigger)
    }
    this.inheritForEach(triggers, this.inheritTrigger)
  }
```

---



文档生成时间：2026/1/31 13:13:58
