---
sidebar_position: 1
title: changeEvent 输入框改变事件
---

## changeEvent

**类型**: `MethodDeclaration`

**所属类**: `TextBoxElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

输入框改变事件

### 返回值

类型: `void`

### 源代码

**位置**: [第 3064 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L3064)

```typescript
private changeEvent(): void {
    if (this.type === 'number') {
      // 如果是数值输入框，检查并重构数值
      const string = this.readInputNumber().toString()
      if (this.input.value !== string) {
        this.input.value = string
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
