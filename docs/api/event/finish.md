---
sidebar_position: 1
title: finish 调用事件结束回调函数
---

## finish

**类型**: `MethodDeclaration`

**所属类**: `EventHandler`

**定义位置**: [`event.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts)

### 描述

调用事件结束回调函数

### 返回值

类型: `void`

### 源代码

**位置**: [第 552 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/event.ts#L552)

```typescript
public finish(): void {
    if (this.complete === false) {
      this.complete = true
      // 执行结束回调
      if (this.callbacks !== undefined) {
        for (const callback of this.callbacks) {
          callback(this)
        }
      }
      // 设置更新函数为：完成
      this.update = EventHandler.complete
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
