---
sidebar_position: 1
title: destroy 销毁视频元素
---

## destroy

**类型**: `MethodDeclaration`

**所属类**: `VideoElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

销毁视频元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 5561 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5561)

```typescript
public destroy(): void {
    if (!this.destroyed) {
      this.player.pause()
      this.texture?.destroy()
      // 如果当前状态不是已结束，发送模拟事件
      if (this.state !== 'ended') {
        this.player.dispatchEvent(new Event('ended'))
      }
      return super.destroy()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
