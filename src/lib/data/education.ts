import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor of Science - User Experience Design',
		description: `- Digging into user research, service design, and prototyping with a focus on operational tooling and drone interfaces.\n- Leading studio projects that combine geospatial storytelling, accessibility, and pragmatic engineering (including the ArcGIS STEM Globe).\n- Exploring how product strategy, safety requirements, and field constraints translate into honest UX decisions.`,
		location: 'Ingolstadt, Bavaria, Germany',
		logo: Assets.Ux,
		name: 'Technische Hochschule Ingolstadt - UX Design',
		organization: 'Technische Hochschule Ingolstadt',
		period: { from: new Date(2023, 9, 1), to: new Date(2026, 6, 1) },
		shortDescription:
			'Designing digital products that anchor research-led insights in tangible user experiences.',
		slug: 'thi-ux-design',
		subjects: ['User Research', 'Design Thinking', 'Prototyping', 'Service Design']
	},
	{
		degree: 'High School Diploma - Music Concentration',
		description: `- Graduated with a 2.5 GPA while arranging performances and supporting school events through visual design.\n- Applied creative discipline from music education to collaborative and technical work.`,
		location: 'Eichstaett, Bavaria, Germany',
		logo: Assets.VisualSuite,
		name: 'Gabrieli-Gymnasium - High School Diploma',
		organization: 'Gabrieli-Gymnasium',
		period: { from: new Date(2014, 8, 1), to: new Date(2022, 5, 1) },
		shortDescription:
			'Completed a music-focused Abitur, balancing performance, theory, and early technical projects.',
		slug: 'gabrieli-gymnasium',
		subjects: ['Music Performance', 'Music Theory', 'Event Production', 'Collaboration']
	}
];

const EducationData = { title, items };

export default EducationData;
