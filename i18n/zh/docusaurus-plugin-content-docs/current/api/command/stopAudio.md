---
sidebar_position: 1
title: stopAudio 停止播放音频
---

## stopAudio

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

停止播放音频

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ type \}` | `\{ type\: AudioType \| "all" \}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6148 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6148)

```typescript
protected stopAudio({ type }: { type: AudioType | "all" }): CommandFunction {
		switch (type) {
			case "all":
				return () => {
					AudioManager.bgm.stop();
					AudioManager.bgs.stop();
					AudioManager.cv.stop();
					AudioManager.se.stop();
					return true;
				};
			default:
				return () => {
					AudioManager[type].stop();
					return true;
				};
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
