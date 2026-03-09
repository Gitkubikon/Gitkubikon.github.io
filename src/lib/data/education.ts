import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor of Science - User Experience Design',
		description: `- User research, service design, and prototyping with a focus on operational tooling.\n- Studio projects combining geospatial storytelling and engineering (ArcGIS STEM Globe).\n- Applying HCI and design thinking directly to everything I build.`,
		location: 'Ingolstadt, Bavaria, Germany',
		logo: Assets.Ux,
		name: 'Technische Hochschule Ingolstadt - UX Design',
		organization: 'Technische Hochschule Ingolstadt',
		period: { from: new Date(2023, 9, 1), to: new Date(2026, 6, 1) },
		shortDescription:
			'B.Sc. UX Design — research, prototyping, and design thinking applied to real products.',
		slug: 'thi-ux-design',
		subjects: ['User Research', 'Design Thinking', 'Prototyping', 'Service Design']
	},
	{
		degree: 'High School Diploma - Music Concentration',
		description: `- Abitur with music focus. Piano, performance, theory.\n- Designed merch and visual identity for the school as a side project.`,
		location: 'Eichstaett, Bavaria, Germany',
		logo: Assets.VisualSuite,
		name: 'Gabrieli-Gymnasium - High School Diploma',
		organization: 'Gabrieli-Gymnasium',
		period: { from: new Date(2014, 8, 1), to: new Date(2022, 5, 1) },
		shortDescription:
			'Abitur with music concentration. Piano, design, and early technical projects.',
		slug: 'gabrieli-gymnasium',
		subjects: ['Music Performance', 'Music Theory', 'Event Production', 'Collaboration']
	}
];

const EducationData = { title, items };

export default EducationData;
