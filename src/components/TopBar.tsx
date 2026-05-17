"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTopBarActions } from "./TopBarContext";
import SettingsDrawer from "./SettingsDrawer";

const landingNavItems = [
	{ href: "#herramientas", label: "Herramientas" },
	{ href: "#filosofia", label: "Filosofia" },
	{ href: "https://github.com/jpgramajo/OpenBYOK", label: "GitHub", external: true },
];

type NavItem = { href: string; label: string; external?: boolean };

interface TopBarProps {
	variant?: "landing" | "tool";
}

export default function TopBar({ variant = "landing" }: TopBarProps) {
	const pathname = usePathname();
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { actions } = useTopBarActions();

	const navItems: NavItem[] = variant === "landing" ? landingNavItems : [];

	const toolNameMap: Record<string, string> = {
		"/app/welcome": "Bienvenido",
		"/app/chat": "Chat con IA",
		"/app/mayeutica": "Mayeutica",
		"/app/akiba": "Akiba",
	};

	const toolName = variant === "tool" ? toolNameMap[pathname] : undefined;

	return (
		<>
			<header className="sticky top-0 z-50 w-full backdrop-blur-md bg-bg/80 border-b border-border">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
					<div className="flex items-center gap-3 min-w-0">
						{variant === "tool" && (
							<>
								<Link href="/app" className="shrink-0" aria-label="Inicio">
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted hover:text-text transition-colors">
										<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
										<polyline points="9 22 9 12 15 12 15 22" />
									</svg>
								</Link>
								{toolName && (
									<>
										<span className="text-text-muted text-sm">/</span>
										<span className="font-display font-600 text-sm text-text truncate">
											{toolName}
										</span>
									</>
								)}
								{actions.left}
							</>
						)}
						{variant === "landing" && (
							<Link href="/" className="flex items-center gap-2 shrink-0">
								<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
										<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
									</svg>
								</div>
								<span className="font-display font-700 text-lg tracking-tight text-text">
									OpenBYOK
								</span>
							</Link>
						)}
					</div>

					<nav className="hidden md:flex items-center gap-6">
						{variant === "landing" && navItems.map((item) => {
							const isActive = !item.external && pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									target={item.external ? "_blank" : undefined}
									rel={item.external ? "noopener noreferrer" : undefined}
									className={`text-sm font-medium transition-colors duration-150 ${
										isActive ? "text-primary" : "text-text-muted hover:text-text"
									}`}
								>
									{item.label}
								</Link>
							);
						})}
						{variant === "tool" && actions.right}
						{variant === "tool" && (
							<button
								onClick={() => setSettingsOpen(true)}
								className="w-8 h-8 rounded-lg hover:bg-surface flex items-center justify-center text-text-muted hover:text-text transition-colors"
								aria-label="Configurar servicios"
							>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
									<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
									<circle cx="12" cy="12" r="3" />
								</svg>
							</button>
						)}
					</nav>

					<div className="flex items-center gap-2 md:hidden">
						{variant === "tool" && actions.right}
						{variant === "tool" && (
							<button
								onClick={() => setSettingsOpen(true)}
								className="w-8 h-8 rounded-lg hover:bg-surface flex items-center justify-center text-text-muted hover:text-text transition-colors"
								aria-label="Configurar servicios"
							>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
									<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
									<circle cx="12" cy="12" r="3" />
								</svg>
							</button>
						)}
						{variant === "landing" && (
							<button
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								className="w-8 h-8 rounded-lg hover:bg-surface flex items-center justify-center text-text-muted hover:text-text transition-colors"
								aria-label="Menu"
							>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									{mobileMenuOpen ? (
										<path d="M18 6L6 18M6 6l12 12" />
									) : (
										<>
											<line x1="3" y1="6" x2="21" y2="6" />
											<line x1="3" y1="12" x2="21" y2="12" />
											<line x1="3" y1="18" x2="21" y2="18" />
										</>
									)}
								</svg>
							</button>
						)}
					</div>
				</div>

				{mobileMenuOpen && variant === "landing" && (
					<div className="md:hidden border-t border-border bg-bg">
						<nav className="flex flex-col px-4 py-3 gap-1">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setMobileMenuOpen(false)}
									target={item.external ? "_blank" : undefined}
									rel={item.external ? "noopener noreferrer" : undefined}
									className="px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text hover:bg-surface transition-colors"
								>
									{item.label}
								</Link>
							))}
						</nav>
					</div>
				)}
			</header>

			<SettingsDrawer open={settingsOpen} onClose={() => setSettingsOpen(false)} />
		</>
	);
}