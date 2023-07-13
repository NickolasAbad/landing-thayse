import react from '@vitejs/plugin-react'
import vsharp from "vite-plugin-vsharp"

// https://vitejs.dev/config/
export default ({
  plugins: [
    react(),
    vsharp
  ]
})
