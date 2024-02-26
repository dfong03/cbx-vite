/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            slice: "slice 2s ease",
        },
        keyframes: {
            slice: {
                "0%": {
                    "background-size": "0% 0%",
                    "background-position": "center center",
                    "background-repeat": "no-repeat",
                },
                "100%": {
                    "background-size": "100% 100%",
                    "background-position": "center center",
                    "background-repeat": "no-repeat",
                },
            },
        },
        backgroundImage: {
            'hero': "url('./src/components/home/A-Hero/assets/Home_Page_Background.jpg')",
        },
    },
},
  plugins: [],
}

