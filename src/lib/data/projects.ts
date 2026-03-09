import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'aicoyo-voice-saas',
		color: '#145B7A',
		description: `### What I built\n- Production SaaS for AI voice agents. Solo-built from scratch — real-time voice pipeline (STT → LLM → TTS), visual flow builder with 15+ node types, multi-tenant platform with RBAC and live call monitoring.\n- Full infrastructure: Docker/K8s, SIP telephony, WebRTC via LiveKit, warm transfer between AI and humans, vector memory via pgvector.\n- Brand, landing page, and all design assets done by me as well.\n\n### Results\n- 2 paying customers. 80%+ margin. 100% uptime since launch.`,
		shortDescription:
			'Production SaaS for AI voice agents. Solo-built. Paying customers.',
		links: [
			{ to: 'https://aicoflow.com', label: 'AICOYO', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.AiAutomation,
		name: 'AICOYO',
		period: {
			from: new Date(2024, 3, 1)
		},
		skills: getSkills('svelte', 'ts', 'bun-node', 'fastify', 'data-stores', 'docker', 'kubernetes', 'livekit', 'telephony', 'oauth', 'websockets', 'ai-automation'),
		type: 'Voice AI SaaS'
	},
	{
		slug: 'hive-drone-dashboard',
		color: '#ff9f1c',
		description: `### What I built\n- Led the SvelteKit frontend for HIVE's drone fleet dashboard — ArcGIS 3D mapping, real-time telemetry, mission planning, geofence enforcement.\n- H.264 NAL/AU parsing for encrypted drone video feeds. YubiKey-based HSM integration for fleet security.\n- Co-designed UX with avionics and compliance teams under DAL-B / DO-178C requirements.\n\n### Results\n- Single control centre for flight planning, monitoring, and compliance.\n- Pilots and compliance teams share the same real-time picture.`,
		shortDescription:
			'3D GIS drone dashboard with encrypted video, ArcGIS mapping, and DO-178C compliance.',
		links: [
			{ to: 'https://hive-systems.de/', label: 'HIVE Systems', newTab: true },
			{
				to: 'https://drive.google.com/file/d/1STnGco7368BN1H3Zdu4g3bjJ5R4mPgPM/view?usp=sharing',
				label: 'Dashboard Video',
				newTab: true
			},
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.DroneOps,
		name: 'HIVE Console',
		period: {
			from: new Date(2022, 9, 1),
			to: new Date(2024, 2, 15)
		},
		skills: getSkills('svelte', 'ts', 'websockets', 'drone-ops', 'geospatial', 'ux'),
		type: 'Drone Operations'
	},
	{
		slug: 'mitdenkt-ops-platform',
		color: '#f0b429',
		description: `### What I built\n- ZVT POS integration — custom WebSocket bridge between field payment terminals and Bun/Fastify backend.\n- Logto-backed SSO admin console with tenant provisioning, RBAC, and audit trails.\n- Docker deployments + CI/CD pipelines for mitdenkt boxes and on-prem telephony hardware.\n\n### Results\n- Service teams run payments, telephony, and scheduling from one system instead of juggling tools.`,
		shortDescription:
			'POS integration, SSO, and ops tooling for field service teams.',
		links: [
			{ to: 'https://mitdenkt.de/', label: 'mitdenkt', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.Telephony,
		name: '#mitdenkt Ops',
		period: {
			from: new Date(2024, 8, 1),
			to: new Date(2026, 1, 1)
		},
		skills: getSkills('ts', 'bun-node', 'fastify', 'data-stores', 'docker', 'ci-cd', 'telephony', 'oauth', 'websockets'),
		type: 'Systems Integration'
	},
	{
		slug: 'mitdenkt-ai-assistants',
		color: '#ffdd00',
		description: `### What I built\n- AI calling agents that handle routine calls, surface context, and hand off to humans when confidence drops.\n- Prompt engineering, guardrails, and monitoring — operators see confidence scores, transcripts, and follow-up tasks.\n- Hardened Bun/Fastify services with typed clients, auth layers, and structured logging.\n\n### Results\n- Cut manual call load while keeping operators in control.`,
		shortDescription: 'AI calling agents with human handoff and operator dashboards.',
		links: [
			{ to: 'https://mitdenkt.de/', label: 'mitdenkt', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.AiAutomation,
		name: '#mitdenkt AI',
		period: {
			from: new Date(2024, 8, 1),
			to: new Date(2026, 1, 1)
		},
		skills: getSkills('ai-automation', 'ts', 'bun-node', 'fastify', 'data-stores', 'telephony', 'oauth'),
		type: 'Voice AI'
	},
	{
		slug: 'grit-control-room',
		color: '#7c3aed',
		description: `### What I built\n- Race control platform for GRIT Racing — telemetry overlays, schedule tracking, live pit crew data sync.\n- LiveKit AI copilots wired into Bun/Fastify backends for team briefings and race strategy.\n- Deployed to Hetzner K8s with GitHub Actions and Ansible.\n\n### Results\n- Racing and mobility teams stay in sync before, during, and after events from one interface.`,
		shortDescription: 'Race control with telemetry, AI copilots, and live crew sync.',
		links: [
			{ to: 'https://grit-auto.de/', label: 'GRIT Auto', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.LiveKit,
		name: 'GRIT Hub',
		period: {
			from: new Date(2024, 9, 1)
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
		slug: 'stem-globe',
		color: '#2dd4bf',
		description: `### What I built\n- Interactive ArcGIS globe mapping global STEM initiatives with stories, filters, and media embeds.\n- UX designed for educators — browse by continent, theme, or project maturity.\n- Tuned for performance on classroom hardware.\n\n### Results\n- Students and teachers explore STEM programmes beyond their local context.`,
		shortDescription: 'ArcGIS globe showcasing global STEM initiatives.',
		links: [
			{ to: 'https://gitkubikon.github.io/STEMGlobe/', label: 'STEM Globe', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
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
		description: `### What I built\n- Logo suites, merchandise, and campaign visuals for Gabrieli Gymnasium.\n- Style guide extended to social templates and music cover art for local artists.\n\n### Results\n- Consistent visual identity across apparel, events, and digital channels.`,
		shortDescription: 'Branding, merch, and cover art for Gabrieli Gymnasium.',
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
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
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
