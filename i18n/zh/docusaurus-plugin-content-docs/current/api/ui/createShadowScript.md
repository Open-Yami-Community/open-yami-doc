---
sidebar_position: 1
title: createShadowScript 创建影子脚本管理器
---

## createShadowScript

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

创建影子脚本管理器

### 返回值

类型: `ScriptManager`

### 源代码

**位置**: [第 4890 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L4890)

```typescript
private createShadowScript(): ScriptManager {
    const script = ScriptManager.create(this, [])
    script.add(new ButtonElement.BasicButtonScript())
    return script
  }
```

---



文档生成时间：2026/1/31 13:13:59
