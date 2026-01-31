---
sidebar_position: 1
title: setParentTrigger 设置父级触发器的引用
---

## setParentTrigger

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

设置父级触发器的引用

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `trigger` | `TriggerFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 423 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L423)

```typescript
private setParentTrigger(trigger: TriggerFile): void {
    if (trigger.inherit !== '' && trigger.inherit !== trigger.id) {
      const parent = Data.triggers[trigger.inherit]
      if (parent !== undefined) {
        trigger.parent = parent
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
