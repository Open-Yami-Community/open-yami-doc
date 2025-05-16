import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Designed for ARPG",
		Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description: <>专为ARPG设计的编辑器</>,
	},
	{
		title: "High performance",
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: <>同屏实体可超过1w以上保持不卡</>,
	},
	{
		title: "Using TypeScript",
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: <>游戏使用TypeScript作为底层，维护性高</>,
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg
					className={styles.featureSvg}
					role="img"
				/>
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature
							key={idx}
							{...props}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
