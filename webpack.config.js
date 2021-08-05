// стандартное обращение к файловой системе в среде ноды
const path = require('path');

//плагин очистки
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//плагин для работы с html
const HtmlWebpackPlugin = require('html-webpack-plugin');

//плагин для сервера
const webpack = require("webpack");




//Объект настроек вебпака
module.exports = {

    //точка входа
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },

    //точка выхода
    output: {
        //задаст путь и создаст папку для выходных материалов
        path: path.resolve(__dirname, './dist'),

        //зададим имена создаваемым файлам
        filename: '[name].bundle.js'
    },


    plugins: [

        //конструктор плагина очистки
        new CleanWebpackPlugin(),

        //конструктор плагина html
        new HtmlWebpackPlugin({
            //настройка заголовка в шаблоне
            title: 'title in webpack settings',
            //задать путь к шаблону
            template: path.resolve(__dirname, './src/template.html'),
            //зададим имя создаваемому файлу
            filename: 'index.html',
            //зададим куда вставлять скрипты js
            inject: 'body',

        }),

        //конструктор плагина сервера
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            {
                //правила работы с бабелом
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                //правила работы с картинками(достаточно правил если вебпак-5)
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
            },

            {
                //правила для шрифтов и спрайтов и просто svg
                test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
                //запись inline будет вставлять инлайново в html
                type: "assets/inline"
            },

            {
                //правила для sass и css
                test: /\.(sass|css)$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            }
        ]
    },

    //настройки дев-сервера
    mode: "development",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "./dist"),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
}