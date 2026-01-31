---
sidebar_position: 1
title: remove 移除触发器
---

## remove

**类型**: `MethodDeclaration`

**所属类**: `Trigger`

**定义位置**: [`trigger.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts)

### 描述

移除触发器

### 返回值

类型: `void`

### 源代码

**位置**: [第 425 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/trigger.ts#L425)

```typescript
public remove(): void {
    this.destroy()
    // 延迟从触发器列表中移除自己
    Callback.push(() => {
      Scene.trigger.remove(this)
    })
  }
```

---



文档生成时间：2026/1/31 13:13:59
