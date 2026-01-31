---
sidebar_position: 1
title: emit 调用触发器事件和脚本
---

## emit

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

调用触发器事件和脚本

参数 `type`: 触发器事件类型

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 461 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L461)

```typescript
public emit(type: string): void {
    this.callEvent(type)
    this.script.emit(type, this)
  }
```

---



文档生成时间：2026/1/31 13:13:59
