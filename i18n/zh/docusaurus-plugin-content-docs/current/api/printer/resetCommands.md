---
sidebar_position: 1
title: resetCommands 重置打印机指令
---

## resetCommands

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

重置打印机指令

### 返回值

类型: `void`

### 源代码

**位置**: [第 1282 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1282)

```typescript
private static resetCommands(): void {
    const commands = this.commands
    const count = this.commandCount
    for (let i = 0; i < count; i++) {
      const command = commands[i]
      command.string = ''
      command.image = null
      command.imageWidth = 0
      command.imageHeight = 0
      command.imageSpacing = 0
      command.horizontalWidth = 0
    }
    this.commandCount = 0
  }
```

---



文档生成时间：2026/1/31 13:13:59
