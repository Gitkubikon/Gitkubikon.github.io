import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'I solo-built a production SaaS for AI voice agents — from blank repo to paying customers. I build complete platforms, not features. Everything from SIP telephony to Kubernetes, brand design to real-time WebSocket bridges. Currently founding AICOYO, co-running NNFlow, and building race ops tooling for GRIT Racing.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Gitkubikon', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikita-friesen', icon: 'i-carbon-logo-linkedin' },
		{ label: 'AICO Flow', href: 'https://aicoflow.xyz', icon: 'i-carbon-idea' },
		{ label: 'Email', href: 'mailto:nikita@aicoflow.com', icon: 'i-carbon-at' },
		{ label: 'Phone', href: 'tel:+4915158152571', icon: 'i-carbon-phone' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
