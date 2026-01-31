---
sidebar_position: 1
title: testConditions 测试场景对象初始化条件
---

## testConditions

**类型**: `MethodDeclaration`

**所属类**: `SceneContext`

**定义位置**: [`scene.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts)

### 描述

测试场景对象初始化条件

参数 `node`: 场景对象数据

返回值:是否通过了条件检测

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `node` | `SceneObjectData` | - | - |

### 返回值

类型: `boolean`

是否通过了条件检测

### 源代码

**位置**: [第 1646 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/scene.ts#L1646)

```typescript
private static testConditions(node: SceneObjectData): boolean {
    // 如果场景对象未启用，则不通过
    if (node.enabled === false) return false
    for (const condition of node.conditions) {
      const type = condition.type
      const tester = SceneContext.objectCondTesters[condition.operation]
      const getter = SceneContext.objectCondVarGetters[type]
      const value = type[0] === 'g'
      // @ts-ignore
      ? getter(Variable.map, condition.key)
      : getter(SelfVariable.map, node.presetId)
      // 如果有一个条件不满足，则不通过
      if (tester(value, condition.value) === false) {
        return false
      }
    }
    return true
  }
```

---



文档生成时间：2026/1/31 13:13:59
