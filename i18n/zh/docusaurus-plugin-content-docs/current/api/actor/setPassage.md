---
sidebar_position: 1
title: setPassage 设置通行区域
---

## setPassage

**类型**: `MethodDeclaration`

**所属类**: `Actor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置通行区域

参数 `passage`: 通行区域

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `passage` | `keyof ActorPassageMap` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1031 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1031)

```typescript
public setPassage(passage: keyof ActorPassageMap): void {
    this.passage = Actor.passageMap[passage]
  }
```

---



文档生成时间：2026/1/31 13:13:58
