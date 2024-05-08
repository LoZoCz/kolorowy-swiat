import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            height: {
                headerHeight: 'var(--header-h)',
            },
            fontFamily: {
                inter: 'var(--fn-inter), sans-serif',
                libre: 'var(--fn-libreBasker), sans-serif',
            },
            padding: {
                header: 'var(--header-h)',
            },
            backgroundImage: {
                bodyBg: 'repeating-linear-gradient(45deg, #ec469933 0, #ec469933 4px, #fbd0e833 0, #fbd0e833 50%)',
            },
            backgroundSize: {
                bodyBgSize: '40px 40px',
            },
            animation: {
                iconsAnim: 'iconsMove 1s ease-in-out infinite',
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#ec4899',
                    'primary-content': '#fdf2f8',
                    secondary: '#c9184a',
                    'secondary-content': '#fdf2f8',
                    accent: '#ff0054',
                    'accent-content': '#fdf2f8',
                    neutral: '#f9a8d4',
                    'neutral-content': '#150a10',
                    'base-100': '#fbcfe8',
                    'base-200': '#dab4ca',
                    'base-300': '#ba99ac',
                    'base-content': '#151013',
                    info: '#38bdf8',
                    'info-content': '#010d15',
                    success: '#22c55e',
                    'success-content': '#000e03',
                    warning: '#facc15',
                    'warning-content': '#150f00',
                    error: '#dc2626',
                    'error-content': '#ffd9d4',
                },
            },
        ],
    },
    plugins: [daisyui],
}
export default config
