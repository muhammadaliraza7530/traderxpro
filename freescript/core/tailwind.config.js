module.exports = {
    content: [
        './resources/views/templates/invester/user/dashboard.blade.php',
        './resources/views/user/markets.blade.php',
        '../assets/markets.js',
        './resources/views/templates/invester/layouts/master.blade.php',
        './resources/views/templates/invester/partials/dashboard_header.blade.php',
    ],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};