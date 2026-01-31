---
sidebar_position: 1
title: filterScripts 过滤重复脚本
---

## filterScripts

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

过滤重复脚本

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `scripts` | `Array&lt;ScriptData&gt;` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 350 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L350)

```typescript
public filterScripts(scripts: Array<ScriptData>): void {
    const flags: HashMap<true> = {}
    for (let i = scripts.length - 1; i >= 0; i--) {
      const script = scripts[i]
      if (!flags[script.id]) {
        flags[script.id] = true
      } else {
        scripts.splice(i, 1)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
