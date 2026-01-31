---
sidebar_position: 1
title: loadTSConfig 加载TS配置文件
---

## loadTSConfig

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

加载TS配置文件

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 1019 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L1019)

```typescript
public async loadTSConfig(): Promise<void> {
    if (!this.config.deployed) {
      const tsconfig = await Loader.get({
        path: 'tsconfig.json',
        type: 'text',
      })
      const match = tsconfig.match(/"outDir"\s*:\s*"(.*?)"/)
      if (!match) {
        throw new Error('Unable to get "outDir" from "tsconfig.json".')
      }
      this.tsOutDir = match[1]
      if (!/\/$/.test(this.tsOutDir)) {
        this.tsOutDir += '/'
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
