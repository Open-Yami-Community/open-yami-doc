---
sidebar_position: 1
title: getGamepadButtonUp 判断是否刚弹起手柄键
---

## getGamepadButtonUp

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

判断是否刚弹起手柄键

参数 `button`: 键码

返回值:是否刚弹起

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `button` | `ControllerButtonCode` | - | - |

### 返回值

类型: `boolean`

是否刚弹起

### 源代码

**位置**: [第 149 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L149)

```typescript
public getGamepadButtonUp(button: ControllerButtonCode): boolean {
    return this.gamepadupList.contains(button)
  }
```

---



文档生成时间：2026/1/31 13:13:59
