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
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#ff7aa2',
                    secondary: '#e05780',
                    accent: '#8a2846',
                    neutral: '#602437',
                    'base-100': '#fbcfe8',
                    info: '#0ea5e9',
                    success: '#22c55e',
                    warning: '#ffbc42',
                    error: '#e11d48',
                },
            },
        ],
    },
    plugins: [daisyui],
}
export default config
