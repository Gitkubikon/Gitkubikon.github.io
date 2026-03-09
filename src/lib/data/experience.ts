import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'aicoyo-founder',
		company: 'AICOYO',
		description: `- Solo-built a production SaaS for AI voice agents from scratch. 2 paying customers, 80%+ margin, 100% uptime.\n- End-to-end real-time voice pipeline: STT → LLM → TTS with sub-500ms latency via LiveKit, WebRTC, and SIP telephony.\n- Visual flow builder with 15+ node types — drag-and-drop for operators, full programmatic control for engineers.\n- Multi-tenant platform with RBAC, live call monitoring, warm transfer (AI ↔ human), and vector memory via pgvector.\n- Full infrastructure ownership: Docker/K8s with on-prem deployment, production-ready from bare metal in minutes.`,
		contract: ContractType.SelfEmployed,
		type: 'Voice AI SaaS',
		location: 'Ingolstadt, Bavaria, Germany',
		period: { from: new Date(2024, 3, 1) },
		skills: getSkills(
			'ts',
			'svelte',
			'bun-node',
			'fastify',
			'data-stores',
			'docker',
			'kubernetes',
			'ansible',
			'ci-cd',
			'linux',
			'livekit',
			'telephony',
			'oauth',
			'websockets',
			'ai-automation'
		),
		name: 'Founder & Solo Engineer',
		color: '#145B7A',
		links: [
			{ to: 'https://aicoflow.com', label: 'AICOYO', newTab: true },
			{ to: 'https://www.linkedin.com/in/nikita-friesen', label: 'LinkedIn', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.AiAutomation,
		shortDescription: 'Production SaaS for AI voice agents. Solo-built from scratch. Paying customers.'
	},
	{
		slug: 'mitdenkt-devops',
		company: '#mitdenkt',
		description: `- Built a ZVT payment terminal integration — custom WebSocket bridge between field POS hardware and Bun/Fastify backend.\n- Shipped Logto-powered SSO with admin console for tenant provisioning, RBAC, and audit trails.\n- Ran Docker + Ansible deployments across Hetzner K8s clusters and on-prem telephony boxes with full CI/CD.\n- Built AI calling agents that handle routine calls and hand off to humans when confidence drops.`,
		contract: ContractType.FullTime,
		type: 'Full-stack & DevOps Engineering',
		location: 'Ingolstadt, Bavaria, Germany',
		period: { from: new Date(2024, 8, 1), to: new Date(2026, 1, 1) },
		skills: getSkills(
			'ts',
			'bun-node',
			'fastify',
			'data-stores',
			'docker',
			'kubernetes',
			'ansible',
			'ci-cd',
			'linux',
			'oauth',
			'telephony',
			'websockets',
			'ai-automation'
		),
		name: 'Full-stack & DevOps Engineer',
		color: '#ffdd00',
		links: [
			{ to: 'https://mitdenkt.de/', label: 'mitdenkt', newTab: true },
			{ to: 'https://www.linkedin.com/in/nikita-friesen', label: 'LinkedIn', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.CiCd,
		shortDescription: 'Payment terminals, SSO, telephony, and AI calling agents for field service teams.'
	},
	{
		slug: 'nnflow-cofounder',
		company: 'NNFlow',
		description: `- IT consulting agency with Niklas Röthlingshöfer. Enterprise process optimization and automation.\n- Client: Canzler & Bergmeier (patent law) — automated patent figure generation with Patent-Lektor.\n- Full-stack consulting across infrastructure, AI tooling, and workflow automation.`,
		contract: ContractType.SelfEmployed,
		type: 'IT Consulting',
		location: 'Ingolstadt, Bavaria, Germany',
		period: { from: new Date(2025, 0, 1) },
		skills: getSkills('ts', 'python', 'bun-node', 'ai-automation', 'docker', 'linux'),
		name: 'Co-Founder',
		color: '#0ea5e9',
		links: [
			{ to: 'https://www.linkedin.com/in/nikita-friesen', label: 'LinkedIn', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.AiAutomation,
		shortDescription: 'IT consulting agency. Enterprise automation and patent tooling.'
	},
	{
		slug: 'grit-racing-software',
		company: 'GRIT Racing',
		description: `- Race control platform with telemetry overlays, schedule tracking, and live pit crew data sync.\n- Wired LiveKit AI copilots into the stack for team briefings and race strategy.\n- Deployed to Hetzner K8s with Ansible playbooks and GitHub Actions CI/CD.\n- 50/50 revenue-share partnership.`,
		contract: ContractType.PartTime,
		type: 'Operations Engineering',
		location: 'Remote, Germany',
		period: { from: new Date(2024, 9, 1) },
		skills: getSkills(
			'svelte',
			'ts',
			'bun-node',
			'fastify',
			'data-stores',
			'livekit',
			'kubernetes',
			'ansible',
			'ci-cd',
			'linux',
			'ux'
		),
		name: 'Ops Engineer',
		color: '#7c3aed',
		links: [
			{ to: 'https://grit-auto.de/', label: 'GRIT Auto', newTab: true },
			{ to: 'https://www.linkedin.com/in/nikita-friesen', label: 'LinkedIn', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.LiveKit,
		shortDescription: 'Race control platform with telemetry, AI copilots, and live pit crew sync.'
	},
	{
		slug: 'hive-systems-frontend',
		company: 'HIVE Systems',
		description: `- Led the SvelteKit frontend for the drone fleet dashboard — ArcGIS 3D mapping, real-time telemetry, mission planning, geofence enforcement.\n- Built H.264 NAL/AU parsing for encrypted drone video feeds and YubiKey-based HSM integration for fleet security.\n- DAL-B certified avionics under DO-178C. Co-designed UX with compliance teams.`,
		contract: ContractType.FullTime,
		type: 'Software Engineering',
		location: 'Nuremberg, Bavaria, Germany',
		period: { from: new Date(2022, 9, 1), to: new Date(2024, 2, 15) },
		skills: getSkills('svelte', 'ts', 'websockets', 'drone-ops', 'geospatial', 'ux'),
		name: 'Software Engineer',
		color: '#ff9f1c',
		links: [
			{ to: 'https://hive-systems.de/', label: 'HIVE Systems', newTab: true },
			{
				to: 'https://drive.google.com/file/d/1STnGco7368BN1H3Zdu4g3bjJ5R4mPgPM/view?usp=sharing',
				label: 'Dashboard Video',
				newTab: true
			},
			{ to: 'https://www.linkedin.com/in/nikita-friesen', label: 'LinkedIn', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.DroneOps,
		shortDescription: '3D GIS drone dashboard, encrypted video feeds, DO-178C avionics.'
	},
	{
		slug: 'idl-software-intern',
		company: 'IDL - Institute for Digital Learning',
		description: `- Built and fixed features on internal education platforms with Python and TypeScript.\n- Shipped UI improvements and closed feature gaps on live systems.`,
		contract: ContractType.Internship,
		type: 'Software Development Internship',
		location: 'Eichstaett, Bavaria, Germany',
		period: { from: new Date(2021, 4, 1), to: new Date(2022, 6, 1) },
		skills: getSkills('python', 'ts', 'ux'),
		name: 'Software Development Intern',
		color: '#3776ab',
		links: [
			{ to: 'https://www.linkedin.com/in/nikita-friesen', label: 'LinkedIn', newTab: true },
			{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }
		],
		logo: Assets.Python,
		shortDescription: 'Python and TypeScript work on education platforms.'
	},
	{
		slug: 'freelance-artist',
		company: 'Self-employed',
		description: `- Logos, apparel designs, and cover art for Gabrieli Gymnasium and independent musicians.\n- End-to-end production from sketches to print-ready files.`,
		contract: ContractType.SelfEmployed,
		type: 'Brand & Digital Design',
		location: 'Eichstaett, Bavaria, Germany',
		period: { from: new Date(2018, 7, 1) },
		skills: getSkills('ux', 'visual-suite'),
		name: 'Freelance Digital Artist',
		color: '#ffa62b',
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
		shortDescription: 'Logos, apparel, and cover art for schools and musicians.'
	},
	{
		slug: 'kober-red-cross',
		company: 'KOBER GmbH',
		description: `- Door-to-door recruitment for the German Red Cross.\n- Adapted pitch to different communities, tracked results for territory planning.`,
		contract: ContractType.Contract,
		type: 'Field Outreach',
		location: 'Heilbronn, Germany',
		period: { from: new Date(2022, 5, 1), to: new Date(2022, 7, 1) },
		skills: getSkills('ux'),
		name: 'Field Advertising Specialist',
		color: '#ef476f',
		links: [{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }],
		logo: Assets.Ux,
		shortDescription: 'Door-to-door Red Cross membership recruitment.'
	},
	{
		slug: 'sodastream-promoter',
		company: 'SodaStream',
		description: `- Ran product demos and promotional events in Munich retail locations.\n- Hit sales targets through hands-on demos and direct customer interaction.`,
		contract: ContractType.Contract,
		type: 'Merchandising & Promotion',
		location: 'Munich, Bavaria, Germany',
		period: { from: new Date(2021, 2, 1), to: new Date(2021, 6, 1) },
		skills: getSkills('ux'),
		name: 'Merchandiser & Promoter',
		color: '#118ab2',
		links: [{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }],
		logo: Assets.Ux,
		shortDescription: 'Product demos and promotions in Munich retail.'
	},
	{
		slug: 'expert-ecommerce-intern',
		company: 'expert e-Commerce GmbH',
		description: `- Appliance sales and customer consultations.\n- Local market research for positioning and promos.`,
		contract: ContractType.Internship,
		type: 'Sales Internship',
		location: 'Eichstaett, Bavaria, Germany',
		period: { from: new Date(2018, 5, 1), to: new Date(2018, 7, 1) },
		skills: getSkills('ux'),
		name: 'Sales Intern',
		color: '#06d6a0',
		links: [{ to: 'mailto:nikita@aicoflow.com', label: 'Email' }],
		logo: Assets.Ux,
		shortDescription: 'Sales internship — appliance consulting and market research.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
