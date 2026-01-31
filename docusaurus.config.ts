import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	stylesheets: [
		{
			href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
			type: "text/css",
			integrity:
				"sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==",
			crossorigin: "anonymous",
			referrerpolicy: "no-referrer",
		},
	],
	title: "Yami RPG Editor Docs",
	tagline: "Open Yami 开源社区维护",
	favicon: "img/favicon.ico",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://open-yami-community.github.io/",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/open-yami-doc/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "open-yami-community", // Usually your GitHub org/user name.
	projectName: "open-yami-doc", // Usually your repo name.

	onBrokenLinks: "throw",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "zh",
		locales: ["en", "zh"],
	},
	markdown: {
		format: "detect",
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/Open-Yami-Community/open-yami-doc/tree/main/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/Open-Yami-Community/open-yami-doc/tree/main/",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/logo.png",
		colorMode: {
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: "Yami RPG Editor Docs",
			logo: {
				alt: "Yami RPG Editor Docs",
				src: "img/logo.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Tutorial",
				},
				{
					href: "https://github.com/Open-Yami-Community/open-yami-doc",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "文档",
					items: [
						{
							label: "快速入门",
							to: "/docs/intro",
						},
						{
							label: "基础界面",
							to: "/docs/basic-interfaces/home",
						},
						{
							label: "事件命令",
							to: "/docs/event-commands/command-list",
						},
						{
							label: "快捷键",
							to: "/docs/hotkeys/global",
						},
					],
				},
				{
					title: "社区",
					items: [
						{
							label: "QQ群：3992050",
							href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Eyc0qdJDVWuTOtEN0rInh4zaWFnxUwHU&authKey=9jReUjSNuSijy%2FuprxllfRmKKNAcLIBKeslBBE7mUx%2Bdt%2Fy8XFucmg6GbOf0Gph9&noverify=0&group_code=3992050",
							className: "footer-social-link footer-qq-link",
						},
						{
							label: "GitHub",
							href: "https://github.com/Open-Yami-Community",
							className: "footer-social-link footer-github-link",
						},
					],
				},
				{
					title: "更多",
					items: [
						{
							label: "问题反馈",
							href: "https://github.com/Open-Yami-Community/yami-rpg-editor/issues",
						},
						{
							label: "更新日志",
							href: "https://github.com/Open-Yami-Community/yami-rpg-editor/commits/main/",
						},
					],
				},
			],
			copyright: `<div class="footer-copyright">Copyright © 2023-${new Date().getFullYear()} <span class="footer-tech-accent">Yami 开源社区</span> & Contributors.</div>`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
	themes: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				indexDocs: true,
				indexBlog: true,
				indexPages: true,
				language: "zh",
			},
		],
	],
};

export default config;
