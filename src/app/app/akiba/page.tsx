"use client";

import { useEffect } from "react";
import { useTopBarActions } from "@/components/TopBarContext";

export default function AkibaPage() {
	const { setActions } = useTopBarActions();

	useEffect(() => {
		setActions({
			right: (
				<button className="px-3 py-1.5 rounded-lg bg-accent-amber text-white text-xs font-display font-600 hover:brightness-110 transition-all">
					Nuevo registro
				</button>
			),
		});
		return () => setActions({});
	}, [setActions]);

	return (
		<div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
			<div className="text-center">
				<div className="w-16 h-16 rounded-2xl bg-accent-amber-light flex items-center justify-center mx-auto mb-6">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
						<line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
					</svg>
				</div>
				<h1 className="font-display font-700 text-2xl text-text mb-2">Akiba</h1>
				<p className="text-text-muted text-sm max-w-sm mx-auto">
					Proximamente. Control financiero personal.
				</p>
			</div>
		</div>
	);
}