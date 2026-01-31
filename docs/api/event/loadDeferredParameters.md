---
sidebar_position: 1
title: loadDeferredParameters 加载延迟参数到脚本对象中
---

## loadDeferredParameters

**类型**: `MethodDeclaration`

**所属类**: `ScriptManager`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

加载延迟参数到脚本对象中

### 返回值

类型: `void`

### 源代码

**位置**: [第 900 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L900)

```typescript
public static loadDeferredParameters(): void {
    for (let i = 0; i < ScriptManager.deferredCount; i++) {
      ScriptManager.deferredInstances[i][ScriptManager.deferredKeys[i]] = ScriptManager.deferredValues[i]!()
      ScriptManager.deferredInstances[i] = undefined
      ScriptManager.deferredValues[i] = undefined
    }
    ScriptManager.deferredCount = 0
    ScriptManager.deferredLoading = false
  }
```

---



文档生成时间：2026/1/31 13:13:59
