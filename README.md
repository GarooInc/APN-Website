# APN Website

Sitio web institucional para la Alianza para la Prevención de la Desnutrición en Guatemala.

Construido con React + Vite + Tailwind. Deploy en Netlify.

## Stack

- React 18
- Vite
- Tailwind CSS
- React Router v6

## Estructura

```
src/
├── pages/       # Home, Allies, Board, Evidence, Materials, News
├── components/  # Header, Footer, Button, Card, Section
├── layout/
├── context/     # LanguageContext (ES/EN)
├── hooks/
└── utils/
```

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Formulario de contacto (Netlify Forms)

El formulario de `/board` envía a Netlify Forms (formulario `contacto`). Los avisos por correo se configuran en Netlify → Forms → Form notifications.

Variables de entorno en Netlify:

| Variable | Scope | Uso |
| --- | --- | --- |
| `SITE_RECAPTCHA_KEY` | Builds y Runtime | Clave pública reCAPTCHA v2 (se muestra en el sitio) |
| `SITE_RECAPTCHA_SECRET` | Runtime | Clave secreta; Netlify valida el captcha en el servidor |

Sin `SITE_RECAPTCHA_KEY` el captcha no se muestra y el formulario queda protegido solo por el honeypot y el filtro antispam de Netlify. Para probar en local, usa `SITE_RECAPTCHA_KEY=... npm run dev` con una clave que incluya `localhost` en sus dominios.

---

Fernando Ortiz — Dev House
