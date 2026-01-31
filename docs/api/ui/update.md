---
sidebar_position: 1
title: update 更新已连接的元素
---

## update

**类型**: `MethodDeclaration`

**所属类**: `UIElementManager`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

更新已连接的元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 6219 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L6219)

```typescript
public update(): void {
    // 发送激活元素的自动执行事件
    this.autorun()
    // 先确定列表的长度
    // 因为在更新时可能加入新元素导致变长
    // 新加入的元素就留到下一帧进行更新
    const list = this.list
    const count = list.length
    const deltaTime = Time.rawDeltaTime
    for (let i = 0; i < count; i++) {
      const element = list[i]
      // 如果元素已连接，更新它的模块
      if (element.connected) {
        element.updaters.update(deltaTime)
      }
    }
    // 再次发送激活元素的自动执行事件
    while (this.activeCount !== 0) {
      this.autorun()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
