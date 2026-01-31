---
sidebar_position: 1
title: inheritState 继承父级状态的数据
---

## inheritState

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

继承父级状态的数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `state` | `StateFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 527 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L527)

```typescript
private inheritState(state: StateFile): void {
    if (state.parent) {
      Data.mergeArrayByProperty(state.attributes, state.parent.attributes, 'key')
      Object.setPrototypeOf(state.events, state.parent.events)
      Data.mergeScripts(state.scripts, state.parent.scripts)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
