"use client";

import { motion, type Variants } from "motion/react";
import TopBar from "@/components/TopBar";
import { TopBarProvider } from "@/components/TopBarContext";

const staggerContainer: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.92 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const cardHover = {
	y: -6,
	transition: { duration: 0.25, ease: "easeOut" as const },
};

export default function Home() {
	return (
		<TopBarProvider>
		<div className="min-h-screen flex flex-col">
			<TopBar variant="landing" />

			<motion.section
				initial="hidden"
				animate="visible"
				variants={staggerContainer}
				className="relative px-6 pt-12 pb-24 sm:pt-20 sm:pb-32 overflow-hidden"
			>
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background:
							"radial-gradient(ellipse 80% 60% at 50% 20%, var(--primary-light), transparent), radial-gradient(ellipse 50% 50% at 80% 60%, var(--accent-lavender-light), transparent), radial-gradient(ellipse 60% 40% at 20% 70%, var(--accent-amber-light), transparent)",
					}}
				/>
				<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "256px" }} />

				<div className="relative max-w-3xl mx-auto text-center">
					<motion.div
						variants={fadeUp}
						className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light/60 text-primary-dark text-sm font-medium mb-8 backdrop-blur-sm border border-primary/20"
					>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
						Codigo abierto · MIT · Sin servidores
					</motion.div>

					<motion.h1
						variants={fadeUp}
						className="font-display font-800 text-5xl sm:text-7xl tracking-tight leading-[1.08] mb-6 text-text"
					>
						Tus herramientas.
						<br />
						<span className="text-primary">Tus llaves.</span>
						<br />
						Tu control.
					</motion.h1>

					<motion.p
						variants={fadeUp}
						className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-xl mx-auto mb-10"
					>
						Una plataforma de herramientas que vive en tu navegador.
						Configura tus servicios una vez y usalos en todas las
						herramientas que lo necesiten. Sin registro, sin pagos.
					</motion.p>

					<motion.div
						variants={fadeUp}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<a
							href="/app"
							className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-white font-display font-600 text-base hover:bg-primary-dark transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
						>
							Comenzar
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</a>
						<a
							href="#filosofia"
							className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-surface border border-border text-text font-display font-500 text-base hover:bg-border/50 transition-all duration-200"
						>
							Conocer mas
						</a>
					</motion.div>
				</div>
			</motion.section>

			<motion.section
				id="herramientas"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-80px" }}
				variants={staggerContainer}
				className="px-6 py-20 sm:py-28"
			>
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<motion.h2 variants={fadeUp} className="font-display font-700 text-3xl sm:text-4xl tracking-tight mb-4 text-text">
							Herramientas que te pertenecen
						</motion.h2>
						<motion.p variants={fadeUp} className="text-text-muted text-lg max-w-lg mx-auto">
							Configura tus servicios una vez en la plataforma y
							usolos en cada herramienta segun lo que necesite.
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<motion.div variants={scaleIn} whileHover={cardHover} className="group relative rounded-3xl bg-surface border border-border p-8 transition-colors duration-300 hover:border-accent-sky/40 overflow-hidden">
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-sky to-accent-sky/40" />
							<div className="w-14 h-14 rounded-2xl bg-accent-sky-light flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sky)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-xl mb-2 text-text">Chat con IA</h3>
							<p className="text-text-muted text-sm leading-relaxed mb-6">
								Conversa con modelos de lenguaje usando los proveedores
								que configures en la plataforma. Soporta Ollama, y
								pronto AWS Bedrock y mas.
							</p>
							<div className="flex items-center gap-2 flex-wrap">
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-sky-light text-accent-sky">Requiere IA</span>
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-surface border border-border text-text-muted">Ollama</span>
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-surface border border-border text-text-muted">Bedrock</span>
							</div>
						</motion.div>

						<motion.div variants={scaleIn} whileHover={cardHover} className="group relative rounded-3xl bg-surface border border-border p-8 transition-colors duration-300 hover:border-accent-rose/40 overflow-hidden">
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-rose to-accent-rose/40" />
							<div className="w-14 h-14 rounded-2xl bg-accent-rose-light flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-rose)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
									<path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-xl mb-2 text-text">Mayeutica</h3>
							<p className="text-text-muted text-sm leading-relaxed mb-6">
								Aprende a traves de tests inteligentes generados
								por IA. Usa los proveedores que ya configuraste en
								la plataforma.
							</p>
							<div className="flex items-center gap-2 flex-wrap">
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-rose-light text-accent-rose">Requiere IA</span>
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-rose-light text-accent-rose">Tests</span>
							</div>
						</motion.div>

						<motion.div variants={scaleIn} whileHover={cardHover} className="group relative rounded-3xl bg-surface border border-border p-8 transition-colors duration-300 hover:border-accent-amber/40 overflow-hidden">
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-amber to-accent-amber/40" />
							<div className="w-14 h-14 rounded-2xl bg-accent-amber-light flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
									<line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-xl mb-2 text-text">Akiba</h3>
							<p className="text-text-muted text-sm leading-relaxed mb-6">
								Control financiero personal. Registra ingresos y gastos,
								genera informes e insights. Funciona con los servicios
								de la plataforma que necesite.
							</p>
							<div className="flex items-center gap-2 flex-wrap">
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-amber-light text-accent-amber">IA opcional</span>
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-amber-light text-accent-amber">Local</span>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>

			<motion.section
				id="filosofia"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-80px" }}
				variants={staggerContainer}
				className="px-6 py-20 sm:py-28 bg-surface/50"
			>
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-16">
						<motion.h2 variants={fadeUp} className="font-display font-700 text-3xl sm:text-4xl tracking-tight mb-4 text-text">
							La filosofia detras
						</motion.h2>
						<motion.p variants={fadeUp} className="text-text-muted text-lg max-w-lg mx-auto">
							OpenBYOK existe porque creemos que tus herramientas
							deberian ser tan libres como tu.
						</motion.p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<motion.div variants={fadeUp} className="text-center p-6">
							<div className="w-16 h-16 rounded-2xl bg-primary-light/60 flex items-center justify-center mx-auto mb-5">
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
									<rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-lg mb-2 text-text">Sin servidores</h3>
							<p className="text-text-muted text-sm leading-relaxed">
								Todo permanece en tu navegador. No recolectamos,
								almacenamos ni transmitimos tus datos. Lo que es
								tuyo, se queda contigo.
							</p>
						</motion.div>

						<motion.div variants={fadeUp} className="text-center p-6">
							<div className="w-16 h-16 rounded-2xl bg-accent-lavender-light/60 flex items-center justify-center mx-auto mb-5">
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-lavender)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-lg mb-2 text-text">Codigo abierto</h3>
							<p className="text-text-muted text-sm leading-relaxed">
								Licencia MIT. Puedes auditar, modificar y
								redistribuir el codigo. La transparencia no es
								opcional.
							</p>
						</motion.div>

						<motion.div variants={fadeUp} className="text-center p-6">
							<div className="w-16 h-16 rounded-2xl bg-accent-amber-light/60 flex items-center justify-center mx-auto mb-5">
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-lg mb-2 text-text">Configura una vez, usa en todo</h3>
							<p className="text-text-muted text-sm leading-relaxed">
								Agrega tus servicios en la plataforma y cada
								herramienta los usa automaticamente segun lo que
								necesite. Sin repetir configuraciones.
							</p>
						</motion.div>
					</div>

					<motion.div
						variants={scaleIn}
						className="mt-16 rounded-3xl bg-bg border border-border p-8 sm:p-12 text-center relative overflow-hidden"
					>
						<div
							className="absolute inset-0 pointer-events-none opacity-50"
							style={{
								background:
									"radial-gradient(ellipse 40% 60% at 30% 50%, var(--primary-light), transparent), radial-gradient(ellipse 40% 60% at 70% 50%, var(--accent-lavender-light), transparent)",
							}}
						/>
						<div className="relative">
							<h3 className="font-display font-800 text-2xl sm:text-3xl tracking-tight mb-3 text-text">
								¿Sin registro? ¿Sin pago?
							</h3>
							<p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
								Asi es. Sin cuentas, sin planes, sin trials. Configuras
								tus servicios una vez en la plataforma y cada
								herramienta los consume segun lo que necesite. Simple.
							</p>
						</div>
					</motion.div>
				</div>
			</motion.section>

			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-80px" }}
				variants={staggerContainer}
				className="px-6 py-20 sm:py-28"
			>
				<div className="max-w-3xl mx-auto text-center">
					<motion.h2 variants={fadeUp} className="font-display font-700 text-3xl sm:text-4xl tracking-tight mb-4 text-text">
						Comienza ahora
					</motion.h2>
					<motion.p variants={fadeUp} className="text-text-muted text-lg mb-10 max-w-lg mx-auto">
						Entra al dashboard, configura tus servicios y elige
						la herramienta que necesites. Sin pasos innecesarios.
					</motion.p>
					<motion.div variants={fadeUp}>
						<motion.a
							href="/app"
							whileHover={{ y: -3, scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl bg-primary text-white font-display font-600 text-lg shadow-lg shadow-primary/25"
						>
							Ir al Dashboard
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</motion.a>
					</motion.div>
				</div>
			</motion.section>

			<footer className="px-6 py-12 border-t border-border">
				<div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
					<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-between">
						<div className="flex items-center gap-2.5">
							<div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
								</svg>
							</div>
							<span className="font-display font-600 text-sm text-text-muted">OpenBYOK</span>
						</div>
						<p className="text-text-muted text-xs">Codigo abierto bajo licencia MIT. Tus datos, tu control.</p>
					</div>
					<div className="flex items-center gap-1.5 text-text-muted text-xs">
						Hecho con
						<svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-rose)" stroke="none" className="inline-block"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
						por
						<a href="https://jpgramajo.com" target="_blank" rel="noopener noreferrer" className="font-display font-600 text-text hover:text-primary transition-colors duration-200 underline underline-offset-2 decoration-border hover:decoration-primary">Juan Pablo Gramajo</a>
						<a href="https://github.com/jpgramajo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center ml-1 hover:text-text transition-colors duration-200" aria-label="GitHub de Juan Pablo Gramajo">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
						</a>
					</div>
				</div>
			</footer>
		</div>
		</TopBarProvider>
	);
}