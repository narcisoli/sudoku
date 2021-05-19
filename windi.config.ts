import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
    darkMode: 'class', // or 'media'
    include: ['src/**/*.{svelte,html,jsx,tsx}'],

    theme: {
        fontFamily: {
            'sans': ['Aqum'],
            'serif': ['Cyrene',],
            'mono': ['Cyrene', 'SFMono-Regular'],
        },
        extend: {


        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.red,
            yellow: colors.yellow,
            blue: { ...colors.emerald as any, 900: "#e8e6e6", 800: "#c7cf00", 700: "#f0e9e9" },
            primary: "#c7cf00",
            paul: "#fff",
            marian: "#000"
        }
    },
    plugins: [

        plugin(({ addUtilities }) => {
            const newUtilities = {
                '.nema': {
                    display: 'none',
                },

            }
            addUtilities(newUtilities)
        }),
        // require('windicss/plugin/filters'),
        // require('windicss/plugin/forms'),
        // require('windicss/plugin/aspect-ratio'),
        // require('windicss/plugin/line-clamp'),
        // require('windicss/plugin/typography')({
        //     modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
        // }),
    ],
})