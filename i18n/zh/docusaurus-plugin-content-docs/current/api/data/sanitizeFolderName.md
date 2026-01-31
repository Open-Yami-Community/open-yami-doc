---
sidebar_position: 1
title: sanitizeFolderName 规范化文件夹名称
---

## sanitizeFolderName

**类型**: `MethodDeclaration`

**定义位置**: [`data.ts`](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts)

### 描述

规范化文件夹名称

参数 `name`: 文件夹名称

返回值:过滤非法字符后的名称

### 参数

| 参数名 | 类型 | 描述 | 默认值 |
|:-------|:-----|:------|:-------|
| `name` | `string` | - | - |

### 返回值

类型: `void`

过滤非法字符后的名称

### 源代码

**位置**: [第 1059 行](https://github.com/Open-Yami-Community/open-yami-doc/blob/main/i18n/zh/docusaurus-plugin-content-docs/current/script/data.ts#L1059)

```typescript
public sanitizeFolderName(name: string) {
    // 移除Windows/macOS/Linux不允许的字符
    name = name.replace(/[\/:*?"<>|]/g, "")
    // 去掉开头和结尾的空格
    name = name.replace(/^\s+|\s+$/g, "")
    // Windows不能以"."结尾
    name = name.replace(/\.$/, "")
    // 避免Windows设备名（不区分大小写）
    const reservedNames = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i
    if (reservedNames.test(name)) {
      // 添加后缀以避免冲突
      name += "_safe"
    }
    // 避免空字符串
    return name || "default_folder"
  }
```

---



文档生成时间：2026/1/31 13:13:58
