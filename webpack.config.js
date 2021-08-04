// стандартное обращение к файловой системе в среде ноды
const path = require('path');

//плагин очистки
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//плагин для работы с html
const HtmlWebpackPlugin = require('html-webpack-plugin')




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
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }

}