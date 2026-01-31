---
sidebar_position: 1
title: initialize 初始化插件管理器
---

## initialize

**类型**: `MethodDeclaration`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

初始化插件管理器

### 返回值

类型: `void`

### 源代码

**位置**: [第 396 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L396)

```typescript
public initialize(): void {
    const plugins = Data.plugins
    const manager = ScriptManager.create({}, plugins)
    // 获取脚本实例，以类名作为键进行注册
    for (const instance of manager.instances) {
      const name = instance.constructor.name as string
      if (name !== '') this[name] = instance
    }
    // 设置到事件管理器中
    EventManager.script = manager
  }
```

---



文档生成时间：2026/1/31 13:13:59
