/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
  
      "./components/**.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    
    
    
  ],
  blocklist: [
    'grid',
    'container'
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding:'2rem'
    },
    screens:{
      
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '767px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1360px',
      // => @media (min-width: 1536px) { ... }
    
    }
  },
  plugins: [],
}

