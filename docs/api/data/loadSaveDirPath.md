---
sidebar_position: 1
title: loadSaveDirPath 加载存档目录路径(Node.js)
---

## loadSaveDirPath

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

加载存档目录路径(Node.js)

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 1039 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L1039)

```typescript
public async loadSaveDirPath(): Promise<void> {
    if (Stats.shell === 'electron') {
      const {location, subdir} = this.config.save
      if (location === 'local') {
        this.saveDir = __dirname
      } else {
        const dirname = await
        require('electron').ipcRenderer
        .invoke('get-dir-path', location)
        const folder = this.sanitizeFolderName(subdir)
        this.saveDir = require('path').resolve(dirname, folder)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
