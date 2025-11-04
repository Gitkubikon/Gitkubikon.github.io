import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'mitdenkt-devops',
		company: '#mitdenkt',
		description: `- Linked ZVT payment terminals with scheduling and reporting through a hardened WebSocket bridge between mitdenkt boxes and Bun/Fastify services.\n- Designed and shipped the Logto-powered SSO admin console that gives operations teams clear control over tenants, roles, and audit trails.\n- Maintain Dockerised Linux deployments across Hetzner Kubernetes clusters and on-prem telephony hardware with Ansible playbooks, observability, and CI/CD.\n- Prototyping AI call assistants with guardrails that hand off to humans whenever confidence drops.`,
		contract: ContractType.FullTime,
		type: 'Full-stack & DevOps Engineering',
		location: 'Ingolstadt, Bavaria, Germany',
		period: { from: new Date(2024, 8, 1) },
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
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.CiCd,
		shortDescription: "Keeping mitdenkt's payments, telephony, and SSO tooling dependable for service teams."
	},
	{
		slug: 'grit-racing-software',
		company: 'GRIT Racing & GRIT Auto',
		description: `- Ship race-ops dashboards and telemetry overlays backed by Bun/Node services so pit crews and mobility teams share the same context.\n- Orchestrate LiveKit Agents that blend AI copilots with live data to brief remote engineers before, during, and after stints.\n- Automate Redis/Postgres data pipelines and GitHub Actions on Hetzner Kubernetes clusters hardened with Ansible playbooks.`,
		contract: ContractType.PartTime,
		type: 'Software & Operations Engineering',
		location: 'Remote, Germany',
		period: { from: new Date(2024, 10, 1) },
		skills: getSkills(
			'svelte',
			'ts',
			'react-native',
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
		name: 'Software Engineer',
		color: '#7c3aed',
		links: [
			{ to: 'https://grit-auto.de/', label: 'GRIT Auto', newTab: true },
			{ to: 'https://www.linkedin.com/in/nikita-friesen', label: 'LinkedIn', newTab: true },
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.LiveKit,
		shortDescription: "Building telemetry, media, and deployment tooling for GRIT's racing and mobility teams."
	},
	{
		slug: 'hive-systems-frontend',
		company: 'HIVE Systems',
		description: `- Led the SvelteKit frontend for the drone fleet dashboard, delivering DAL-B informed monitoring views that ground every mission briefing.\n- Built mission control surfaces that blend telemetry, geofences, weather, and maintenance data so pilots share the same picture.\n- Co-designed UX patterns with avionics and compliance teams to keep the software trustworthy in the field.`,
		contract: ContractType.FullTime,
		type: 'Software Engineering',
		location: 'Nuremberg, Bavaria, Germany',
		period: { from: new Date(2022, 9, 1), to: new Date(2024, 3, 15) },
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
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.DroneOps,
		shortDescription: 'Led the HIVE drone dashboard with realtime telemetry and operator-first UX.'
	},
	{
		slug: 'idl-software-intern',
		company: 'IDL - Institute for Digital Learning',
		description: `- Prototyped and shipped fixes across internal education platforms with Python and TypeScript.\n- Assisted senior engineers by refining UI flows and closing minor feature gaps on live systems.\n- Documented investigative work so teammates could resume debugging threads without downtime.`,
		contract: ContractType.Internship,
		type: 'Software Development Internship',
		location: 'Eichstaett, Bavaria, Germany',
		period: { from: new Date(2021, 4, 1), to: new Date(2022, 6, 1) },
		skills: getSkills('python', 'ts', 'ux'),
		name: 'Software Development Intern',
		color: '#3776ab',
		links: [
			{ to: 'https://www.linkedin.com/in/nikita-friesen', label: 'LinkedIn', newTab: true },
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.Python,
		shortDescription: 'Supported digital learning products with Python services and front-end refinements.'
	},
	{
		slug: 'freelance-artist',
		company: 'Self-employed',
		description: `- Deliver bespoke logos, apparel, and cover art for Gabrieli Gymnasium and independent musicians.\n- Run briefing sessions that translate early ideas into production-ready visual systems.\n- Manage end-to-end production, from sketches to print-ready files and stakeholder approvals.`,
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
			{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }
		],
		logo: Assets.VisualSuite,
		shortDescription: 'Independent designer crafting visual identities, apparel, and cover art for schools and artists.'
	},
	{
		slug: 'kober-red-cross',
		company: 'KOBER GmbH',
		description: `- Recruited German Red Cross members through door-to-door campaigns, adapting messaging to community needs.\n- Captured feedback loops that informed future outreach and enabled data-driven territory planning.`,
		contract: ContractType.Contract,
		type: 'Field Outreach',
		location: 'Heilbronn, Germany',
		period: { from: new Date(2022, 5, 1), to: new Date(2022, 7, 1) },
		skills: getSkills('ux'),
		name: 'Field Advertising Specialist',
		color: '#ef476f',
		links: [{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }],
		logo: Assets.Ux,
		shortDescription: 'Drove membership growth for the German Red Cross through tailored community outreach.'
	},
	{
		slug: 'sodastream-promoter',
		company: 'SodaStream',
		description: `- Orchestrated promotional events in high-traffic retail locations, pairing demos with measurable sales targets.\n- Elevated brand visibility by experimenting with messaging and live feedback.`,
		contract: ContractType.Contract,
		type: 'Merchandising & Promotion',
		location: 'Munich, Bavaria, Germany',
		period: { from: new Date(2021, 2, 1), to: new Date(2021, 6, 1) },
		skills: getSkills('ux'),
		name: 'Merchandiser & Promoter',
		color: '#118ab2',
		links: [{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }],
		logo: Assets.Ux,
		shortDescription: "Designed in-store experiences that expanded SodaStream's reach across Munich."
	},
	{
		slug: 'expert-ecommerce-intern',
		company: 'expert e-Commerce GmbH',
		description: `- Supported appliance sales and customer consultations, uncovering needs before recommending solutions.\n- Conducted local market research to refine positioning and promotional tactics.`,
		contract: ContractType.Internship,
		type: 'Sales Internship',
		location: 'Eichstaett, Bavaria, Germany',
		period: { from: new Date(2018, 5, 1), to: new Date(2018, 7, 1) },
		skills: getSkills('ux'),
		name: 'Sales Intern',
		color: '#06d6a0',
		links: [{ to: 'mailto:nikitafriesen74@gmail.com', label: 'Email' }],
		logo: Assets.Ux,
		shortDescription: 'Strengthened customer relationships and refined sales tactics for expert e-Commerce.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
