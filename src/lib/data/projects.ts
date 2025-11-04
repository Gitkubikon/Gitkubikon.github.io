import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'hive-drone-dashboard',
		color: '#ff9f1c',
		description: `### What I built\n- Led the SvelteKit frontend for HIVE's drone fleet dashboard, stitching telemetry, maintenance, and mission tooling into one interface.\n- Designed mission control views that layer geofences, weather, and alerts so pilots react before issues escalate.\n- Partnered with avionics teams to respect DAL-B obligations while keeping the UX fast and legible.\n\n### Impact\n- Operators plan and supervise flights from one dependable control centre.\n- Reduced back-and-forth between pilots and compliance thanks to shared real-time context.`,
		shortDescription:
			'Realtime fleet management dashboard with compliance-ready UX and telemetry overlays.',
		links: [
			{ to: 'https://hive-systems.de/', label: 'HIVE Systems', newTab: true },
			{
				to: 'https://drive.google.com/file/d/1STnGco7368BN1H3Zdu4g3bjJ5R4mPgPM/view?usp=sharing',
				label: 'Dashboard Video',
				newTab: true
			},
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.DroneOps,
		name: 'HIVE Console',
		period: {
			from: new Date(2022, 9, 1),
			to: new Date(2024, 3, 15)
		},
		skills: getSkills('svelte', 'ts', 'websockets', 'drone-ops', 'geospatial', 'ux'),
		type: 'Drone Operations'
	},
	{
		slug: 'mitdenkt-ops-platform',
		color: '#f0b429',
		description: `### What I built\n- Engineered the ZVT POS integration that connects field payment terminals to scheduling and reporting through a resilient WebSocket bridge.\n- Delivered a Logto-backed OAuth2/OIDC admin console that unifies tenant provisioning, access controls, and audit trails.\n- Automated Docker-based deployments and CI/CD pipelines powering mitdenkt boxes and Bun/Fastify services.\n\n### Impact\n- Service teams run payments, telephony, and scheduling from one playbook instead of juggling tools.`,
		shortDescription:
			"Unified POS, SSO, and operational tooling for mitdenkt's connected service platform.",
		links: [
			{ to: 'https://mitdenkt.de/', label: 'mitdenkt', newTab: true },
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.Telephony,
		name: '#mitdenkt Ops',
		period: {
			from: new Date(2024, 8, 1)
		},
		skills: getSkills('ts', 'bun-node', 'fastify', 'data-stores', 'docker', 'ci-cd', 'telephony', 'oauth', 'websockets'),
		type: 'Systems Integration'
	},
	{
		slug: 'mitdenkt-ai-assistants',
		color: '#ffdd00',
		description: `### What I built\n- Designed pragmatic AI call assistants that answer routine questions, surface context, and escalate complex cases to humans.\n- Crafted prompt strategies, guardrails, and monitoring so operators see confidence, transcripts, and follow-up tasks.\n- Hardened the surrounding Bun/Fastify services with typed clients, authentication layers, and structured logging.\n\n### Impact\n- Reduced manual call load while keeping operators in control of voice interactions.`,
		shortDescription: 'Guardrailed AI call assistants that respect human escalation paths.',
		links: [
			{ to: 'https://mitdenkt.de/', label: 'mitdenkt', newTab: true },
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.AiAutomation,
		name: '#mitdenkt AI',
		period: {
			from: new Date(2024, 8, 1)
		},
		skills: getSkills('ai-automation', 'ts', 'bun-node', 'fastify', 'data-stores', 'telephony', 'oauth'),
		type: 'Autonomy'
	},
	{
		slug: 'grit-control-room',
		color: '#7c3aed',
		description: `### What I built\n- Crafted a race control experience for GRIT Racing & GRIT Auto that blends telemetry overlays, schedule tracking, and media review into one interface.\n- Wired LiveKit Agents into Bun/Fastify backends so AI copilots can brief remote engineers and sync with trackside crews in real time.\n- Deployed the stack to Hetzner Kubernetes clusters hardened with GitHub Actions pipelines and Ansible playbooks.\n\n### Impact\n- Keeps racing and mobility teams in sync before, during, and after events without juggling disparate tools.`,
		shortDescription: 'Race control tooling combining telemetry, media, and ops dashboards for GRIT teams.',
		links: [
			{ to: 'https://grit-auto.de/', label: 'GRIT Auto', newTab: true },
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.LiveKit,
		name: 'GRIT Hub',
		period: {
			from: new Date(2024, 10, 1)
		},
		skills: getSkills(
			'svelte',
			'ts',
			'bun-node',
			'fastify',
			'livekit',
			'data-stores',
			'kubernetes',
			'ansible',
			'ci-cd',
			'linux',
			'ux'
		),
		type: 'Operations Software'
	},
	{
		slug: 'aico-flow',
		color: '#0ea5e9',
		description: `### What I built\n- AICO Flow is my personal sandbox for automation workflows that blend AI guardrails, orchestration, and human oversight.\n- Runs on Bun/Fastify with Drizzle and Redis so flows stay fast while data remains structured.\n- Experiments with Svelte frontends and LiveKit Agents to explore how voice, video, and AI copilots plug into operations tools.\n\n### Impact\n- Serves as a proving ground for ideas I later harden for clients and employers.`,
		shortDescription: 'Personal automation lab exploring pragmatic AI workflows and collaboration surfaces.',
		links: [
			{ to: 'https://landing.aicoflow.xyz', label: 'AICO Flow', newTab: true },
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.AiAutomation,
		name: 'AICO Flow',
		period: {
			from: new Date(2024, 9, 1)
		},
		skills: getSkills('ts', 'bun-node', 'fastify', 'data-stores', 'livekit', 'ai-automation', 'ux'),
		type: 'Autonomy R&D'
	},
	{
		slug: 'stem-globe',
		color: '#2dd4bf',
		description: `### What I built\n- Mapped global STEM initiatives using ArcGIS to create an interactive globe with stories, filters, and media embeds.\n- Designed the UX so educators can browse by continent, theme, or project maturity without feeling lost.\n- Tuned performance and accessibility so the experience works smoothly on classroom hardware.\n\n### Impact\n- Gives students and teachers a visual way to explore STEM programmes beyond their local bubble.`,
		shortDescription: 'ArcGIS-powered globe showcasing STEM initiatives with approachable storytelling.',
		links: [
			{ to: 'https://gitkubikon.github.io/STEMGlobe/', label: 'STEM Globe', newTab: true },
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.Geospatial,
		name: 'STEM Globe',
		period: {
			from: new Date(2024, 0, 1)
		},
		skills: getSkills('geospatial', 'ts', 'ux'),
		type: 'Geospatial UX'
	},
	{
		slug: 'gabrieli-branding',
		color: '#ffa62b',
		description: `### What I built\n- Produced logo suites, merchandise, and campaign visuals for the Gabrieli Gymnasium student body.\n- Facilitated feedback loops with student councils to lock typography, palettes, and sizing for print.\n- Extended the style guide to social templates and music cover art for local artists.\n\n### Impact\n- Helped the school community present a consistent identity across apparel, events, and digital channels.`,
		shortDescription: 'Visual identity work for Gabrieli Gymnasium and local artists.',
		links: [
			{
				to: 'https://www.gabrieli-gymnasium.de/menschen/schuelervertretung/schulkleidung/',
				label: 'Gabrieli Gymnasium Merch',
				newTab: true
			},
			{
				to: 'https://drive.google.com/file/d/1OxkKNIkDEUl4iwIXMlYlyMaddROR6RmZ/view?usp=sharing',
				label: 'Cover Art Portfolio',
				newTab: true
			},
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.VisualSuite,
		name: 'Gabrieli Brand Suite',
		period: {
			from: new Date(2018, 7, 1)
		},
		skills: getSkills('ux', 'visual-suite'),
		type: 'Visual Design'
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
