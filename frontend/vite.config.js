import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
const apiUrl = import.meta.env.VITE_API_URL;

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0",
        proxy: {
            "/api": {
                target: `${apiUrl}:5000`, // Backend endpoint
                changeOrigin: true, // change host origin
            },
        },
    },
});
