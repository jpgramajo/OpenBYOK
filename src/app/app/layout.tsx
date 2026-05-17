"use client";

import TopBar from "@/components/TopBar";
import { TopBarProvider } from "@/components/TopBarContext";

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<TopBarProvider>
			<div className="min-h-screen flex flex-col">
				<TopBar variant="tool" />
				<main className="flex-1">
					{children}
				</main>
			</div>
		</TopBarProvider>
	);
}