---
sidebar_position: 1
title: registerExitEvent 注册退出事件
---

## registerExitEvent

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

注册退出事件

### 返回值

类型: `void`

### 源代码

**位置**: [第 226 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L226)

```typescript
public registerExitEvent(): void {
    switch (Stats.shell) {
      case 'electron': {
        const {ipcRenderer} = require('electron')
        ipcRenderer.on('before-close-window', () => {
          Game.emit('quit')
          ipcRenderer.send('force-close-window')
        })
        break
      }
      case 'browser':
        // 刷新页面也会触发
        window.on('beforeunload', event => {
          Game.emit('quit')
        })
        break
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
