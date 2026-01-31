---
sidebar_position: 1
title: playAudio 播放音频
---

## playAudio

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

播放音频

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ type, audio, volume, location, \}` | `\{
		type\: AudioType \| "se\-attenuated";
		audio\: string;
		volume\: number;
		location\?\: PositionGetter;
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6117 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6117)

```typescript
protected playAudio({
		type,
		audio,
		volume,
		location,
	}: {
		type: AudioType | "se-attenuated";
		audio: string;
		volume: number;
		location?: PositionGetter;
	}): CommandFunction {
		switch (type) {
			case "se-attenuated": {
				const getLocation = Command.compilePosition(location!);
				return () => {
					const location = getLocation();
					if (location) {
						AudioManager.se.playAt(audio, location, volume);
					}
					return true;
				};
			}
			default:
				return () => {
					AudioManager[type].play(audio, volume);
					return true;
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
