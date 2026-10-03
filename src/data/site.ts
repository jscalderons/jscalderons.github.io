// Contenido del sitio. Edita este archivo para cambiar textos sin tocar el diseño.

const phone = '573022095243';
const whatsappMessage = 'Hola Jhonathan, vi tu web y me gustaría hablar sobre un proyecto.';

export const site = {
	name: 'Jhonathan Calderón',
	fullName: 'Jhonathan S. Calderón Sánchez',
	role: 'Desarrollador full-stack & coordinador de desarrollo',
	title: 'Jhonathan Calderón · Desarrollo web a medida, APIs y consultoría técnica',
	description:
		'Desarrollador full-stack en Cali, Colombia. Construyo aplicaciones web a medida, sistemas internos, APIs e integraciones, y asesoro a equipos de desarrollo. Trabajo en remoto.',
	location: 'Cali, Colombia',
	timezone: 'America/Bogota',
	startYear: 2017,
	email: 'js.calderon.sanchez@gmail.com',
	whatsapp: `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`,
	linkedin: 'https://www.linkedin.com/in/jscalderons/',
	github: 'https://github.com/jscalderons',
};

export const services = [
	{
		id: 'web',
		title: 'Desarrollo web a medida',
		summary: 'Aplicaciones web rápidas, seguras y fáciles de mantener, desde la idea hasta el despliegue.',
		items: ['Plataformas y portales a medida', 'Paneles de administración', 'Sitios corporativos de alto rendimiento'],
		stack: ['Laravel', 'Node.js', 'React', 'Angular', 'Vue'],
	},
	{
		id: 'apis',
		title: 'Sistemas internos y APIs',
		summary: 'Digitalizo y automatizo los procesos de tu empresa para que tu equipo trabaje menos en tareas repetitivas.',
		items: ['APIs REST e integraciones con terceros', 'Automatización de procesos internos', 'Diseño y optimización de bases de datos'],
		stack: ['NestJS', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Firebase'],
	},
	{
		id: 'consultoria',
		title: 'Consultoría técnica',
		summary: 'Acompaño a tu equipo para construir mejor: decisiones técnicas claras y procesos que escalan.',
		items: ['Arquitectura y elección de tecnologías', 'Revisión de código y buenas prácticas', 'Mentoría y organización de equipos'],
		stack: ['Arquitectura', 'Code review', 'Scrum', 'Liderazgo'],
	},
];

export const process = [
	{ title: 'Conversamos', text: 'Me cuentas tu idea o el problema por WhatsApp o en una llamada corta, sin compromiso.' },
	{ title: 'Propuesta clara', text: 'Recibes alcance, tiempos y precio por escrito. Sin letra pequeña.' },
	{ title: 'Construcción', text: 'Avances frecuentes que puedes probar, para ajustar el rumbo a tiempo.' },
	{ title: 'Entrega y soporte', text: 'Despliegue, documentación y acompañamiento después del lanzamiento.' },
];

export const experience = [
	{ period: '2023 — hoy', role: 'Coordinador de Desarrollo', company: 'Empresa del sector salud', sector: 'Salud', text: 'Lidero equipos técnicos y el ciclo completo de proyectos digitales que mejoran la experiencia del cliente y los procesos internos.' },
	{ period: '2021 — 2022', role: 'Frontend Software Engineer II', company: 'Mensajeros Urbanos', sector: 'Logística', text: 'Desarrollo frontend en Angular y React, con apoyo en backend con NestJS.' },
	{ period: '2021', role: 'Analista Nacional de Desarrollo', company: 'Coomeva Medicina Prepagada', sector: 'Salud', text: 'Proyectos en Laravel, Ionic, Angular y Android.' },
	{ period: '2018 — 2021', role: 'Desarrollador Full-Stack', company: 'Independiente', sector: 'Freelance', text: 'Sistemas internos para distintas empresas: análisis, arquitectura, desarrollo y soporte con Flutter, Laravel, Vue y React.' },
	{ period: '2019 — 2020', role: 'Desarrollador', company: 'SIESA E-commerce', sector: 'E-commerce', text: 'Desarrollo full-stack con Yii2, Angular y AngularJS.' },
	{ period: '2017', role: 'Ingeniero de desarrollo', company: 'Taylor & Johnson', sector: 'Finanzas', text: 'Interfaces para entidades financieras y cooperativas con ASP.NET MVC.' },
];

export const stack = [
	'PHP', 'Laravel', 'JavaScript', 'TypeScript', 'Node.js', 'NestJS', 'Express', 'React', 'Next.js', 'Angular',
	'Vue.js', 'Flutter', 'Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Git',
];

export const sectors = ['Salud', 'Logística', 'E-commerce', 'Finanzas'];
