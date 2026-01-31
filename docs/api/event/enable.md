---
sidebar_position: 1
title: enable 启用全局事件(延迟)
---

## enable

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

启用全局事件(延迟)

参数 `id`: 全局事件文件ID

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 341 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L341)

```typescript
public enable(id: string): void {
    const commands = this.guidMap[id]
    if (commands) {
      const {version} = this
      commands.callback = () => {
        if (this.version === version) {
          commands.enabled = true
        }
        delete commands.callback
      }
      Callback.push(() => {
        commands.callback?.()
      })
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
