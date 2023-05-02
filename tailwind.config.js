/** @type {import('tailwindcss').Config} */
import colors from  'tailwindcss/colors'
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            ...colors,
            /*background properties*/
            "default": 'var(--bg-default)',
            "primary":'var(--bg-primary)',
            "secondary": 'var(--bg-secondary)',
            "darker":'var(--bg-darker)',
            'text-primary': 'var(--text-primary)',
            'text-secondary': 'var(--text-secondary)',
            'text-mute': 'var(--text-mute)',
            'text-green':'var(--text-green)',
            'text-dark-primary' : 'var(--text-dark-primary)',


            /*    card properties*/
            'bg-card-primary': 'var(--bg-card-primary)',
            'bg-card-secondary': 'var(--bg-card-secondary)',
            'bg-card-darker': 'var(--bg-card-darker)',

            /*    buttons properties */
            'btn-primary': 'var(--btn-primary)'
        },
        extend: {},
    },
    plugins: [],
}

