module.exports = {
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif']
        },
        extend: {
            'print': {'raw': 'print'}
        },
        colors: {
            darkGreen: '#112530',
            medGreen: '#2f4f5a',
            lightWarm: '#c4a384',
            warm: '#b56f3a',
            pale: '#ece9e4',
            white: '#eeeeee',
            gray: '#aaaaaa',
            black: '#333333'
        },
        scale: {
            '102': '1.02',
            '105': '1.05'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
