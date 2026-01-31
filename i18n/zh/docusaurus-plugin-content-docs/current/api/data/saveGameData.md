---
sidebar_position: 1
title: saveGameData 保存游戏数据到文件
---

## saveGameData

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

保存游戏数据到文件

参数 `index`: 存档编号

参数 `meta`: 存档元数据(时间、地点、截图等附加数据)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `index` | `number` | - | - |
| `meta` | `AttributeMap` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 732 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L732)

```typescript
public async saveGameData(index: number, meta: AttributeMap): Promise<void> {
    const suffix = index.toString().padStart(2, '0')
    const data = {
      playTime: Time.playTime,
      actors: ActorManager.saveData(),
      party: Party.saveData(),
      team: Team.saveData(),
      scene: Scene.saveData(),
      camera: Camera.saveData(),
      variables: Variable.saveData(0),
      selfVariables: SelfVariable.saveData(),
    }
    switch (Stats.shell) {
      case 'electron': {
        const saveDir = Loader.routeSave('Save')
        const metaPath = Loader.routeSave(`Save/save${suffix}.meta`)
        const dataPath = Loader.routeSave(`Save/save${suffix}.save`)
        const metaText = Stats.debug
        ? JSON.stringify(meta, null, 2)
        : JSON.stringify(meta)
        const dataText = Stats.debug
        ? JSON.stringify(data, null, 2)
        : JSON.stringify(data)
        const fsp = require('fs').promises
        // 如果不存在存档文件夹，创建它
        try {
          await fsp.stat(saveDir)
        } catch (error) {
          await fsp.mkdir(saveDir, {recursive: true})
        }
        // 异步写入元数据和存档数据
        await Promise.all([
          Data.writeFile(metaPath, metaText).catch((error: Error) => {console.warn(error)}),
          Data.writeFile(dataPath, dataText).catch((error: Error) => {console.warn(error)}),
        ])
        break
      }
      case 'browser': {
        const metaKey = `save${suffix}.meta`
        const dataKey = `save${suffix}.save`
        await Promise.all([
          IDB.setItem(metaKey, meta),
          IDB.setItem(dataKey, data),
        ])
        break
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
