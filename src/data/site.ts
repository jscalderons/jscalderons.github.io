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
		idealFor: ['Consultorios', 'Talleres', 'Distribuidoras', 'Inmobiliarias'],
	},
	{
		id: 'automatizacion',
		title: 'Integraciones y automatización',
		summary: 'Haz que tus sistemas hablen entre sí y elimina el trabajo repetitivo que hoy le quita horas a tu equipo.',
		items: ['Avisos y atención por WhatsApp (API oficial)', 'Catálogo y pedidos por WhatsApp, sincronizados con tu inventario', 'Conexión con CRM, facturación y hojas de cálculo'],
		idealFor: ['Tiendas', 'Restaurantes', 'Peluquerías', 'Ferreterías'],
	},
	{
		id: 'soporte',
		title: 'Mejora de sistemas existentes',
		summary: '¿Ya tienes un sistema pero da problemas? Lo diagnostico y lo pongo a punto antes de que te cueste clientes.',
		items: ['Diagnóstico técnico con plan de acción', 'Corrección de errores y mejoras de rendimiento', 'Mantenimiento y soporte mensual'],
		idealFor: ['Negocios con sistema propio', 'Webs lentas', 'Proyectos abandonados'],
	},
];

export const process = [
	{ title: 'Conversamos', text: 'Me cuentas tu idea o el problema por WhatsApp o en una llamada corta, sin compromiso.' },
	{ title: 'Propuesta clara', text: 'Recibes alcance, tiempos y precio por escrito. Sin letra pequeña.' },
	{ title: 'Construcción', text: 'Avances frecuentes que puedes probar, para ajustar el rumbo a tiempo.' },
	{ title: 'Entrega y soporte', text: 'Despliegue, documentación y acompañamiento después del lanzamiento.' },
];

export const highlights = [
	{ value: '+9 años', text: 'desarrollando software para empresas de salud, logística, comercio electrónico y finanzas.' },
	{ value: 'Equipos', text: 'Hoy coordino un equipo de desarrollo: sé organizar proyectos y cumplir fechas.' },
	{ value: 'Pymes', text: 'Desde 2018 trabajo como freelance creando sistemas para negocios de distintos tamaños.' },
	{ value: 'Formación', text: 'Ingeniería de Sistemas (UNAD) y Análisis y Desarrollo de Sistemas de Información (SENA).' },
];

export const benefits = [
	'Atención 24/7', 'Menos errores', 'Más ventas', 'Precio claro', 'Soporte incluido',
	'Citas automáticas', 'Pedidos por WhatsApp', 'Todo conectado', 'Menos trabajo manual',
];

export const faqs = [
	{
		q: '¿Cuánto cuesta?',
		a: 'Depende de lo que necesites. Tras una conversación corta te envío una propuesta con precio fijo, por escrito y sin costos ocultos. Los proyectos grandes se dividen en fases para que pagues por avance.',
	},
	{
		q: '¿Cuánto tarda un proyecto?',
		a: 'Una automatización sencilla o una web informativa suelen estar listas en 1 a 3 semanas. Un sistema a medida se entrega por fases de 4 a 6 semanas, y desde la primera fase ya puedes usarlo.',
	},
	{
		q: 'No sé nada de tecnología, ¿es un problema?',
		a: 'Para nada. Tú me cuentas cómo funciona tu negocio y yo me encargo de la parte técnica. Te explico todo en palabras simples y te enseño a usar lo que construyamos.',
	},
	{
		q: '¿Qué pasa si algo falla después de la entrega?',
		a: 'Todo proyecto incluye 30 días de garantía para corregir errores sin costo. Después puedes contratar un plan de mantenimiento mensual para que siempre esté funcionando.',
	},
	{
		q: '¿Puedo usar WhatsApp sin que bloqueen mi número?',
		a: 'Sí. Trabajo con la API oficial de WhatsApp Business, aprobada por Meta, así que tu número y tus clientes están seguros.',
	},
	{
		q: '¿El sistema y los datos son míos?',
		a: 'Sí. Las cuentas quedan a nombre de tu negocio y al terminar el pago recibes el código y todos los accesos.',
	},
];

export const sectors = ['Salud', 'Logística', 'E-commerce', 'Finanzas'];
