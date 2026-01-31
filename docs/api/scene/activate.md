---
sidebar_position: 1
title: activate 激活场景上下文
---

## activate

**类型**: `MethodDeclaration`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

激活场景上下文

参数 `pointer`: 场景指针(0或1)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `pointer` | `number` | - | - |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 404 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L404)

```typescript
public async activate(pointer: number): Promise<void> {
    // 推迟到栈尾执行
    await Promise.resolve()
    this.pointer = pointer
    const scene = this.get()
    if (this.binding !== scene) {
      this.bind(scene)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
