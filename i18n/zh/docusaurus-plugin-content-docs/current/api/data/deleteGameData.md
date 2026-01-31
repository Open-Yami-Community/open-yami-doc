---
sidebar_position: 1
title: deleteGameData 删除游戏数据存档文件
---

## deleteGameData

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

删除游戏数据存档文件

参数 `index`: 存档编号

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `index` | `number` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 887 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L887)

```typescript
public async deleteGameData(index: number): Promise<void> {
    const suffix = index.toString().padStart(2, '0')
    switch (Stats.shell) {
      case 'electron': {
        const metaPath = Loader.routeSave(`Save/save${suffix}.meta`)
        const dataPath = Loader.routeSave(`Save/save${suffix}.save`)
        const fsp = require('fs').promises
        await Promise.all([
          // 异步删除元数据和存档数据
          fsp.unlink(metaPath).catch((error: Error) => {console.warn(error)}),
          fsp.unlink(dataPath).catch((error: Error) => {console.warn(error)}),
        ])
        break
      }
      case 'browser': {
        const metaKey = `save${suffix}.meta`
        const dataKey = `save${suffix}.save`
        await Promise.all([
          IDB.removeItem(metaKey),
          IDB.removeItem(dataKey),
        ])
        break
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
