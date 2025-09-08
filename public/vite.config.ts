import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  // Load env variables for the current mode
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    server: {
      allowedHosts: ['quotes.obscuredev.space', 'ec2-13-126-10-207.ap-south-1.compute.amazonaws.com',],
      proxy: {
        '/api': {
          target: env.VITE_REACT_APP_BACKEND_BASEURL,
          changeOrigin: true,
          secure: false,
        },
      },
      host: true,
      port: 5173,
    },
  };
});
