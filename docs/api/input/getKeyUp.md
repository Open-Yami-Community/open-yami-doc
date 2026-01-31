---
sidebar_position: 1
title: getKeyUp 判断是否刚弹起键盘键
---

## getKeyUp

**类型**: `MethodDeclaration`

**定义位置**: [`input.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts)

### 描述

判断是否刚弹起键盘键

参数 `keyName`: 键名

返回值:是否刚弹起

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `keyName` | `KeyboardKeyName` | - | - |

### 返回值

类型: `boolean`

是否刚弹起

### 源代码

**位置**: [第 95 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/input.ts#L95)

```typescript
public getKeyUp(keyName: KeyboardKeyName): boolean {
    return this.keyupList.contains(keyName)
  }
```

---



文档生成时间：2026/1/31 13:13:59
