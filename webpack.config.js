const path = require("path")
const webpack = require("webpack")
const CopyWebPackPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TSLintPlugin = require("tslint-webpack-plugin")

module.exports = {
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    },
    context: path.resolve(__dirname, "src"),
    entry: {
        module: "./module.tsx"
    },
    devtool: "source-map",
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist"),
        libraryTarget: "amd"
    },
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    externals: [
        "lodash",
        "moment",
        "react",
        "react-dom",
        "@grafana/ui",
        "@grafana/runtime",
        "@grafana/toolkit",
        "@grafana/data"
    ],
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CopyWebPackPlugin([
            { from: "plugin.json", to: "."},
            { from: '../README.md', to: '.' },
            { from: 'partials/*', to: '.' },
            { from: "img/**", to: "."},
            { from: "data/*", to: "."}
        ])
    ],
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    {
                    loader: "babel-loader",
                    options: { presets: ["env"]},
                    },
                    "ts-loader",
                ],
                exclude: /(node_modules)/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoader: 1,
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }        
                }]
            }
        ]
    }
}