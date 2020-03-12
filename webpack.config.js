const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let entry = "./assets/js/app.js";
let filebundle = "./bundle.js";
let folderpublic = "./public";
let mode = "development";

let config = {
    mode: mode,
    entry: entry,
    output:{
        path: path.resolve(__dirname,folderpublic),
        filename: filebundle
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[hash:7].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
          ]
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            chunkFilter: (chunk) => {
                // Exclude uglification for the `vendor` chunk
                if (chunk.name === 'vendor') {
                  return false;
                }
      
                return true;
            },
            extractComments: "all",
          })
        ]
    }
};

module.exports = config;