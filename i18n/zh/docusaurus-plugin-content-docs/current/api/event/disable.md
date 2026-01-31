---
sidebar_position: 1
title: disable 禁用全局事件(立即)
---

## disable

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

禁用全局事件(立即)

参数 `id`: 全局事件文件ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 361 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L361)

```typescript
public disable(id: string): void {
    const commands = this.guidMap[id]
    if (commands) {
      commands.enabled = false
      delete commands.callback
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
