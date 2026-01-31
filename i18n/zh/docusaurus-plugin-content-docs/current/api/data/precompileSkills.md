---
sidebar_position: 1
title: precompileSkills 预编译技能数据
---

## precompileSkills

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

预编译技能数据

### 返回值

类型: `void`

### 源代码

**位置**: [第 383 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L383)

```typescript
private precompileSkills(): void {
    const skills = Object.values(this.skills) as Array<SkillFile>
    for (const skill of skills) {
      this.compileEvents(skill, skill.path)
      this.setParentSkill(skill)
    }
    this.inheritForEach(skills, this.inheritSkill)
  }
```

---



文档生成时间：2026/1/31 13:13:58
