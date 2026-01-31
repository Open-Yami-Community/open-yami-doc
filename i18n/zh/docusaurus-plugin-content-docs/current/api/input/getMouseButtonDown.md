---
sidebar_position: 1
title: getMouseButtonDown 判断是否刚按下鼠标键
---

## getMouseButtonDown

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

判断是否刚按下鼠标键

参数 `button`: 键码

返回值:是否刚按下

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `button` | `number` | - | - |

### 返回值

类型: `boolean`

是否刚按下

### 源代码

**位置**: [第 113 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L113)

```typescript
public getMouseButtonDown(button: number): boolean {
    return this.mousedownList.contains(button)
  }
```

---



文档生成时间：2026/1/31 13:13:59
