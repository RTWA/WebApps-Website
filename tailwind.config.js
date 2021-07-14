const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        './dist/*.html'
    ],
    darkMode: 'media', // false or 'media' or 'class'
    theme: {
        // colors: {
        //   'indigo': colors.indigo,
        //   'gray': colors.gray,
        //   'white': colors.white,
        //   'black': colors.black,
        // },
        // extend: {
        //     // colors: {
        //     //   'blue-gray': colors.blueGray,
        //     //   'light-blue': colors.sky,
        //     //   'orange': colors.orange,
        //     //   'lime': colors.lime,
        //     //   'fuchsia': colors.fuchsia
        //     // },
        //     // zIndex: {
        //     //     '-10': '-10',
        //     //     2: 2,
        //     //     3: 3,
        //     // },
        //     // width: {
        //     //     'xl': '36rem',
        //     // },
        //     // minHeight: {
        //     //     '64': '16rem',
        //     //     'screen-75': "75vh"
        //     // },
        //     // fontSize: {
        //     //     55: "55rem",
        //     // },
        // },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            inset: ["checked"],
            display: ['dark'],
        },
    },
    // variants: [
    //     "responsive",
    //     "group-hover",
    //     "focus-within",
    //     "first",
    //     "last",
    //     "odd",
    //     "even",
    //     "hover",
    //     "focus",
    //     "active",
    //     "visited",
    //     "disabled",
    // ],
};

