---
sidebar_position: 1
title: mergeScripts 合并脚本列表
---

## mergeScripts

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

合并脚本列表

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `childScripts` | `Array&lt;ScriptData&gt;` | - | - |
| `parentScripts` | `Array&lt;ScriptData&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 363 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L363)

```typescript
public mergeScripts(childScripts: Array<ScriptData>, parentScripts: Array<ScriptData>): void {
    const flags: HashMap<true> = {}
    for (let i = childScripts.length - 1; i >= 0; i--) {
      const script = childScripts[i]
      if (!flags[script.id]) {
        flags[script.id] = true
      } else {
        childScripts.splice(i, 1)
      }
    }
    for (let i = parentScripts.length - 1; i >= 0; i--) {
      const script = parentScripts[i]
      if (!flags[script.id]) {
        flags[script.id] = true
        childScripts.unshift(script)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
