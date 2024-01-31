import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                backlog: {
                    light: '#6fbf73',
                    main: '#4caf50',
                    dark: '#357a38',
                },
                todo: {
                    light: '#33c9dc',
                    main: '#00bcd4',
                    dark: '#008394',
                },
                inprogress: {
                    light: '#bb6bc9',
                    main: '#ab47bc',
                    dark: '#773183',
                },
                done: {
                    light: '#4aedc4',
                    main: '#1de9b6',
                    dark: '#14a37f',
                },
            },
        },
    },
    plugins: [],
}

export default config
