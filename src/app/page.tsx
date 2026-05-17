export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="w-full px-6 py-5 flex items-center justify-between max-w-7xl mx-auto">
				<div className="flex items-center gap-2.5">
					<div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="white"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
						</svg>
					</div>
					<span className="font-display font-700 text-xl tracking-tight text-text">
						OpenBYOK
					</span>
				</div>
				<nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-text-muted">
					<a
						href="#herramientas"
						className="hover:text-text transition-colors duration-200"
					>
						Herramientas
					</a>
					<a
						href="#filosofia"
						className="hover:text-text transition-colors duration-200"
					>
						Filosofía
					</a>
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-text transition-colors duration-200 flex items-center gap-1.5"
					>
						GitHub
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
							<polyline points="15 3 21 3 21 9" />
							<line x1="10" y1="14" x2="21" y2="3" />
						</svg>
					</a>
				</nav>
			</header>

			<section className="relative px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden">
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background:
							"radial-gradient(ellipse 80% 60% at 50% 20%, var(--primary-light), transparent), radial-gradient(ellipse 50% 50% at 80% 60%, var(--accent-lavender-light), transparent), radial-gradient(ellipse 60% 40% at 20% 70%, var(--accent-amber-light), transparent)",
					}}
				/>
				<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "256px" }} />

				<div className="relative max-w-3xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light/60 text-primary-dark text-sm font-medium mb-8 backdrop-blur-sm border border-primary/20">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
						Código abierto · MIT · Sin servidores
					</div>

					<h1 className="font-display font-800 text-5xl sm:text-7xl tracking-tight leading-[1.08] mb-6 text-text">
						Tus herramientas.
						<br />
						<span className="text-primary">Tus llaves.</span>
						<br />
						Tu control.
					</h1>

					<p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-xl mx-auto mb-10">
						Una plataforma de herramientas que vive en tu navegador.
						Configura tus servicios de IA una vez y usalos en todas las
						herramientas que lo necesiten. Sin registro, sin pagos.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="#herramientas"
							className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-white font-display font-600 text-base hover:bg-primary-dark transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
						>
							Explorar herramientas
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M12 5v14M19 12l-7 7-7-7" />
							</svg>
						</a>
						<a
							href="#filosofia"
							className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-surface border border-border text-text font-display font-500 text-base hover:bg-border/50 transition-all duration-200"
						>
							Conocer más
						</a>
					</div>
				</div>
			</section>

			<section id="herramientas" className="px-6 py-20 sm:py-28">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="font-display font-700 text-3xl sm:text-4xl tracking-tight mb-4 text-text">
							Herramientas que te pertenecen
						</h2>
						<p className="text-text-muted text-lg max-w-lg mx-auto">
							Configura tus servicios de IA una vez en la plataforma y
							usolos en cada herramienta segun lo que necesite.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="group relative rounded-3xl bg-surface border border-border p-8 transition-all duration-300 hover:shadow-lg hover:shadow-shadow-md hover:-translate-y-1 hover:border-accent-sky/40 overflow-hidden">
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-sky to-accent-sky/40" />
							<div className="w-14 h-14 rounded-2xl bg-accent-sky-light flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="var(--accent-sky)"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-xl mb-2 text-text">
								Chat con IA
							</h3>
							<p className="text-text-muted text-sm leading-relaxed mb-6">
								Conversa con modelos de lenguaje usando los proveedores
								que configures en la plataforma. Soporta Ollama, y
								pronto AWS Bedrock y mas.
							</p>
							<div className="flex items-center gap-2 flex-wrap mb-6">
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-sky-light text-accent-sky">
									Requiere IA
								</span>
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-surface border border-border text-text-muted">
									Ollama
								</span>
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-surface border border-border text-text-muted">
									Bedrock
								</span>
							</div>
							<a
								href="/chat"
								className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-accent-sky group-hover:gap-2.5 transition-all duration-200"
							>
								Ir al Chat
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>

						<div className="group relative rounded-3xl bg-surface border border-border p-8 transition-all duration-300 hover:shadow-lg hover:shadow-shadow-md hover:-translate-y-1 hover:border-accent-rose/40 overflow-hidden">
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-rose to-accent-rose/40" />
							<div className="w-14 h-14 rounded-2xl bg-accent-rose-light flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="var(--accent-rose)"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M9 11l3 3L22 4" />
									<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-xl mb-2 text-text">
								Mayuéutica
							</h3>
							<p className="text-text-muted text-sm leading-relaxed mb-6">
								Aprende a traves de tests inteligentes generados
								por IA. Usa los proveedores que ya configuraste en
								la plataforma.
							</p>
							<div className="flex items-center gap-2 flex-wrap mb-6">
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-rose-light text-accent-rose">
									Requiere IA
								</span>
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-rose-light text-accent-rose">
									Tests
								</span>
							</div>
							<a
								href="/mayeutica"
								className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-accent-rose group-hover:gap-2.5 transition-all duration-200"
							>
								Ir a Mayuéutica
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>

						<div className="group relative rounded-3xl bg-surface border border-border p-8 transition-all duration-300 hover:shadow-lg hover:shadow-shadow-md hover:-translate-y-1 hover:border-accent-amber/40 overflow-hidden">
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-amber to-accent-amber/40" />
							<div className="w-14 h-14 rounded-2xl bg-accent-amber-light flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="var(--accent-amber)"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="12" y1="1" x2="12" y2="23" />
									<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-xl mb-2 text-text">
								Akiba
							</h3>
							<p className="text-text-muted text-sm leading-relaxed mb-6">
								Control financiero personal. Registra ingresos y gastos,
								genera informes e insights. Funciona con los servicios
								de la plataforma que necesite.
							</p>
							<div className="flex items-center gap-2 flex-wrap mb-6">
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-amber-light text-accent-amber">
									IA opcional
								</span>
								<span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent-amber-light text-accent-amber">
									Local
								</span>
							</div>
							<a
								href="/akiba"
								className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-accent-amber group-hover:gap-2.5 transition-all duration-200"
							>
								Ir a Akiba
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id="filosofia" className="px-6 py-20 sm:py-28 bg-surface/50">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="font-display font-700 text-3xl sm:text-4xl tracking-tight mb-4 text-text">
							La filosofía detrás
						</h2>
						<p className="text-text-muted text-lg max-w-lg mx-auto">
							OpenBYOK existe porque creemos que tus herramientas
							deberían ser tan libres como tú.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="w-16 h-16 rounded-2xl bg-primary-light/60 flex items-center justify-center mx-auto mb-5">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="var(--primary)"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
									<path d="M7 11V7a5 5 0 0 1 10 0v4" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-lg mb-2 text-text">
								Sin servidores
							</h3>
							<p className="text-text-muted text-sm leading-relaxed">
								Todo permanece en tu navegador. No recolectamos,
								almacenamos ni transmitimos tus datos. Lo que es
								tuyo, se queda contigo.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-16 h-16 rounded-2xl bg-accent-lavender-light/60 flex items-center justify-center mx-auto mb-5">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="var(--accent-lavender)"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-lg mb-2 text-text">
								Código abierto
							</h3>
							<p className="text-text-muted text-sm leading-relaxed">
								Licencia MIT. Puedes auditar, modificar y
								redistribuir el código. La transparencia no es
								opcional.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-16 h-16 rounded-2xl bg-accent-amber-light/60 flex items-center justify-center mx-auto mb-5">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="var(--accent-amber)"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<polyline points="7 10 12 15 17 10" />
									<line x1="12" y1="15" x2="12" y2="3" />
								</svg>
							</div>
							<h3 className="font-display font-700 text-lg mb-2 text-text">
								Configura una vez, usa en todo
							</h3>
							<p className="text-text-muted text-sm leading-relaxed">
								Agrega tus proveedores de IA en la plataforma y cada
								herramienta los usa automaticamente segun lo que
								necesite. Sin repetir configuraciones.
							</p>
						</div>
					</div>

					<div className="mt-16 rounded-3xl bg-bg border border-border p-8 sm:p-12 text-center relative overflow-hidden">
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
								tus servicios de IA una vez en la plataforma y cada
								herramienta los consume segun lo que necesite. Simple.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="px-6 py-20 sm:py-28">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="font-display font-700 text-3xl sm:text-4xl tracking-tight mb-4 text-text">
						Comienza ahora
					</h2>
					<p className="text-text-muted text-lg mb-10 max-w-md mx-auto">
						Configura tus servicios y elige una herramienta.
						No hay pasos innecesarios.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="/chat"
							className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-accent-sky text-white font-display font-600 text-base hover:brightness-110 transition-all duration-200 shadow-md shadow-accent-sky/20 hover:-translate-y-0.5"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
							</svg>
							Chat con IA
						</a>
						<a
							href="/mayeutica"
							className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-accent-rose text-white font-display font-600 text-base hover:brightness-110 transition-all duration-200 shadow-md shadow-accent-rose/20 hover:-translate-y-0.5"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M9 11l3 3L22 4" />
								<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
							</svg>
							Mayuéutica
						</a>
						<a
							href="/akiba"
							className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-accent-amber text-white font-display font-600 text-base hover:brightness-110 transition-all duration-200 shadow-md shadow-accent-amber/20 hover:-translate-y-0.5"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="12" y1="1" x2="12" y2="23" />
								<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
							</svg>
							Akiba
						</a>
					</div>
				</div>
			</section>

			<footer className="px-6 py-12 border-t border-border">
				<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-2.5">
						<div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="white"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
							</svg>
						</div>
						<span className="font-display font-600 text-sm text-text-muted">
							OpenBYOK
						</span>
					</div>
					<p className="text-text-muted text-xs">
						Código abierto bajo licencia MIT. Tus datos, tu control.
					</p>
				</div>
			</footer>
		</div>
	);
}