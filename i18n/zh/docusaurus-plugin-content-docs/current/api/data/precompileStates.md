---
sidebar_position: 1
title: precompileStates 预编译状态数据
---

## precompileStates

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

预编译状态数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 507 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L507)

```typescript
private precompileStates(): void {
    const states = Object.values(this.states) as Array<StateFile>
    for (const state of states) {
      this.compileEvents(state, state.path)
      this.setParentState(state)
    }
    this.inheritForEach(states, this.inheritState)
  }
```

---



文档生成时间：2026/1/31 13:13:58
