---
sidebar_position: 1
title: saveGlobalData 保存全局数据到文件
---

## saveGlobalData

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

保存全局数据到文件

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 916 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L916)

```typescript
public async saveGlobalData(): Promise<void> {
    const data = {
      language: Local.language,
      canvasWidth: Stage.width,
      canvasHeight: Stage.height,
      sceneScale: Scene.scale,
      uiScale: UI.scale,
      variables: Variable.saveData(1),
    }
    switch (Stats.shell) {
      case 'electron': {
        const fs = require('fs')
        const saveDir = Loader.routeSave('Save')
        const savePath = Loader.routeSave('Save/global.save')
        // 调试模式下输出格式化的JSON
        // 发布模式下输出压缩后的JSON
        const json = Stats.debug
        ? JSON.stringify(data, null, 2)
        : JSON.stringify(data)
        // 如果不存在存档文件夹，创建它
        if (!fs.existsSync(saveDir)) {
          fs.mkdirSync(saveDir, {recursive: true})
        }
        // 写入全局数据到缓存文件
        await Data.writeFile(savePath, json)
        break
      }
      case 'browser': {
        const key = 'global.save'
        await IDB.setItem(key, data)
        break
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
