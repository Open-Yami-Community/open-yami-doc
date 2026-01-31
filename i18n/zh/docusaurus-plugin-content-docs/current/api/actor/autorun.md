---
sidebar_position: 1
title: autorun 
---

## autorun

**类型**: `MethodDeclaration`

**所属类**: `State`

**定义位置**: [`actor.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts)

### 返回值

类型: `void`

### 源代码

**位置**: [第 4060 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/actor.ts#L4060)

```typescript
public autorun(): void {
		if (this.started === false) {
			this.started = true;
			this.emit("autorun");
		}
	}
```

---



文档生成时间：2026/1/31 13:13:58
