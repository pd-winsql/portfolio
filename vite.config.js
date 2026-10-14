import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Enables JSX and Fast Refresh when editing React components.
  base: './', // Keeps built asset URLs relative for hosting in a subdirectory.
});
