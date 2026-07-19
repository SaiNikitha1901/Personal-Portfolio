import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standard Vite + React config. Nothing fancy on purpose — see the
// README if you ever need to add path aliases or a proxy later.
export default defineConfig({
  plugins: [react()],
});
