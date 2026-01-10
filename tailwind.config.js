/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                spectral: ["var(--font-spectral)", "sans-serif"],
                DMSerif: ["var(--font-DMSerif)", 'sans-serif'],
                DMSans: ["var(--font-DMSans)", 'sans-serif']
            },
        },
    }
    ,
    plugins: [],
}