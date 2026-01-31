---
sidebar_position: 1
title: saveAudio 保存音频
---

## saveAudio

**类型**: `MethodDeclaration`

**所属类**: `CommandFunctionList`

**定义位置**: [`command.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts)

### 描述

保存音频

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `\{ type, \}` | `\{
		type\: "bgm" \| "bgs" \| "cv";
	\}` | - | - |

### 返回值

类型: `CommandFunction`

### 源代码

**位置**: [第 6256 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/command.ts#L6256)

```typescript
protected saveAudio({
		type,
	}: {
		type: "bgm" | "bgs" | "cv";
	}): CommandFunction {
		return () => {
			AudioManager[type].save();
			return true;
		};
	}
```

---



文档生成时间：2026/1/31 13:13:58
