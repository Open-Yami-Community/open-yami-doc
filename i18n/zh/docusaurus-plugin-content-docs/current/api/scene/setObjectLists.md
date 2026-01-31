---
sidebar_position: 1
title: setObjectLists 设置场景对象列表组
---

## setObjectLists

**类型**: `MethodDeclaration`

**所属类**: `SceneSpriteRenderer`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

设置场景对象列表组

参数 `objectLists`: 场景对象列表组

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `objectLists` | `Array&lt;Array&lt;SceneObject&gt;&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5558 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5558)

```typescript
public setObjectLists(...objectLists: Array<Array<SceneObject>>): void {
    this.objectLists = objectLists
  }
```

---



文档生成时间：2026/1/31 13:13:59
