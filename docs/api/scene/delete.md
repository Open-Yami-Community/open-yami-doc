---
sidebar_position: 1
title: delete 删除当前场景
---

## delete

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

删除当前场景

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 439 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L439)

```typescript
public async delete(): Promise<void> {
    // 推迟到栈尾执行
    await Promise.resolve()
    const scene = this.get()
    if (scene !== null) {
      scene.destroy()
      this.bind(this.set(null))
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
