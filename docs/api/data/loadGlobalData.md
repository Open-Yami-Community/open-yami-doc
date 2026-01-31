---
sidebar_position: 1
title: loadGlobalData 从文件中加载全局数据
---

## loadGlobalData

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

从文件中加载全局数据

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 954 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L954)

```typescript
public async loadGlobalData(): Promise<void> {
    switch (Stats.shell) {
      case 'electron':
        try {
          // 读取数据文件
          const fsp = require('fs').promises
          const path = Loader.routeSave('Save/global.save')
          const json = await fsp.readFile(path)
          this.globalData = JSON.parse(json)
        } catch (error) {
          // 不存在全局存档
        }
        break
      case 'browser':
        this.globalData = await IDB.getItem('global.save')
        break
    }
    // 创建默认全局数据
    const defaultData: GlobalSaveData = {
      language: this.config.localization.default,
      canvasWidth: this.config.resolution.width,
      canvasHeight: this.config.resolution.height,
      sceneScale: this.config.resolution.sceneScale,
      uiScale: this.config.resolution.uiScale,
      variables: {},
    }
    // 如果存在全局数据，检查并修补缺失的属性
    // 否则使用默认全局数据
    if (this.globalData) {
      const globalData = this.globalData as any
      for (const key of Object.keys(defaultData) as Array<keyof GlobalSaveData>) {
        if (globalData[key] === undefined) {
          globalData[key] = defaultData[key]
        }
      }
      // 以调试模式运行时重置部分数据
      if (Stats.debug) {
        for (const key of [
          'language',
          'canvasWidth',
          'canvasHeight',
          'sceneScale',
          'uiScale'
        ] as Array<keyof GlobalSaveData>) {
          globalData[key] = defaultData[key]
        }
      }
    } else {
      this.globalData = defaultData
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
