import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@api": path.resolve(__dirname, "./src/services/api"),
            "@localStorage": path.resolve(__dirname, "./src/services/localstorage"),
            "@atoms": path.resolve(__dirname, "./src/ui/atoms"),
            "@molecules": path.resolve(__dirname, "./src/ui/molecules"),
            "@organisms": path.resolve(__dirname, "./src/ui/organisms"),
            "@templates": path.resolve(__dirname, "./src/ui/templates"),
            "@pages": path.resolve(__dirname, "./src/ui/pages"),
            "@model": path.resolve(__dirname, "./src/model"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@constants": path.resolve(__dirname, "./src/utils/constants"),
            "@typing": path.resolve(__dirname, "./src/utils/types"),
        },
    },
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss()]
        }
    }
});
