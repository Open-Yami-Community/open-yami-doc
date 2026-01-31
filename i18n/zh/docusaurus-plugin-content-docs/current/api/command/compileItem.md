---
sidebar_position: 1
title: compileItem 编译物品对象
---

## compileItem

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译物品对象

参数 `item`: 物品访问器

返回值:物品访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `item` | `ItemGetter` | - | - |

### 返回值

类型: `() =&gt; Item \| undefined`

物品访问器函数

### 源代码

**位置**: [第 617 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L617)

```typescript
public compileItem(item: ItemGetter): () => Item | undefined {
    switch (item.type) {
      case 'trigger':
        return () => CurrentEvent.triggerItem
      case 'latest':
        return () => Item.latest
      case 'by-key': {
        const getActor = Command.compileActor(item.actor)
        const getShortcutKey = Command.compileEnumValue(item.key)
        return () => getActor()?.shortcut.getItem(getShortcutKey())
      }
      case 'by-id': {
        const getActor = Command.compileActor(item.actor)
        return () => {
          const asset = getActor()?.inventory.get(item.itemId)
          return asset instanceof Item ? asset : undefined
        }
      }
      case 'variable':
        return Command.compileVariable(item.variable, Attribute.ITEM_GET)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:58
