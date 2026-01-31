---
sidebar_position: 1
title: reset 重置
---

## reset

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

重置

### 返回值

类型: `void`

### 源代码

**位置**: [第 753 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L753)

```typescript
private reset(): void {
    this.buttons.fill(false)
    const states = this.states
    for (const key of Object.keys(states) as Array<ControllerButtonName>) {
      switch (typeof states[key]) {
        case 'boolean':
          (states[key] as boolean) = false
          continue
        case 'number':
          (states[key] as number) = -1
          continue
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
