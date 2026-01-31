---
sidebar_position: 1
title: setToHighestPriority 设置全局事件为最高优先级
---

## setToHighestPriority

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

设置全局事件为最高优先级

参数 `id`: 全局事件文件ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 373 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L373)

```typescript
public setToHighestPriority(id: string): void {
    const commands = this.guidMap[id]
    if (commands) {
      // 延迟执行，将事件移动到头部
      Callback.push(() => {
        commands.priority = true
        const list = commands.parent!
        const index = list.indexOf(commands)
        for (let i = index; i > 0; i--) {
          list[i] = list[i - 1]
        }
        list[0] = commands
      })
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
