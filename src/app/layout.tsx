import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "OpenBYOK — Tus herramientas, tus llaves, tu control",
	description:
		"Suite de herramientas de código abierto. Sin servidores, sin pagos, sin registro. Trae tu propia API key y comienza.",
	openGraph: {
		title: "OpenBYOK — Tus herramientas, tus llaves, tu control",
		description:
			"Suite de herramientas de código abierto. Sin servidores, sin pagos, sin registro. Trae tu propia API key y comienza.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			</head>
			<body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}