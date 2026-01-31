---
sidebar_position: 1
title: getEvents 获取脚本事件列表
---

## getEvents

**类型**: `MethodDeclaration`

**所属类**: `ScriptManager`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

获取脚本事件列表

参数 `type`: 事件类型

返回值:脚本事件列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |

### 返回值

类型: `ScriptMethodList \| undefined`

脚本事件列表

### 源代码

**位置**: [第 859 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L859)

```typescript
public getEvents(type: string): ScriptMethodList | undefined {
    // 将事件类型映射到脚本事件方法名称
    const method = ScriptManager.eventTypeMap[type] ?? ''
    const methods = ScriptManager.scriptMethods.reset()
    // 调用每个脚本对象的事件方法，并传递参数
    for (const instance of this.instances) {
      if (typeof instance[method] === 'function') {
        methods.add(instance, method)
      }
    }
    return methods.count > 0 ? methods : undefined
  }
```

---



文档生成时间：2026/1/31 13:13:59
