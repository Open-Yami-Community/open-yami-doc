---
sidebar_position: 1
title: getMouseButton 判断是否已经按下鼠标键
---

## getMouseButton

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

判断是否已经按下鼠标键

参数 `button`: 键码

返回值:是否已经按下

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `button` | `number` | - | - |

### 返回值

类型: `boolean`

是否已经按下

### 源代码

**位置**: [第 131 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L131)

```typescript
public getMouseButton(button: number): boolean {
    return this.buttons[button] === 1
  }
```

---



文档生成时间：2026/1/31 13:13:59
