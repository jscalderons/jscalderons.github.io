// Contenido del sitio. Edita este archivo para cambiar textos sin tocar el diseño.

const phone = '573022095243';
const whatsappMessage = 'Hola Jhonathan, vi tu web y me gustaría hablar sobre un proyecto.';

export const site = {
	name: 'Jhonathan Calderón',
	fullName: 'Jhonathan S. Calderón Sánchez',
	role: 'Desarrollador full-stack freelance',
	title: 'Jhonathan Calderón · Software a medida, integraciones y automatización para negocios',
	description:
		'Desarrollador full-stack freelance en Cali, Colombia. Creo software a medida, integraciones y automatizaciones (incluido WhatsApp) para que tu negocio deje de hacer a mano lo que un sistema puede hacer solo.',
	location: 'Cali, Colombia',
	timezone: 'America/Bogota',
	startYear: 2017,
	email: 'js.calderon.sanchez@gmail.com',
	whatsapp: `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`,
	linkedin: 'https://www.linkedin.com/in/jscalderons/',
	github: 'https://github.com/jscalderons',
};

export const problems = [
	{
		pain: 'Tu equipo copia datos a mano entre Excel, correos y otros sistemas.',
		fix: 'Conecto tus herramientas para que la información viaje sola y sin errores.',
	},
	{
		pain: 'Respondes por WhatsApp las mismas preguntas todo el día.',
		fix: 'Automatizo respuestas, recordatorios y avisos con la API oficial de WhatsApp.',
	},
	{
		pain: 'Usas una herramienta que no se ajusta a cómo trabaja tu negocio.',
		fix: 'Construyo el sistema a tu medida: solo lo que necesitas, fácil de usar.',
	},
	{
		pain: 'Tienes un sistema lento, con fallas o que nadie se atreve a tocar.',
		fix: 'Lo reviso, lo estabilizo y lo mejoro paso a paso, sin detener tu operación.',
	},
];

export const services = [
	{
		id: 'web',
		title: 'Software a medida',
		summary: 'Aplicaciones web pensadas para tu forma de trabajar: rápidas, seguras y fáciles de usar para tu equipo.',
		items: ['Sistemas de gestión y paneles de administración', 'Portales para clientes y proveedores', 'Agendamiento, inventario, cotizaciones y más'],
		stack: ['Laravel', 'Node.js', 'React', 'Angular', 'Vue'],
	},
	{
		id: 'automatizacion',
		title: 'Integraciones y automatización',
		summary: 'Haz que tus sistemas hablen entre sí y elimina el trabajo repetitivo que hoy le quita horas a tu equipo.',
		items: ['Avisos y atención por WhatsApp (API oficial)', 'Catálogo y pedidos por WhatsApp, sincronizados con tu inventario', 'Conexión con CRM, facturación y hojas de cálculo'],
		stack: ['WhatsApp API', 'APIs REST', 'Webhooks', 'PostgreSQL', 'MySQL'],
	},
	{
		id: 'soporte',
		title: 'Mejora de sistemas existentes',
		summary: '¿Ya tienes un sistema pero da problemas? Lo diagnostico y lo pongo a punto antes de que te cueste clientes.',
		items: ['Diagnóstico técnico con plan de acción', 'Corrección de errores y mejoras de rendimiento', 'Mantenimiento y soporte mensual'],
		stack: ['PHP', 'JavaScript', 'Java', 'Bases de datos', 'Soporte'],
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
