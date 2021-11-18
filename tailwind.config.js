const colors = require("tailwindcss/colors");

module.exports = {
    purge: {
        content: [
            './dist/index.html',
            './dist/privacy.html',
            './dist/cookies.html'
        ],
        options: {
            keyframes: true,
            fontFace: true,
        },

    },
    darkMode: 'media', // false or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            indigo: colors.indigo,
            red: colors.red,
            blue: colors.blue,
            green: colors.green,
        }
    },
    variants: {
        extend: {
            display: ['dark'],
        },
    },
};

