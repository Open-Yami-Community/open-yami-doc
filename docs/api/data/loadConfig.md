---
sidebar_position: 1
title: loadConfig 加载配置文件
---

## loadConfig

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

加载配置文件

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 1009 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L1009)

```typescript
public async loadConfig(): Promise<void> {
    this.config = await Loader.get({
      path: 'Data/config.json',
      type: 'json',
    })
  }
```

---



文档生成时间：2026/1/31 13:13:58
