import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Pamiętaj, żeby tu wpisać nazwę swojego repozytorium z zadania!
  base: '/nazwa-twojego-repozytorium/', 
  plugins: [
    tailwindcss(),
  ],
})