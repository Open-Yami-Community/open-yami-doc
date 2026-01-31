---
sidebar_position: 1
title: break 跳出循环
---

## break

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

跳出循环

### 返回值

类型: `CommandFunction \| null`

### 源代码

**位置**: [第 3426 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L3426)

```typescript
protected break(): CommandFunction | null {
    const {stack} = this
    let i = stack.length
    while (--i >= 0) {
      const context = stack[i]
      if (context.loop) {
        const {foreach} = context
        const {commands, index} = stack[i - 1]
        const jump = Command.goto(commands, index + 1)
        // 如果跳出的是遍历循环，重置相关上下文
        if (foreach) {
          return () => {
            foreach.reset()
            return jump()
          }
        }
        return jump
      }
    }
    return null
  }
```

---



文档生成时间：2026/1/31 13:13:58
