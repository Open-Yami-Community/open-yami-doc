---
sidebar_position: 1
title: pause 暂停执行事件
---

## pause

**类型**: `MethodDeclaration`

**所属类**: `EventHandler`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

暂停执行事件

返回值:中断指令的执行

### 返回值

类型: `false`

中断指令的执行

### 源代码

**位置**: [第 539 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L539)

```typescript
public pause(): false {
    this.getTimer()
    // 设置更新函数为：等待
    this.update = EventHandler.wait
    return false
  }
```

---



文档生成时间：2026/1/31 13:13:59
