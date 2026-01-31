---
sidebar_position: 1
title: loadGameData 从文件中加载游戏数据
---

## loadGameData

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

从文件中加载游戏数据

参数 `index`: 存档编号

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `index` | `number` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 785 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L785)

```typescript
public async loadGameData(index: number): Promise<void> {
    const suffix = index.toString().padStart(2, '0')
    let data
    switch (Stats.shell) {
      case 'electron':
        // 推迟到栈尾执行
        await Promise.resolve()
        try {
          // 同步读取存档数据文件
          const path = Loader.routeSave(`Save/save${suffix}.save`)
          const json = require('fs').readFileSync(path)
          data = JSON.parse(json)
        } catch (error) {
          console.warn(error)
          return
        }
        break
      case 'browser': {
        const key = `save${suffix}.save`
        data = await IDB.getItem(key)
        break
      }
    }
    Game.reset()
    Time.playTime = data.playTime
    ActorManager.loadData(data.actors)
    Party.loadData(data.party)
    Team.loadData(data.team)
    Scene.loadData(data.scene)
    Camera.loadData(data.camera)
    Variable.loadData(0, data.variables)
    SelfVariable.loadData(data.selfVariables)
    EventManager.emit('loadsave')
  }
```

---



文档生成时间：2026/1/31 13:13:58
