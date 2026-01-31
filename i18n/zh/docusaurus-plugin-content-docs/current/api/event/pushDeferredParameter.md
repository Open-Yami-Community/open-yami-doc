---
sidebar_position: 1
title: pushDeferredParameter 放入延迟获取的脚本参数
---

## pushDeferredParameter

**类型**: `MethodDeclaration`

**所属类**: `ScriptManager`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

放入延迟获取的脚本参数

等待场景对象和UI元素创建完毕后再获取

参数 `instance`: 脚本对象

参数 `key`: 参数的键

参数 `value`: 返回值函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `instance` | `object` | - | - |
| `key` | `string` | - | - |
| `value` | `Function` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 892 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L892)

```typescript
private static pushDeferredParameter(instance: object, key: string, value: Function): void {
    ScriptManager.deferredInstances[ScriptManager.deferredCount] = instance
    ScriptManager.deferredKeys[ScriptManager.deferredCount] = key
    ScriptManager.deferredValues[ScriptManager.deferredCount] = value
    ScriptManager.deferredCount++
  }
```

---



文档生成时间：2026/1/31 13:13:59
