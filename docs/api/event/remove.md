---
sidebar_position: 1
title: remove 移除脚本对象(未使用)
---

## remove

**类型**: `MethodDeclaration`

**所属类**: `ScriptManager`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

移除脚本对象(未使用)

参数 `instance`: 脚本对象

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `instance` | `any` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 812 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L812)

```typescript
public remove(instance: any): void {
    const name = instance.constructor.name
    if (this[name] === instance) delete this[name]
    if (typeof instance.update === 'function') {
      this.parent.updaters?.remove(instance)
    }
    this.instances.remove(instance)
    // 触发移除脚本事件
    instance.onScriptRemove?.(this.parent)
  }
```

---



文档生成时间：2026/1/31 13:13:59
