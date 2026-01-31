---
sidebar_position: 1
title: call 调用脚本方法
---

## call

**类型**: `MethodDeclaration`

**所属类**: `ScriptManager`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

调用脚本方法

参数 `method`: 方法名称

参数 `args`: 传递参数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `method` | `string` | - | - |
| `args` | `Array&lt;any&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 828 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L828)

```typescript
public call(method: string, ...args: Array<any>): void {
    for (const instance of this.instances) {
      instance[method]?.(...args)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
