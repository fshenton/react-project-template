/* eslint-disable prettier/prettier */
const path = require("path");
const src = path.resolve(__dirname, "src");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        port: 3000,
        hot: true,
        overlay: true,
    },
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            { test: /\.js|x$/, loader: "babel-loader", exclude: /node_modules/ },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
        })],
    resolve: {
        alias: {
            "SHARED": `${src}/shared`,
            "COMPONENTS": `${src}/components`
        }
    },
};
