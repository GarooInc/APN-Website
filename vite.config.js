import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const recaptchaKey = env.SITE_RECAPTCHA_KEY || '';

  return {
    plugins: [
      react(),
      {
        // Netlify solo exige el captcha si el formulario estático lo declara;
        // sin clave configurada se omite para no rechazar todos los envíos.
        name: 'netlify-form-recaptcha',
        transformIndexHtml(html) {
          return html.replace(
            'data-netlify-recaptcha-placeholder',
            recaptchaKey ? 'data-netlify-recaptcha="true"' : ''
          );
        },
      },
    ],
    // Expone SITE_RECAPTCHA_KEY (la misma variable que usa Netlify) al frontend.
    // SITE_RECAPTCHA_SECRET no coincide con este prefijo y no se expone.
    envPrefix: ['VITE_', 'SITE_RECAPTCHA_KEY'],
    server: {
      port: 3000,
      open: true,
    },
  };
});
