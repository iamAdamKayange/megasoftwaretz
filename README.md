# MegaSoftware Company Limited

Responsive company website for MegaSoftware Company Limited, built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Available commands

- `npm run dev` — start the local development server.
- `npm run build` — create the production build in `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run Oxlint.

## Site sections

- Home, services, selected work, company information, leadership, careers, and contact.
- Adam Kayange’s Founder & Chief Executive Officer section uses `public/images/adam.webp`.
- Contact details: `megasoftwarecompanytz@gmail.com` and `+255 629 095 954`.
- The contact form prepares a copyable enquiry and links to the company email. The careers form prepares an application email in the visitor’s mail app. Visitors must send their messages; applicants should attach their CV or resume.
- Motion effects respect the `prefers-reduced-motion` accessibility setting.

## Deployment

Build with `npm run build` and deploy the generated `dist/` directory to a static hosting provider that supports single-page Vite apps.
