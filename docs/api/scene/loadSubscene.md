---
sidebar_position: 1
title: loadSubscene 加载子场景
---

## loadSubscene

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

加载子场景

参数 `sceneId`: 场景ID

参数 `offsetX`: 对象偏移X

参数 `offsetY`: 对象偏移Y

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `sceneId` | `string` | - | - |
| `offsetX` | `number` | - | n0 |
| `offsetY` | `number` | - | n0 |

### 返回值

类型: `Promise&lt;void&gt;`

### 源代码

**位置**: [第 1059 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1059)

```typescript
public async loadSubscene(sceneId: string, offsetX: number = 0, offsetY: number = 0): Promise<void> {
    // 推迟到栈尾执行
    await Promise.resolve()
    const scene = Data.getScene(sceneId)
    // 偏移场景对象
    if (offsetX !== 0 || offsetY !== 0) {
      const shift = (nodes: SceneObjectDataDirectory) => {
        for (const node of nodes) {
          switch (node.class) {
            case 'folder':
              shift(node.children)
              continue
            default:
              node.x += offsetX
              node.y += offsetY
              continue
          }
        }
      }
      shift(scene.objects)
    }
    // 如果不存在相同的子场景，添加到子场景列表
    if (!this.subscenes.find(scene => scene.id === sceneId)) {
      this.subscenes.push(scene)
    }
    // 创建场景对象并发送自动执行事件
    const instances = this.loadObjects(scene.objects)
    for (const instance of instances) {
      instance.autorun()
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
