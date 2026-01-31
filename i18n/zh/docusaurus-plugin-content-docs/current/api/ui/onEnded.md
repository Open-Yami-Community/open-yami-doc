---
sidebar_position: 1
title: onEnded 设置视频播放结束回调
---

## onEnded

**类型**: `MethodDeclaration`

**所属类**: `VideoElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

设置视频播放结束回调

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `callback` | `CallbackFunction` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5555 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5555)

```typescript
public onEnded(callback: CallbackFunction): void {
    if (this.state === 'ended') return callback()
    this.player.on('ended', callback, {once: true})
  }
```

---



文档生成时间：2026/1/31 13:13:59
