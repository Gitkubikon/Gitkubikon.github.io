import type { Asset } from './types';

const icon = (name: string, color?: string): Asset => ({ name, color });

const Assets = {
	TypeScript: icon('simple-icons:typescript', '#3178c6'),
	Svelte: icon('simple-icons:svelte', '#ff3e00'),
	Python: icon('simple-icons:python', '#3776ab'),
	Docker: icon('simple-icons:docker', '#0db7ed'),
	CiCd: icon('carbon:flow-modeler', '#ffdd00'),
	OAuth: icon('carbon:id-management', '#f0b429'),
	Telephony: icon('carbon:phone-voice-filled', '#1f6feb'),
	WebSockets: icon('carbon:data-structured', '#00bcd4'),
	AiAutomation: icon('carbon:machine-learning-model', '#8a2be2'),
	Ux: icon('carbon:pen-fountain', '#ff9f00'),
	Geospatial: icon('carbon:earth-filled', '#2dd4bf'),
	DroneOps: icon('carbon:drone', '#ff7200'),
	Runtime: icon('carbon:code', '#43853d'),
	Fastify: icon('carbon:api-1', '#ffcc00'),
	DataStores: icon('carbon:data-base', '#4169e1'),
	Kubernetes: icon('carbon:ibm-cloud-kubernetes-service', '#326ce5'),
	Ansible: icon('simple-icons:ansible', '#f0642c'),
	LiveKit: icon('carbon:video-chat', '#7c3aed'),
	ReactNative: icon('carbon:mobile-add', '#61dafb'),
	VisualSuite: icon('carbon:color-palette', '#ff6f00'),
	Linux: icon('carbon:ibm-z-os', '#facc15'),
	Unknown: icon('carbon:unknown-filled', '#94a3b8')
} satisfies Record<string, Asset>;

export default Assets;
