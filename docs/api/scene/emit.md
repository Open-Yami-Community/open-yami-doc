---
sidebar_position: 1
title: emit 调用场景粒子发射器事件和脚本
---

## emit

**类型**: `MethodDeclaration`

**所属类**: `SceneParticleEmitter`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

调用场景粒子发射器事件和脚本

参数 `type`: 场景粒子发射器事件类型

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `type` | `string` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 5471 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L5471)

```typescript
public emit(type: string): void {
    this.callEvent(type)
    this.script.emit(type, this)
  }
```

---



文档生成时间：2026/1/31 13:13:59
