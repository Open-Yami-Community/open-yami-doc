---
sidebar_position: 1
title: inheritTrigger 继承父级触发器的数据
---

## inheritTrigger

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

继承父级触发器的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `trigger` | `TriggerFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 433 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L433)

```typescript
private inheritTrigger(trigger: TriggerFile): void {
    if (trigger.parent) {
      Object.setPrototypeOf(trigger.events, trigger.parent.events)
      Data.mergeScripts(trigger.scripts, trigger.parent.scripts)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
