"use client";

import { useEffect } from "react";
import { useTopBarActions } from "@/components/TopBarContext";

export default function ChatPage() {
	const { setActions } = useTopBarActions();

	useEffect(() => {
		setActions({
			right: (
				<button className="px-3 py-1.5 rounded-lg bg-accent-sky text-white text-xs font-display font-600 hover:brightness-110 transition-all">
					Nueva conversacion
				</button>
			),
		});
		return () => setActions({});
	}, [setActions]);

	return (
		<div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
			<div className="text-center">
				<div className="w-16 h-16 rounded-2xl bg-accent-sky-light flex items-center justify-center mx-auto mb-6">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sky)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
						<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
					</svg>
				</div>
				<h1 className="font-display font-700 text-2xl text-text mb-2">Chat con IA</h1>
				<p className="text-text-muted text-sm max-w-sm mx-auto">
					Proximamente. Configura tus servicios en el icono de ajustes.
				</p>
			</div>
		</div>
	);
}