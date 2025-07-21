import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	icon: string;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: "专为ARPG设计",
		icon: "code",
		description: (
			<>
				提供完整的ARPG游戏开发工具链，包含场景编辑、角色动画、技能系统、AI行为树等专业功能，让开发者专注于游戏创意
			</>
		),
	},
	{
		title: "高性能引擎",
		icon: "bolt",
		description: (
			<>
				采用先进的渲染技术和优化算法，同屏实体可超过10000个保持流畅，满足大型游戏场景需求
			</>
		),
	},
	{
		title: "TypeScript支持",
		icon: "code-branch",
		description: (
			<>
				底层使用TypeScript开发，提供完整类型定义，代码提示和错误检查，提高开发效率和代码质量
			</>
		),
	},
	{
		title: "可视化编辑器",
		icon: "eye",
		description: (
			<>
				直观的拖拽式界面设计，所见即所得的场景编辑，无需深厚编程基础也能快速上手
			</>
		),
	},
	{
		title: "丰富的资源库",
		icon: "cubes",
		description: (
			<>
				内置大量游戏素材和模板，包括角色、场景、特效、音效等，加速游戏开发进程
			</>
		),
	},
	{
		title: "活跃的社区",
		icon: "users",
		description: (
			<>
				开源社区持续维护，定期更新功能和修复问题，提供技术支持和交流平台
			</>
		),
	},
];

function Feature({ title, icon, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className={styles.featureCard}>
				<div className={styles.featureIcon}>
					<i className={`fas fa-${icon}`}></i>
				</div>
				<div className={styles.featureContent}>
					<Heading as="h3" className={styles.featureTitle}>
						{title}
					</Heading>
					<p className={styles.featureDescription}>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<Heading
					as="h2"
					className="text--center tech-glow"
					style={{
						marginBottom: "2rem",
						background: "linear-gradient(90deg, var(--ifm-color-primary-dark) 0%, var(--ifm-color-primary) 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						textShadow: "0 0 10px var(--tech-accent-glow)"
					}}
				>
					强大功能，尽在掌握
				</Heading>
				<div className="row" style={{ rowGap: '2rem' }}>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
