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
		'Product engineer with experience in dependable software for drone fleets and connected operations teams. Currently at #mitdenkt, also splitting time between GRIT Racing & GRIT Auto, and my own AICO Flow experiments - merging geospatial UX, telephony plumbing, and pragmatic AI so crews get signals they can act on.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Gitkubikon', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikita-friesen', icon: 'i-carbon-logo-linkedin' },
		{
			label: 'STEM Globe',
			href: 'https://gitkubikon.github.io/STEMGlobe/',
			icon: 'i-carbon-globe'
		},
		{ label: 'AICO Flow', href: 'https://landing.aicoflow.xyz', icon: 'i-carbon-idea' },
		{ label: 'Email', href: 'mailto:nikitafriesen74@gmail.com', icon: 'i-carbon-at' },
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
