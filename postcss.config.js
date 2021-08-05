//настройка обработки css для поддержки старых браузеров
module.exports = {
    plugins: {
        "postcss-preset-env": {
            browsers: "last 2 versions",
        },
    },
};