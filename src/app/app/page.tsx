"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { useTopBarActions } from "@/components/TopBarContext";

const ONBOARDING_KEY = "openbyok_onboarding_done";

const tools = [
	{
		name: "Chat con IA",
		href: "/app/chat",
		description: "Conversa con modelos de lenguaje usando los proveedores que configures en la plataforma.",
		color: "sky" as const,
		icon: (
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
				<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			</svg>
		),
		tags: ["Requiere IA", "Ollama", "Bedrock"],
	},
	{
		name: "Mayeutica",
		href: "/app/mayeutica",
		description: "Aprende a traves de tests inteligentes generados por IA. Usa los proveedores que ya configuraste.",
		color: "rose" as const,
		icon: (
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
				<path d="M9 11l3 3L22 4" />
				<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
			</svg>
		),
		tags: ["Requiere IA", "Tests"],
	},
	{
		name: "Akiba",
		href: "/app/akiba",
		description: "Control financiero personal. Registra ingresos, gastos e insights. Funciona con los servicios que necesite.",
		color: "amber" as const,
		icon: (
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
				<line x1="12" y1="1" x2="12" y2="23" />
				<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
			</svg>
		),
		tags: ["IA opcional", "Local"],
	},
];

const colorMap = {
	sky: {
		iconBox: "bg-accent-sky-light text-accent-sky",
		bar: "from-accent-sky to-accent-sky/40",
		border: "hover:border-accent-sky/40",
		tag: "bg-accent-sky-light text-accent-sky",
		tagMuted: "bg-surface border border-border text-text-muted",
		link: "text-accent-sky",
	},
	rose: {
		iconBox: "bg-accent-rose-light text-accent-rose",
		bar: "from-accent-rose to-accent-rose/40",
		border: "hover:border-accent-rose/40",
		tag: "bg-accent-rose-light text-accent-rose",
		tagMuted: "bg-accent-rose-light text-accent-rose",
		link: "text-accent-rose",
	},
	amber: {
		iconBox: "bg-accent-amber-light text-accent-amber",
		bar: "from-accent-amber to-accent-amber/40",
		border: "hover:border-accent-amber/40",
		tag: "bg-accent-amber-light text-accent-amber",
		tagMuted: "bg-accent-amber-light text-accent-amber",
		link: "text-accent-amber",
	},
};

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function AppDashboard() {
	const [mounted, setMounted] = useState(false);
	const router = useRouter();
	const { setActions } = useTopBarActions();

	useEffect(() => {
		setActions({});
	}, [setActions]);

	useEffect(() => {
		const done = localStorage.getItem(ONBOARDING_KEY);
		if (!done) {
			router.replace("/app/welcome");
			return;
		}
		setMounted(true);
	}, [router]);

	if (!mounted) {
		return (
			<div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
				<div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
			</div>
		);
	}

	return (
		<div className="p-6 lg:p-10 max-w-5xl mx-auto">
			<div className="mb-8">
				<h1 className="font-display font-700 text-2xl sm:text-3xl tracking-tight text-text mb-2">
					Mis herramientas
				</h1>
				<p className="text-text-muted text-sm sm:text-base">
					Selecciona una herramienta para comenzar. Configura tus servicios en el icono de ajustes.
				</p>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				animate="visible"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
			>
				{tools.map((tool) => {
					const c = colorMap[tool.color];
					return (
						<motion.div
							key={tool.name}
							variants={item}
							className={`group relative rounded-2xl bg-surface border border-border p-6 transition-all duration-200 ${c.border} hover:shadow-md hover:shadow-shadow-md hover:-translate-y-0.5 overflow-hidden`}
						>
							<div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.bar}`} />
							<div className={`w-12 h-12 rounded-xl ${c.iconBox} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
								{tool.icon}
							</div>
							<h2 className="font-display font-700 text-lg text-text mb-1.5">{tool.name}</h2>
							<p className="text-text-muted text-sm leading-relaxed mb-4">{tool.description}</p>
							<div className="flex items-center gap-1.5 flex-wrap mb-5">
								{tool.tags.map((tag, i) => (
									<span key={tag} className={`text-xs font-medium px-2 py-0.5 rounded-md ${i === 0 ? c.tag : c.tagMuted}`}>
										{tag}
									</span>
								))}
							</div>
							<Link
								href={tool.href}
								className={`inline-flex items-center gap-1.5 text-sm font-display font-600 ${c.link} group-hover:gap-2.5 transition-all duration-200`}
							>
								Abrir
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</Link>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
}