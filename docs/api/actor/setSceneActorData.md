---
sidebar_position: 1
title: setSceneActorData 设置场景角色数据
---

## setSceneActorData

**类型**: `MethodDeclaration`

**所属类**: `GlobalActor`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 描述

设置场景角色数据

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `preset` | `SceneActorData \| null` | - | - |

### 返回值

类型: `void`

### 源代码

**位置**: [第 1452 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L1452)

```typescript
public setSceneActorData(preset: SceneActorData | null): void {
		const presetId = preset?.presetId ?? "";
		if (this.presetId !== presetId) {
			if (preset) {
				this.name = preset.name;
				this.presetId = preset.presetId;
				this.selfVarId = preset.presetId;
				this.setEventMap(preset.data.events);
			} else {
				this.name = "";
				this.presetId = "";
				this.selfVarId = "";
				this.setEventMap(this.data.events);
			}
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
