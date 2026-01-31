---
sidebar_position: 1
title: get 获取指定ID的事件指令列表
---

## get

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

获取指定ID的事件指令列表

参数 `id`: 事件ID

返回值:指令列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |

### 返回值

类型: `CommandFunctionList \| undefined`

指令列表

### 源代码

**位置**: [第 217 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L217)

```typescript
public get(id: string): CommandFunctionList | undefined {
    return this.guidMap[id]
  }
```

---



文档生成时间：2026/1/31 13:13:58
