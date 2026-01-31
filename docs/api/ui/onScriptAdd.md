---
sidebar_position: 1
title: onScriptAdd 脚本添加事件
---

## onScriptAdd

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

脚本添加事件

参数 `element`: 按钮元素

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `element` | `ButtonElement` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 4484 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4484)

```typescript
public onScriptAdd(element: ButtonElement): void {
      this.button = element
    }
```

---



文档生成时间：2026/1/31 13:13:59
