"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Service {
	id: string;
	name: string;
	type: "ollama" | "bedrock" | "openai" | "custom";
	endpoint: string;
	apiKey: string;
}

type ServiceType = "ollama" | "bedrock" | "openai" | "custom";

const SERVICE_TYPES: { value: ServiceType; label: string; defaultEndpoint: string; requiresKey: boolean }[] = [
	{ value: "ollama", label: "Ollama", defaultEndpoint: "http://localhost:11434", requiresKey: false },
	{ value: "bedrock", label: "AWS Bedrock", defaultEndpoint: "", requiresKey: true },
	{ value: "openai", label: "OpenAI", defaultEndpoint: "https://api.openai.com/v1", requiresKey: true },
	{ value: "custom", label: "Personalizado", defaultEndpoint: "", requiresKey: true },
];

const STORAGE_KEY = "openbyok_services";

function loadServices(): Service[] {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}

function saveServices(services: Service[]) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
}

interface SettingsDrawerProps {
	open: boolean;
	onClose: () => void;
}

export default function SettingsDrawer({ open, onClose }: SettingsDrawerProps) {
	const [services, setServices] = useState<Service[]>([]);
	const [mounted, setMounted] = useState(false);
	const [adding, setAdding] = useState(false);
	const [editId, setEditId] = useState<string | null>(null);

	const [formType, setFormType] = useState<ServiceType>("ollama");
	const [formName, setFormName] = useState("");
	const [formEndpoint, setFormEndpoint] = useState("");
	const [formApiKey, setFormApiKey] = useState("");

	useEffect(() => {
		setServices(loadServices());
		setMounted(true);
	}, []);

	useEffect(() => {
		if (open) {
			setServices(loadServices());
			setMounted(true);
		}
	}, [open]);

	const resetForm = useCallback(() => {
		setFormType("ollama");
		setFormName("");
		setFormEndpoint("");
		setFormApiKey("");
		setAdding(false);
		setEditId(null);
	}, []);

	const handleTypeChange = (type: ServiceType) => {
		setFormType(type);
		const st = SERVICE_TYPES.find((s) => s.value === type);
		if (st) {
			setFormName(st.label);
			setFormEndpoint(st.defaultEndpoint);
		}
		if (type !== "ollama") setFormApiKey("");
	};

	const handleSave = () => {
		const id = editId || crypto.randomUUID();
		const srv: Service = {
			id,
			name: formName || SERVICE_TYPES.find((s) => s.value === formType)?.label || "Servicio",
			type: formType,
			endpoint: formEndpoint,
			apiKey: formApiKey,
		};
		const updated = editId
			? services.map((s) => (s.id === editId ? srv : s))
			: [...services, srv];
		setServices(updated);
		saveServices(updated);
		resetForm();
	};

	const handleDelete = (id: string) => {
		const updated = services.filter((s) => s.id !== id);
		setServices(updated);
		saveServices(updated);
	};

	const handleEdit = (service: Service) => {
		setEditId(service.id);
		setFormType(service.type);
		setFormName(service.name);
		setFormEndpoint(service.endpoint);
		setFormApiKey(service.apiKey);
		setAdding(true);
	};

	const typeStyles: Record<ServiceType, string> = {
		ollama: "bg-accent-sky-light text-accent-sky",
		bedrock: "bg-accent-amber-light text-accent-amber",
		openai: "bg-accent-rose-light text-accent-rose",
		custom: "bg-accent-lavender-light text-accent-lavender",
	};

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 bg-black/40 z-50"
						onClick={onClose}
					/>
					<motion.aside
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 30, stiffness: 300 }}
						className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-bg border-l border-border overflow-y-auto"
					>
						<div className="p-6">
							<div className="flex items-center justify-between mb-6">
								<h2 className="font-display font-700 text-xl text-text">
									Servicios
								</h2>
								<button
									onClick={onClose}
									className="w-8 h-8 rounded-lg hover:bg-surface flex items-center justify-center text-text-muted hover:text-text transition-colors"
									aria-label="Cerrar"
								>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M18 6L6 18M6 6l12 12" />
									</svg>
								</button>
							</div>

							<p className="text-text-muted text-sm mb-6">
								Configura tus proveedores de IA. Todo se almacena localmente en tu navegador.
							</p>

							{mounted && (
								<div className="space-y-3">
									{services.map((service) => (
										<div
											key={service.id}
											className="rounded-xl bg-surface border border-border p-4"
										>
											<div className="flex items-center justify-between gap-3">
												<div className="flex items-center gap-3 min-w-0">
													<div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${typeStyles[service.type]}`}>
														{service.type === "ollama" ? "Ol" : service.type === "bedrock" ? "AW" : service.type === "openai" ? "OA" : "CS"}
													</div>
													<div className="min-w-0">
														<p className="font-display font-600 text-sm text-text truncate">{service.name}</p>
														<p className="text-xs text-text-muted truncate">{service.endpoint || "Sin endpoint"}</p>
													</div>
												</div>
												<div className="flex items-center gap-1 shrink-0">
													<button
														onClick={() => handleEdit(service)}
														className="w-7 h-7 rounded-md hover:bg-border/50 flex items-center justify-center text-text-muted hover:text-text transition-colors"
														aria-label="Editar"
													>
														<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
															<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
															<path d="m15 5 4 4" />
														</svg>
													</button>
													<button
														onClick={() => handleDelete(service.id)}
														className="w-7 h-7 rounded-md hover:bg-accent-rose-light/50 flex items-center justify-center text-text-muted hover:text-accent-rose transition-colors"
														aria-label="Eliminar"
													>
														<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
															<path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
														</svg>
													</button>
												</div>
											</div>
										</div>
									))}

									{!adding && services.length === 0 && (
										<div className="rounded-xl bg-surface border border-dashed border-border p-8 text-center">
											<p className="text-text-muted text-sm mb-1">No hay servicios configurados</p>
											<p className="text-text-muted text-xs mb-4">Agrega un proveedor para comenzar.</p>
											<button
												onClick={() => { resetForm(); setAdding(true); handleTypeChange("ollama"); }}
												className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white font-display font-600 text-sm hover:bg-primary-dark transition-colors"
											>
												<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
												Agregar servicio
											</button>
										</div>
									)}

									{!adding && services.length > 0 && (
										<button
											onClick={() => { resetForm(); setAdding(true); handleTypeChange("ollama"); }}
											className="w-full rounded-xl border border-dashed border-border p-3 flex items-center justify-center gap-2 text-text-muted hover:text-text hover:border-primary/40 transition-colors"
										>
											<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
											<span className="font-display font-500 text-sm">Agregar servicio</span>
										</button>
									)}

									<AnimatePresence>
										{adding && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.2 }}
												className="overflow-hidden"
											>
												<div className="rounded-xl bg-surface border border-border p-5">
													<h3 className="font-display font-700 text-base text-text mb-4">
														{editId ? "Editar servicio" : "Nuevo servicio"}
													</h3>
													<div className="space-y-3">
														<div>
															<label className="block text-xs font-medium text-text mb-1.5">Tipo</label>
															<div className="grid grid-cols-2 gap-2">
																{SERVICE_TYPES.map((st) => (
																	<button
																		key={st.value}
																		onClick={() => handleTypeChange(st.value)}
																		className={`px-2.5 py-1.5 rounded-lg text-xs font-display font-500 transition-all ${
																			formType === st.value
																				? "bg-primary text-white"
																				: "bg-bg border border-border text-text-muted hover:text-text"
																		}`}
																	>
																		{st.label}
																	</button>
																))}
															</div>
														</div>
														<div>
															<label className="block text-xs font-medium text-text mb-1.5">Nombre</label>
															<input type="text" value={formName} onChange={(e) => setFormName(e.target.value)} placeholder="Mi servicio"
																className="w-full px-3 py-2 rounded-lg bg-bg border border-border text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
														</div>
														<div>
															<label className="block text-xs font-medium text-text mb-1.5">Endpoint</label>
															<input type="text" value={formEndpoint} onChange={(e) => setFormEndpoint(e.target.value)} placeholder="http://localhost:11434"
																className="w-full px-3 py-2 rounded-lg bg-bg border border-border text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
														</div>
														{formType !== "ollama" && (
															<div>
																<label className="block text-xs font-medium text-text mb-1.5">API Key</label>
																<input type="password" value={formApiKey} onChange={(e) => setFormApiKey(e.target.value)} placeholder="sk-..."
																	className="w-full px-3 py-2 rounded-lg bg-bg border border-border text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
																<p className="text-[11px] text-text-muted mt-1">Se almacena solo en tu navegador.</p>
															</div>
														)}
														{formType === "ollama" && (
															<div className="rounded-lg bg-accent-sky-light/30 border border-accent-sky/20 p-3">
																<p className="text-xs text-accent-sky">Ollama no requiere API key. Solo necesitas el endpoint.</p>
															</div>
														)}
													</div>
													<div className="flex items-center gap-2 mt-4">
														<button onClick={handleSave}
															className="px-4 py-2 rounded-lg bg-primary text-white font-display font-600 text-sm hover:bg-primary-dark transition-colors">
															{editId ? "Guardar cambios" : "Agregar"}
														</button>
														<button onClick={resetForm}
															className="px-4 py-2 rounded-lg bg-bg border border-border text-text-muted font-display font-500 text-sm hover:text-text transition-colors">
															Cancelar
														</button>
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							)}
						</div>
					</motion.aside>
				</>
			)}
		</AnimatePresence>
	);
}