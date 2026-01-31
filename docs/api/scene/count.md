---
sidebar_position: 1
title: count 查找指定队伍的角色数量
---

## count

**类型**: `MethodDeclaration`

**所属类**: `SceneActorManager`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

查找指定队伍的角色数量

参数 `teamId`: 队伍ID

返回值:角色数量

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `teamId` | `string` | - | - |

### 返回值

类型: `number`

角色数量

### 源代码

**位置**: [第 3685 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L3685)

```typescript
public count(teamId: string): number {
    let count = 0
    const {list} = this
    const {length} = list
    for (let i = 0; i < length; i++) {
      if (list[i].teamId === teamId) {
        count++
      }
    }
    return count
  }
```

---



文档生成时间：2026/1/31 13:13:59
