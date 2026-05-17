import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Pamiętaj, żeby tu wpisać nazwę swojego repozytorium z zadania!
  base: '/projektWebowe/', 
  plugins: [
    tailwindcss(),
  ],
})