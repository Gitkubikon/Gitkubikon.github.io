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
			'I rely on TypeScript from design spikes to production roll-outs, wiring safe domain models for drone dashboards, telemetry panes, and dependable operator workflows across Bun, Node, and React Native.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'svelte',
		color: '#ff3e00',
		description:
			"I led the frontend for HIVE's drone operations dashboard with SvelteKit, crafting responsive flight overviews and alerting surfaces that operators can trust in the field.",
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'react-native',
		color: '#61dafb',
		description:
			'I prototype companion apps and shell interfaces with React Native and QML, keeping workflows consistent across mobile, embedded screens, and operator stations.',
		logo: Assets.ReactNative,
		name: 'React Native & QML',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'python',
		color: '#3776ab',
		description:
			'Python supports my data shaping and automation scripts, helping teams analyse mission logs, generate reports, and glue together CLI tooling.',
		logo: Assets.Python,
		name: 'Python',
		category: 'backend'
	}),
	defineSkill({
		slug: 'bun-node',
		color: '#43853d',
		description:
			'I run Bun and Node services for everything from payment bridges to AI routing, leaning on Bun Routes for rapid prototyping, Node primitives for long-running infrastructure, and the occasional Rust or Go helper when low-level needs pop up.',
		logo: Assets.Runtime,
		name: 'Bun & Node Runtime',
		category: 'backend'
	}),
	defineSkill({
		slug: 'fastify',
		color: '#ffcc00',
		description:
			'Fastify gives my APIs structure and speed - perfect for auth layers, payment hooks, and operator dashboards that have to respond in milliseconds.',
		logo: Assets.Fastify,
		name: 'Fastify APIs',
		category: 'backend'
	}),
	defineSkill({
		slug: 'data-stores',
		color: '#4169e1',
		description:
			'Postgres, Redis, and Drizzle ORM keep state reliable, whether I am syncing call transcripts, caching telemetry, or modelling tenants for Logto.',
		logo: Assets.DataStores,
		name: 'Postgres, Redis & Drizzle',
		category: 'backend'
	}),
	defineSkill({
		slug: 'docker',
		color: '#0db7ed',
		description:
			'Docker keeps deployments predictable: I maintain images for mitdenkt boxes, containerise LiveKit agent workers, and prepare reproducible builds for Hetzner and on-prem nodes.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: '#326ce5',
		description:
			'Kubernetes on Hetzner gives teams self-healing infra; I manage clusters, ingress, and secrets so racing and service teams can ship without babysitting nodes.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes & Hetzner',
		category: 'devops'
	}),
	defineSkill({
		slug: 'ansible',
		color: '#f0642c',
		description:
			'Ansible playbooks help me standardise edge devices and servers, from mitdenkt telephony boxes to GRIT Racing\'s on-track workstations.',
		logo: Assets.Ansible,
		name: 'Ansible Automation',
		category: 'devops'
	}),
	defineSkill({
		slug: 'ci-cd',
		color: '#ffdd00',
		description:
			'I build CI/CD flows with GitHub Actions that lint, test, and deploy to internal infrastructure, giving small teams confidence to ship reliable updates without babysitting each pipeline run.',
		logo: Assets.CiCd,
		name: 'CI/CD Automation',
		category: 'devops'
	}),
	defineSkill({
		slug: 'linux',
		color: '#facc15',
		description:
			'Years of Linux tinkering mean I am comfortable living in the shell - tuning services, writing fish and POSIX scripts, and keeping edge hardware healthy.',
		logo: Assets.Linux,
		name: 'Linux Systems & Shell',
		category: 'devops'
	}),
	defineSkill({
		slug: 'telephony',
		color: '#1f6feb',
		description:
			'Built SIP and ZVT POS integrations that stitch telephony, payments, and scheduling into unified customer journeys for service desks.',
		logo: Assets.Telephony,
		name: 'Telephony & POS Integrations',
		category: 'integrations'
	}),
	defineSkill({
		slug: 'oauth',
		color: '#f0b429',
		description:
			'Implemented OAuth2/OIDC with Logto, aligning identity, access, and telemetry so operators land in one trusted admin surface.',
		logo: Assets.OAuth,
		name: 'OAuth2, OIDC & Logto',
		category: 'integrations'
	}),
	defineSkill({
		slug: 'livekit',
		color: '#7c3aed',
		description:
			'LiveKit Agents let me orchestrate AI copilots across voice and video channels while keeping humans in the loop.',
		logo: Assets.LiveKit,
		name: 'LiveKit Agent Orchestration',
		category: 'integrations'
	}),
	defineSkill({
		slug: 'websockets',
		color: '#00bcd4',
		description:
			'I design WebSocket backbones for live drone telemetry and appointment updates, ensuring every operator dashboard and terminal stays in sync without guesswork.',
		logo: Assets.WebSockets,
		name: 'Realtime WebSockets',
		category: 'integrations'
	}),
	defineSkill({
		slug: 'drone-ops',
		color: '#ff7200',
		description:
			'I work closely with flight crews to translate DAL-B constraints and mission needs into dashboards, alerts, and tooling that keep drone operations accountable.',
		logo: Assets.DroneOps,
		name: 'Drone Operations Tooling',
		category: 'operations'
	}),
	defineSkill({
		slug: 'geospatial',
		color: '#2dd4bf',
		description:
			'Built the STEM Globe with ArcGIS and craft spatial visualisations for fleet planning, so teams can see coverage, no-fly zones, and mission data at a glance.',
		logo: Assets.Geospatial,
		name: 'Geospatial UX & Mapping',
		category: 'operations'
	}),
	defineSkill({
		slug: 'ai-automation',
		color: '#8a2be2',
		description:
			"Driving mitdenkt's AI calling agents from prototype to production by defining prompts, guardrails, and feedback loops that keep humans in control.",
		logo: Assets.AiAutomation,
		name: 'AI Automation',
		category: 'ai'
	}),
	defineSkill({
		slug: 'ux',
		color: '#ffa62b',
		description:
			'Grounded in User Experience Design studies, I facilitate research, map journeys, and translate findings into tactile interface systems that resonate with operators and technicians.',
		logo: Assets.Ux,
		name: 'UX Research & Strategy',
		category: 'product'
	}),
	defineSkill({
		slug: 'visual-suite',
		color: '#ff6f00',
		description:
			'Affinity Designer, Illustrator, and Photoshop are my go-tos for branding, cover art, and polished UI assets across freelance and racing projects.',
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
