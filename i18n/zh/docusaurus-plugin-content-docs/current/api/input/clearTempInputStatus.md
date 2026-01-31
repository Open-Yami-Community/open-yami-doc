---
sidebar_position: 1
title: clearTempInputStatus 清除临时输入状态
---

## clearTempInputStatus

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

清除临时输入状态

### 返回值

类型: `void`

### 源代码

**位置**: [第 340 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L340)

```typescript
public clearTempInputStatus() {
    Input.keydownList.clear()
    Input.keyupList.clear()
    Input.mousedownList.clear()
    Input.mouseupList.clear()
    Input.gamepaddownList.clear()
    Input.gamepadupList.clear()
  }
```

---



文档生成时间：2026/1/31 13:13:59
