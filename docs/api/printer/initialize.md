---
sidebar_position: 1
title: initialize 初始化打印机相关数据
---

## initialize

**类型**: `MethodDeclaration`

**所属类**: `Printer`

**定义位置**: [`printer.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts)

### 描述

初始化打印机相关数据

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 1152 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/printer.ts#L1152)

```typescript
public static async initialize(): Promise<void> {
    // 设置字符宽度数组
    this.charWidths = new Float64Array(
      GL.arrays[1].uint32.buffer, 0,
      GL.arrays[1].uint32.length / 2,
    )

    // 创建打印机指令列表
    this.commands = new Array(this.commandMaximum)

    // 加载默认设置
    await this.loadDefault()
  }
```

---



文档生成时间：2026/1/31 13:13:59
