---
sidebar_position: 1
title: loadPresets 加载预设元素
---

## loadPresets

**类型**: `MethodDeclaration`

**定义位置**: [`ui.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts)

### 描述

加载预设元素

### 返回值

类型: `void`

### 源代码

**位置**: [第 98 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/ui.ts#L98)

```typescript
private loadPresets(): void {
    const uiFiles = Object.values(Data.ui) as Array<UIFile>
    const presets = this.presets as HashMap<UIElementData | ReferenceElementData>
    // 加载元素对象目录
    const load = (nodes: Array<UIElementData>, ui: UIFile) => {
      for (const node of nodes) {
        node.ui = ui
        presets[node.presetId] = node
        Data.compileEvents(node, `${ui.path}\n@ ${node.name}.${node.presetId}`)
        Data.filterScripts(node.scripts)
        if (node.children.length !== 0) {
          load(node.children, ui)
        }
      }
    }
    // 加载所有元素的预设对象
    for (const ui of uiFiles) {
      load(ui.nodes, ui)
    }
    // 替换引用元素
    const replace = (nodes: Array<UIElementData | ReferenceElementData>) => {
      let i = nodes.length
      while (--i >= 0) {
        const node = nodes[i]
        // 替换引用元素
        if (node.class === 'reference') {
          const prefab = presets[node.prefabId]
          if (node.hidden ||!node.enabled|| !prefab || prefab.class === 'reference' || prefab.hidden) {
            nodes.splice(i, 1)
            continue
          }
          const copy: UIElementData = Object.create(prefab)
          copy.name = node.name
          copy.enabled = node.enabled
          copy.expanded = node.expanded
          copy.referenceId = node.presetId
          copy.events = Object.setPrototypeOf(node.events, prefab.events)
          copy.scripts = node.scripts
          Data.mergeScripts(node.scripts, prefab.scripts)
          // 替换引用元素的位置
          if (node.synchronous) {
            copy.transform = {...prefab.transform}
            copy.transform.x = node.transform.x
            copy.transform.y = node.transform.y
            copy.transform.x2 = node.transform.x2
            copy.transform.y2 = node.transform.y2
          } else {
            copy.transform = {...node.transform}
          }
          presets[node.presetId] = nodes[i] = copy
        } else if (node.children.length !== 0) {
          replace(node.children)
        }
      }
    }
    // 替换所有引用元素为预制件
    for (const ui of uiFiles) {
      replace(ui.nodes)
    }
  }
```

---



文档生成时间：2026/1/31 13:13:59
