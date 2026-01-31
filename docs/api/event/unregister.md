---
sidebar_position: 1
title: unregister 取消注册事件指令
---

## unregister

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

取消注册事件指令

参数 `key`: 事件的键

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `key` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 178 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L178)

```typescript
public unregister(key: string): void {
    const context = this.keyMap[key]
    if (context) {
      const {type, commandList} = context
      this.typeMap[type]?.remove(commandList)
      this.stopEvents(commandList)
      delete this.keyMap[key]
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
