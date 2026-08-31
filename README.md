<h1 align="center">VoxLeap</h1>

<p align="center">🇪🇸 Español - <a href="README.en.md">🇬🇧 English</a></p>

<p align="center">Estudio global de coaching de comunicación en inglés</p>

---

**VoxLeap** es el sitio web de un estudio de coaching de comunicación que ayuda a profesionales a desarrollar sus habilidades en inglés a través de conversaciones que importan. Incluye una landing editorial y un test de nivel de inglés interactivo para profesionales técnicos.

## ✨ Características

**Landing (`/`)**
- Hero con haces de luz orgánicos animados (negro, blanco y violeta).
- Franja de clientes con logos monocromáticos (Microsoft, LVMH, Iron Mountain, Grey, YPF, entre otros).
- Manifiesto con frases que se iluminan al hacer scroll.
- Sección de programas: 1:1 Coaching, Corporate Groups, Global Architects y MAIA Bootcamp.
- Sección founder con retrato en blanco y negro sobre panel violeta.

**English Level Check (`/maia`)**
- 20 preguntas de gramática, lectura y listening + respuesta abierta de escritura.
- Audio con control de velocidad (0.75× / 1× / 1.25×).
- Barra de progreso y puntaje automático con niveles CEFR (A1 → C2).
- Pantalla de resultado con call to action y compartir en LinkedIn / WhatsApp.
- Envío de respuestas por email vía FormSubmit, con consentimiento de privacidad obligatorio.

**Calidad**
- SEO completo: metadata Open Graph/Twitter, `sitemap.xml`, `robots.txt`, imagen OG generada y JSON-LD.
- Accesibilidad: skip link, ARIA (radiogroups, progressbar, alertas), contraste AA y soporte de `prefers-reduced-motion`.
- Rendimiento: imágenes WebP optimizadas, logos inline (sin requests extra) y audio comprimido.
- Páginas legales: `/privacy` y `/terms`.
- Security headers configurados en `next.config.ts`.

## 🛠️ Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19
- TypeScript
- CSS por secciones (`src/styles/`) + CSS Module para MAIA
- Fuente Inter auto-alojada vía `next/font`

## 🚀 Scripts

```bash
pnpm install    # instalar dependencias
pnpm dev        # servidor de desarrollo
pnpm build      # build de producción
pnpm start      # servidor de producción
pnpm lint       # eslint
```

## 📁 Estructura

```
src/
├── app/
│   ├── maia/          # Test English Level Check (client component + CSS Module)
│   ├── privacy/       # Política de privacidad
│   ├── terms/         # Términos de servicio
│   ├── layout.tsx     # Root layout, metadata y JSON-LD
│   ├── page.tsx       # Landing
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/        # header, scroll-reveal, maia-test, brand-marks
└── styles/            # CSS global por sección
public/
└── logos/             # SVGs de marcas
```

## 🔗 Rutas

| Ruta      | Contenido                             |
| --------- | ------------------------------------- |
| `/`       | Landing principal                     |
| `/maia`   | Test de nivel de inglés técnico       |
| `/privacy`| Política de privacidad                |
| `/terms`  | Términos de servicio                  |

> **Nota:** el dominio `https://voxleap.com` usado en metadata, sitemap y robots es un placeholder; reemplazalo por el dominio real antes de publicar.

## 📄 Licencia

Uso privado. Contacto: sandovalmatiasezequiel@gmail.com