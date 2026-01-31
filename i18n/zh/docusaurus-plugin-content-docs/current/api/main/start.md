---
sidebar_position: 1
title: start 开始游戏
---

## start

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

开始游戏

### 返回值

类型: `void`

### 源代码

**位置**: [第 162 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L162)

```typescript
private start(): void {
    Command.custom.emit('autorun')
    EventManager.emit('startup')
    EventManager.emit('autorun')
  }
```

---



文档生成时间：2026/1/31 13:13:59
