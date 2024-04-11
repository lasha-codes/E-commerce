import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        spanishGray: 'hsl(0, 0%, 60%)',
        sonicSilver: 'hsl(0, 0%, 47%)',
        eerieBlack: 'hsl(0, 0%, 13%)',
        salmonPink: 'hsl(353, 100%, 78%)',
        sandyBrown: 'hsl(29, 90%, 65%)',
        bitterSweet: 'hsl(0, 100%, 70%)',
        oceanGreen: 'hsl(152, 51%, 52%)',
        cultured: 'hsl(0, 0%, 93%)',
      },
    },
  },
  plugins: [],
}
export default config
