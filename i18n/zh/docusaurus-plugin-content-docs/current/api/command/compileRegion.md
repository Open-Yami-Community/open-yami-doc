---
sidebar_position: 1
title: compileRegion 编译区域对象
---

## compileRegion

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

编译区域对象

参数 `region`: 区域访问器

返回值:区域访问器函数

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `region` | `RegionGetter` | - | - |

### 返回值

类型: `() =&gt; SceneRegion \| undefined`

区域访问器函数

### 源代码

**位置**: [第 801 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L801)

```typescript
private compileRegion(region: RegionGetter): () => SceneRegion | undefined {
		switch (region.type) {
			case "trigger":
				return () => Command.filterValidObject(CurrentEvent.triggerRegion);
			case "by-id": {
				const { presetId } = region;
				return () => {
					return Scene.entity.get(presetId) as SceneRegion | undefined;
				};
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
