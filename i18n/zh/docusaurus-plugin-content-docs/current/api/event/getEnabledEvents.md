---
sidebar_position: 1
title: getEnabledEvents 获取已启用的事件指令
---

## getEnabledEvents

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

获取已启用的事件指令

参数 `type`: 事件类型

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |

### 返回值

类型: `Array&lt;CommandFunctionList&gt;`

### 源代码

**位置**: [第 234 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L234)

```typescript
public getEnabledEvents(type: string): Array<CommandFunctionList> {
    const list = []
    for (const commands of this.typeMap[type]!) {
      if (commands.enabled) {
        list.push(commands)
      }
    }
    return list
  }
```

---



文档生成时间：2026/1/31 13:13:59
