---
sidebar_position: 1
title: add 添加脚本对象
---

## add

**类型**: `MethodDeclaration`

**所属类**: `ScriptManager`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

添加脚本对象

参数 `instance`: 脚本对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `instance` | `any` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 795 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L795)

```typescript
public add(instance: any): void {
    // 以脚本类名作为键进行注册
    const name = instance.constructor.name
    if (name !== '') this[name] = instance
    // 如果实现了update方法，则添加到父级更新器列表
    if (typeof instance.update === 'function') {
      this.parent.updaters?.push(instance)
    }
    this.instances.push(instance)
    // 触发添加脚本事件
    instance.onScriptAdd?.(this.parent)
  }
```

---



文档生成时间：2026/1/31 13:13:59
