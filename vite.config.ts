import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/my_portfolio/' : '/', // <-- only use /MealPlan/ for production
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
}));
