"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const ONBOARDING_KEY = "openbyok_onboarding_done";

const steps = [
	{
		icon: (
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
			</svg>
		),
		title: "Todo queda en tu navegador",
		description: "No hay servidores, no hay base de datos externa. Tus configuraciones, tus llaves y tus datos se guardan exclusivamente en el localStorage de tu navegador. Lo que es tuyo, se queda contigo.",
		color: "primary" as const,
	},
	{
		icon: (
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sky)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
				<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
			</svg>
		),
		title: "Configura tus servicios",
		description: "Agrega los proveedores de IA que necesites desde el icono de ajustes en la barra superior. Puedes configurar Ollama, AWS Bedrock, OpenAI o cualquier endpoint personalizado. Lo haces una vez y todas las herramientas lo usan.",
		color: "sky" as const,
	},
	{
		icon: (
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
				<rect x="3" y="3" width="7" height="7" rx="1" />
				<rect x="14" y="3" width="7" height="7" rx="1" />
				<rect x="3" y="14" width="7" height="7" rx="1" />
				<rect x="14" y="14" width="7" height="7" rx="1" />
			</svg>
		),
		title: "Elige tu herramienta",
		description: "Una vez configurados tus servicios, solo elige la herramienta que necesites. Chat con IA para conversar, Mayeutica para aprender con tests, Akiba para tus finanzas. Y vendran mas.",
		color: "amber" as const,
	},
];

const colorStyles = {
	primary: { bg: "bg-primary-light/60", iconBox: "bg-primary-light/60" },
	sky: { bg: "bg-accent-sky-light/60", iconBox: "bg-accent-sky-light/60" },
	rose: { bg: "bg-accent-rose-light/60", iconBox: "bg-accent-rose-light/60" },
	amber: { bg: "bg-accent-amber-light/60", iconBox: "bg-accent-amber-light/60" },
};

export default function WelcomePage() {
	const [currentStep, setCurrentStep] = useState(0);
	const router = useRouter();

	const handleFinish = () => {
		try {
			localStorage.setItem(ONBOARDING_KEY, "true");
		} catch {}
		router.push("/app");
	};

	const next = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prev = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)] px-4">
			<div className="w-full max-w-md">
				<div className="text-center mb-8">
					<h1 className="font-display font-800 text-3xl tracking-tight text-text mb-2">
						Bienvenido a OpenBYOK
					</h1>
					<p className="text-text-muted text-sm">
						3 pasos y estas listo para comenzar.
					</p>
				</div>

				<div className="flex items-center justify-center gap-2 mb-8">
					{steps.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrentStep(i)}
							className={`h-1.5 rounded-full transition-all duration-300 ${
								i === currentStep
									? "w-8 bg-primary"
									: i < currentStep
									? "w-1.5 bg-primary/40"
									: "w-1.5 bg-border"
							}`}
							aria-label={`Paso ${i + 1}`}
						/>
					))}
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={currentStep}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -20 }}
						transition={{ duration: 0.3 }}
						className="rounded-3xl bg-surface border border-border p-8 text-center"
					>
						<div className={`w-16 h-16 rounded-2xl ${colorStyles[steps[currentStep].color].iconBox} flex items-center justify-center mx-auto mb-5`}>
							{steps[currentStep].icon}
						</div>
						<div className="flex items-center justify-center gap-2 mb-3">
							<span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-light/60 text-primary-dark">
								Paso {currentStep + 1} de {steps.length}
							</span>
						</div>
						<h2 className="font-display font-700 text-xl text-text mb-3">
							{steps[currentStep].title}
						</h2>
						<p className="text-text-muted text-sm leading-relaxed">
							{steps[currentStep].description}
						</p>
					</motion.div>
				</AnimatePresence>

				<div className="flex items-center justify-between mt-6">
					<button
						onClick={prev}
						className={`px-4 py-2.5 rounded-xl font-display font-500 text-sm transition-all ${
							currentStep === 0
								? "invisible"
								: "bg-surface border border-border text-text-muted hover:text-text"
						}`}
					>
						Anterior
					</button>

					{currentStep < steps.length - 1 ? (
						<button
							onClick={next}
							className="px-6 py-2.5 rounded-xl bg-primary text-white font-display font-600 text-sm hover:bg-primary-dark transition-colors"
						>
							Siguiente
						</button>
					) : (
						<button
							onClick={handleFinish}
							className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white font-display font-600 text-sm hover:bg-primary-dark transition-colors"
						>
							Comenzar
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</button>
					)}
				</div>
			</div>
		</div>
	);
}