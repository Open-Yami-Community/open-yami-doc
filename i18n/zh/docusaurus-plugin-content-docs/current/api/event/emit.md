---
sidebar_position: 1
title: emit 发送脚本事件
---

## emit

**类型**: `MethodDeclaration`

**所属类**: `ScriptManager`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

发送脚本事件

参数 `type`: 事件类型

参数 `argument`: 传递参数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |
| `argument` | `any` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 839 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L839)

```typescript
public emit(type: string, argument?: any): void {
    // 将事件类型映射到脚本事件方法名称
    const method = ScriptManager.eventTypeMap[type] ?? ''
    // 调用每个脚本对象的事件方法，并传递参数
    for (const instance of this.instances) {
      if (method in instance) {
        instance[method](argument)
        // 如果事件停止传递，跳出
        if (type in Input.listeners && Input.bubbles.get() === false) {
          return
        }
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
