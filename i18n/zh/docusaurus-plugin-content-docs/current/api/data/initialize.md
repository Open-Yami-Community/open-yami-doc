---
sidebar_position: 1
title: initialize 初始化数据管理器
---

## initialize

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

初始化数据管理器

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 64 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L64)

```typescript
public async initialize(): Promise<void> {
    // 侦听窗口关闭前事件
    Game.on('quit', () => {
      this.saveGlobalData()
    })

    // 加载配置文件和存档路径
    await this.loadConfig()
    await Promise.all([
      this.loadTSConfig(),
      this.loadSaveDirPath(),
    ])

    // 加载数据文件
    await Promise.all([
      this.loadMeta(),
      this.loadFile('attribute'),
      this.loadFile('enumeration'),
      this.loadFile('localization'),
      this.loadFile('easings'),
      this.loadFile('teams'),
      this.loadFile('autotiles'),
      this.loadFile('variables'),
      this.loadFile('plugins'),
      this.loadFile('commands'),
    ])
    await Promise.all([
      this.loadScripts(),
      this.loadObjects(),
      this.loadGlobalData(),
    ])
    this.createAutotileMap()
    this.createEasingMap()
  }
```

---



文档生成时间：2026/1/31 13:13:58
