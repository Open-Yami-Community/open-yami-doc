---
sidebar_position: 1
title: setParentState 设置父级状态的引用
---

## setParentState

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

设置父级状态的引用

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `state` | `StateFile` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 517 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L517)

```typescript
private setParentState(state: StateFile): void {
    if (state.inherit !== '' && state.inherit !== state.id) {
      const parent = Data.states[state.inherit]
      if (parent !== undefined) {
        state.parent = parent
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
