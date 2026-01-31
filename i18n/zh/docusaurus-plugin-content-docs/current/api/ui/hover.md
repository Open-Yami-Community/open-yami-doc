---
sidebar_position: 1
title: hover 进入鼠标悬停状态
---

## hover

**类型**: `MethodDeclaration`

**所属类**: `ButtonElement`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

进入鼠标悬停状态

参数 `se`: 是否播放选中音效

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `se` | `boolean` | - | false |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5028 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L5028)

```typescript
public hover(se: boolean = false): void {
    if (this.state !== 'hover') {
      if (!this.selected) {
        this.selected = true
        this.emit('select')
      }
      this.state = 'hover'
      this.updateDisplayMode(se)
      if (!(Input.event instanceof ScriptMouseEvent) &&
        this.parent instanceof WindowElement) {
        this.parent.scrollToChild(this)
      }
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
