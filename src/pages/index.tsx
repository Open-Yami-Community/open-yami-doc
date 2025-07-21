import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CommunitySection from "@site/src/components/CommunitySection";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./index.module.css";

type PlatformItem = {
	name: string;
	icon: string;
};

const platforms: PlatformItem[] = [
	{
		name: "Windows",
		icon: "windows",
	},
	{
		name: "macOS",
		icon: "apple",
	},
	{
		name: "iOS",
		icon: "apple",
	},
	{
		name: "Android",
		icon: "android",
	},
	{
		name: "H5",
		icon: "html5",
	},
];

function HomepageHeader() {
	const logoUrl = useBaseUrl("/img/logo.png");
	return (
		<header className={clsx("hero", styles.heroBanner)}>
			<div className="container">
				<img
					src={logoUrl}
					alt="Yami Game Engine"
					width="150"
					height="150"
					className={styles.logoImage}
					style={{ marginBottom: "2rem" }}
				/>
				<Heading
					as="h1"
					className={styles.heroTitle}
				>
					Yami 游戏引擎
				</Heading>
				<p className={styles.heroSubtitle}>
					强大的多平台游戏开发工具，让创意无限可能
				</p>
				<div className={styles.buttons}>
					<Link
						className="button button--primary button--lg button--tech-primary"
						to="/docs/intro"
					>
						开始使用 Yami
					</Link>
					<Link
						className="button button--outline button--lg button--tech-secondary"
						to="/docs/basic-interfaces/home"
					>
						查看文档
					</Link>
				</div>
			</div>
		</header>
	);
}

function PlatformsSection() {
	return (
		<section className={styles.platformsSection}>
			<div className="container">
				<Heading
					as="h2"
					className="text--center tech-glow"
					style={{ marginBottom: "1rem", color: "var(--tech-accent)" }}
				>
					多平台支持
				</Heading>
				<p
					className="text--center"
					style={{ color: "var(--tech-text-secondary)" }}
				>
					一次开发，多平台部署，让您的游戏无处不在
				</p>

				<div className={styles.platformsContainer}>
					{platforms.map((platform, idx) => (
						<div
							key={idx}
							className={styles.platformCard}
						>
							<div className={styles.platformIconWrapper}>
								<i className={`fa-brands fa-${platform.icon}`}></i>
							</div>
							<span className={styles.platformName}>{platform.name}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default function Home(): ReactNode {
	return (
		<Layout
			title={`Yami 游戏引擎 - 多平台游戏开发工具`}
			description="Yami是一款强大的多平台游戏开发引擎，支持Windows、macOS、iOS、Android和H5平台，让您的创意无限可能。"
		>
			<HomepageHeader />
			<PlatformsSection />
			<main>
				<HomepageFeatures />
				<CommunitySection />
			</main>
		</Layout>
	);
}
