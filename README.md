# OpenBYOK

**Tus herramientas. Tus llaves. Tu control.**

Suite de herramientas de código abierto que vive en tu navegador. Sin registro, sin pagos, sin datos en la nube. Configura tus servicios de IA una vez y úsalos en todas las herramientas que lo necesiten.

## Herramientas

| Herramienta | Descripción | Requiere IA |
|---|---|---|
| **Chat con IA** | Conversa con modelos de lenguaje usando los proveedores que configures | Sí |
| **Mayuéutica** | Aprende a través de tests inteligentes generados por IA | Sí |
| **Akiba** | Control financiero personal. Registra ingresos, gastos e insights | Opcional |

## Filosofía

- **Sin servidores** — Todo permanece en tu navegador. No recolectamos ni almacenamos nada.
- **Código abierto** — Licencia MIT. Puedes auditar, modificar y redistribuir.
- **Configura una vez, usa en todo** — Agrega tus proveedores de IA en la plataforma y cada herramienta los consume según lo que necesite.

## Stack

- [Next.js](https://nextjs.org) con App Router
- [OpenNext](https://opennext.js.org) para despliegue en [Cloudflare](https://cloudflare.com)
- [Tailwind CSS](https://tailwindcss.com) v4

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue

```bash
npm run deploy
```

## Licencia

[MIT](LICENSE)