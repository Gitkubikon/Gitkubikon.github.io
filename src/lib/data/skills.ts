import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Frontend Engineering', slug: 'frontend' }),
	defineSkillCategory({ name: 'Backend & APIs', slug: 'backend' }),
	defineSkillCategory({ name: 'DevOps & Reliability', slug: 'devops' }),
	defineSkillCategory({ name: 'Flight & Operations', slug: 'operations' }),
	defineSkillCategory({ name: 'Connected Systems', slug: 'integrations' }),
	defineSkillCategory({ name: 'Autonomy & AI', slug: 'ai' }),
	defineSkillCategory({ name: 'Product & UX', slug: 'product' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'ts',
		color: '#3178c6',
		description:
			'TypeScript everywhere — from SvelteKit frontends to Bun/Fastify backends, voice pipeline orchestration, and React Native prototypes. Strict types, no shortcuts.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'svelte',
		color: '#ff3e00',
		description:
			'Built the HIVE drone dashboard, AICOYO flow builder, and GRIT race control with SvelteKit. My go-to for anything with a UI.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'react-native',
		color: '#61dafb',
		description:
			'Companion apps and mobile interfaces with React Native and QML for operator stations and embedded screens.',
		logo: Assets.ReactNative,
		name: 'React Native & QML',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'python',
		color: '#3776ab',
		description:
			'FastAPI microservices, automation scripts, data processing, and CLI tooling. Used heavily at #mitdenkt and NNFlow.',
		logo: Assets.Python,
		name: 'Python',
		category: 'backend'
	}),
	defineSkill({
		slug: 'bun-node',
		color: '#43853d',
		description:
			'Bun for fast prototyping and production services, Node for long-running infra. Payment bridges, AI routing, WebSocket servers — all running on these.',
		logo: Assets.Runtime,
		name: 'Bun & Node Runtime',
		category: 'backend'
	}),
	defineSkill({
		slug: 'fastify',
		color: '#ffcc00',
		description:
			'Fastify powers all my APIs — auth layers, payment hooks, voice pipeline endpoints. Fast, typed, structured.',
		logo: Assets.Fastify,
		name: 'Fastify APIs',
		category: 'backend'
	}),
	defineSkill({
		slug: 'data-stores',
		color: '#4169e1',
		description:
			'PostgreSQL + pgvector for vector memory, Redis for caching and pub/sub, Drizzle ORM for type-safe queries. Runs AICOYO, #mitdenkt, and GRIT.',
		logo: Assets.DataStores,
		name: 'Postgres, Redis & Drizzle',
		category: 'backend'
	}),
	defineSkill({
		slug: 'docker',
		color: '#0db7ed',
		description:
			'Everything containerised. AICOYO, #mitdenkt boxes, LiveKit workers — reproducible builds, predictable deploys.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: '#326ce5',
		description:
			'K8s on Hetzner for all production workloads. Clusters, ingress, secrets, self-healing infra.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes & Hetzner',
		category: 'devops'
	}),
	defineSkill({
		slug: 'ansible',
		color: '#f0642c',
		description:
			'Ansible playbooks for standardising everything from telephony boxes to bare-metal servers and on-track workstations.',
		logo: Assets.Ansible,
		name: 'Ansible Automation',
		category: 'devops'
	}),
	defineSkill({
		slug: 'ci-cd',
		color: '#ffdd00',
		description:
			'GitHub Actions for lint, test, build, deploy. Small teams ship fast when the pipeline handles the rest.',
		logo: Assets.CiCd,
		name: 'CI/CD Automation',
		category: 'devops'
	}),
	defineSkill({
		slug: 'linux',
		color: '#facc15',
		description:
			'I live in the shell. Arch/CachyOS daily driver, fish scripts, systemd services, edge hardware maintenance. It\'s a hobby as much as a skill.',
		logo: Assets.Linux,
		name: 'Linux Systems & Shell',
		category: 'devops'
	}),
	defineSkill({
		slug: 'telephony',
		color: '#1f6feb',
		description:
			'SIP telephony for AICOYO voice agents, ZVT POS terminal integration for #mitdenkt. Real hardware, real protocols.',
		logo: Assets.Telephony,
		name: 'Telephony & POS Integrations',
		category: 'integrations'
	}),
	defineSkill({
		slug: 'oauth',
		color: '#f0b429',
		description:
			'OAuth2/OIDC with Logto for SSO across multi-tenant platforms. RBAC, tenant provisioning, audit trails.',
		logo: Assets.OAuth,
		name: 'OAuth2, OIDC & Logto',
		category: 'integrations'
	}),
	defineSkill({
		slug: 'livekit',
		color: '#7c3aed',
		description:
			'LiveKit for WebRTC voice/video and AI agent orchestration. Powers AICOYO\'s real-time voice pipeline and GRIT\'s AI copilots.',
		logo: Assets.LiveKit,
		name: 'LiveKit Agent Orchestration',
		category: 'integrations'
	}),
	defineSkill({
		slug: 'websockets',
		color: '#00bcd4',
		description:
			'WebSocket bridges for live telemetry, payment terminals, call monitoring, and operator dashboards. Everything stays in sync.',
		logo: Assets.WebSockets,
		name: 'Realtime WebSockets',
		category: 'integrations'
	}),
	defineSkill({
		slug: 'drone-ops',
		color: '#ff7200',
		description:
			'18 months at HIVE building software for drone fleets under DO-178C / DAL-B. EU A1/A3 drone license holder.',
		logo: Assets.DroneOps,
		name: 'Drone Operations Tooling',
		category: 'operations'
	}),
	defineSkill({
		slug: 'geospatial',
		color: '#2dd4bf',
		description:
			'ArcGIS 3D mapping for HIVE fleet planning and the STEM Globe project. Coverage maps, no-fly zones, mission data.',
		logo: Assets.Geospatial,
		name: 'Geospatial UX & Mapping',
		category: 'operations'
	}),
	defineSkill({
		slug: 'ai-automation',
		color: '#8a2be2',
		description:
			'Built AICOYO\'s voice AI platform and #mitdenkt\'s calling agents. LLM orchestration, STT/TTS pipelines, prompt engineering, human handoff.',
		logo: Assets.AiAutomation,
		name: 'AI Automation',
		category: 'ai'
	}),
	defineSkill({
		slug: 'ux',
		color: '#ffa62b',
		description:
			'B.Sc. User Experience Design at TH Ingolstadt. Research, prototyping, and interface design — applied to every product I build.',
		logo: Assets.Ux,
		name: 'UX Research & Strategy',
		category: 'product'
	}),
	defineSkill({
		slug: 'visual-suite',
		color: '#ff6f00',
		description:
			'Affinity Designer, Illustrator, Photoshop. Branding, cover art, UI assets — from AICOYO\'s brand guide to freelance merch.',
		logo: Assets.VisualSuite,
		name: 'Visual Design Suite',
		category: 'product'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
