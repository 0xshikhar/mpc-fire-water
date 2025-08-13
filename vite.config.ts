import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_MPC_FIRE_WATER_BASE ?? '/mpc-fire-water/',
  plugins: [react()],
});
