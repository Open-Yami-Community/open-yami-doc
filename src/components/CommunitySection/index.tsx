import React, { useEffect, useState } from "react";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type ContributorItem = {
	key?: number;
	name: string;
	role: string;
	avatar: string;
	github: string;
};

type GithubContributor = {
	login: string;
	avatar_url: string;
	html_url: string;
	contributions: number;
};

function Contributor({ key, name, role, avatar, github }: ContributorItem) {
	return (
		<div
			key={key}
			className={styles.contributorCard}
		>
			<Link
				to={github}
				className={styles.contributorLink}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={avatar}
					alt={name}
					className={styles.contributorAvatar}
				/>
				<div className={styles.contributorInfo}>
					<h3 className={styles.contributorName}>{name}</h3>
					<p className={styles.contributorRole}>{role}</p>
				</div>
			</Link>
		</div>
	);
}

export default function CommunitySection() {
	const [contributors, setContributors] = useState<ContributorItem[]>([]);

	useEffect(() => {
		// 获取GitHub贡献者数据
		async function fetchContributors() {
			try {
				const response = await fetch(
					"https://api.github.com/repos/Open-Yami-Community/yami-rpg-editor/contributors"
				);
				const data: GithubContributor[] = await response.json();

				// 转换数据格式
				const contributorsList = data.map(contributor => ({
					name: contributor.login,
					role: `贡献者 (${contributor.contributions} commits)`,
					avatar: contributor.avatar_url,
					github: contributor.html_url,
				}));

				setContributors(
					contributorsList.map(v =>
						v.github.endsWith("/yami-pro") || v.github.endsWith("/chunqian")
							? {
									...v,
									role: "引擎原版开发者",
							  }
							: v
					)
				);
			} catch (error) {
				console.error("获取贡献者数据失败:", error);
				// 加载失败时使用默认数据
				setContributors([
					{
						name: "亚米",
						role: "引擎原版开发者",
						avatar: "https://avatars.githubusercontent.com/u/115850867?v=4",
						github: "https://github.com/yami-pro",
					},
				]);
			}
		}

		fetchContributors();
	}, []);

	return (
		<section className={styles.communitySection}>
			<div
				className="container"
				style={{ maxWidth: "1200px", margin: "0 auto" }}
			>
				<Heading
					as="h2"
					className="text--center tech-glow"
					style={{
						marginBottom: "1rem",
						background:
							"linear-gradient(90deg, var(--ifm-color-primary-dark) 0%, var(--ifm-color-primary) 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						textShadow: "0 0 10px var(--tech-accent-glow)",
					}}
				>
					Yami 开源社区
				</Heading>
				<p
					className="text--center"
					style={{
						color: "var(--tech-text-secondary)",
						marginBottom: "1.5rem",
					}}
				>
					加入我们充满活力的开源社区，一起打造更强大的游戏引擎
				</p>
				<div
					className="text--center"
					style={{ marginBottom: "2rem" }}
				>
					<Link
						className="button button--primary button--lg button--tech-primary"
						to="https://github.com/Open-Yami-Community/yami-rpg-editor"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i
							className="fas fa-code-branch"
							style={{ marginRight: "10px" }}
						></i>
						参与贡献
					</Link>
				</div>

				<div className={styles.communityContent}>
					<div className={styles.communityInfo}>
						<div className={styles.communityCard}>
							<h3 className={styles.communityCardTitle}>
								<i
									className="fas fa-code-branch"
									style={{ marginRight: "10px" }}
								></i>
								参与贡献
							</h3>
							<p className={styles.communityCardText}>
								Yami是一个开源项目，我们欢迎各种形式的贡献，无论是代码、文档、测试还是创意想法。
							</p>
							<Link
								className="button button--tech-secondary button--sm"
								to="https://github.com/Open-Yami-Community/yami-rpg-editor"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i
									className="fab fa-github"
									style={{ marginRight: "8px" }}
								></i>
								GitHub 仓库
							</Link>
						</div>

						<div className={styles.communityCard}>
							<h3 className={styles.communityCardTitle}>
								<i
									className="fas fa-users"
									style={{ marginRight: "10px" }}
								></i>
								加入讨论
							</h3>
							<p className={styles.communityCardText}>
								在我们的官方群聊和聊天频道中与其他开发者交流，分享经验，解决问题。
							</p>
							<div className={styles.communityButtons}>
								<Link
									className="button button--tech-secondary button--sm"
									to="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Eyc0qdJDVWuTOtEN0rInh4zaWFnxUwHU&authKey=9jReUjSNuSijy%2FuprxllfRmKKNAcLIBKeslBBE7mUx%2Bdt%2Fy8XFucmg6GbOf0Gph9&noverify=0&group_code=3992050"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i
										className="fas fa-comments"
										style={{ marginRight: "8px" }}
									></i>
									官方群聊
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.contributorsContainer}>
						<h3 className={styles.contributorsTitle}>核心贡献者</h3>
						<div className={styles.contributorsGrid}>
							{contributors.map((contributor, idx) => (
								<Contributor
									key={idx}
									{...contributor}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
