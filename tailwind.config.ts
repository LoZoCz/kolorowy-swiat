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
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#ff7aa2',
                    'primary-content': '#09090b',
                    secondary: '#8a2846',
                    'secondary-content': '#ebd3d7',
                    accent: '#e05780',
                    'accent-content': '#09090b ',
                    neutral: '#602437',
                    'neutral-content': '#e0d0d3',
                    'base-100': '#fce3f1',
                    'base-200': '#dab4ca',
                    'base-300': '#ba99ac',
                    'base-content': '#09090b',
                    info: '#0ea5e9',
                    'info-content': '#000a13',
                    success: '#22c55e',
                    'success-content': '#000e03',
                    warning: '#ffbc42',
                    'warning-content': '#160d01',
                    error: '#e11d48',
                    'error-content': '#ffd8d9',
                },
            },
        ],
    },
    plugins: [daisyui],
}
export default config
