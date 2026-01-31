---
sidebar_position: 1
title: getScene 获取场景数据
---

## getScene

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

获取场景数据

参数 `id`: 场景文件ID

返回值:场景数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `id` | `string` | - | - |

### 返回值

类型: `SceneFile`

场景数据

### 源代码

**位置**: [第 659 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L659)

```typescript
public getScene(id: string): SceneFile {
    const scene = this.scenes[id]
    if (scene) return scene
    throw new URIError(`Scene #${id} is missing.`)
  }
```

---



文档生成时间：2026/1/31 13:13:58
