---
sidebar_position: 1
title: createReverseMap 创建键值相反的图块组映射表
---

## createReverseMap

**类型**: `MethodDeclaration`

**所属类**: `SceneTilemap`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

创建键值相反的图块组映射表

参数 `tilesetMap`: \{ID:图块组\}映射表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `tilesetMap` | `HashMap&lt;string&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 2823 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L2823)

```typescript
private createReverseMap(tilesetMap: HashMap<string>): void {
    for (const [index, guid] of Object.entries(tilesetMap)) {
      this.reverseMap[guid!] = parseInt(index)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
