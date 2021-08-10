module.exports = {
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif']
        },
        extend: {},
        colors: {
            darkGreen: '#112530',
            medGreen: '#2f4f5a',
            lightWarm: '#c4a384',
            warm: '#b56f3a',
            pale: '#ece9e4'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
