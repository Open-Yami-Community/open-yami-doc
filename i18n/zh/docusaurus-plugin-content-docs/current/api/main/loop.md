---
sidebar_position: 1
title: loop 游戏循环
---

## loop

**类型**: `MethodDeclaration`

**定义位置**: [`main.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts)

### 描述

游戏循环

参数 `timestamp`: 增量时间(毫秒)

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `timestamp` | `number` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 102 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/main.ts#L102)

```typescript
public loop(timestamp: number): void {
    // 请求下一帧
    requestAnimationFrame(Game.loop)

    // 更新时间
    Time.update(timestamp)

    // 更新数据
    Game.update()

    // 渲染图形
    Game.render()

    // 清除数据
    Game.clear()
  }
```

---



文档生成时间：2026/1/31 13:13:59
