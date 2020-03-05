const webpack = require("webpack")
const path = require("path")

let entry = "./assets/js/app.js"
let filebundle = "./bundle.js"
let folderpublic = "./public"
let mode = "development"

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
              test: /\.css/,
              use: [{
                loader: 'style-loader',
              }, {
                loader: 'css-loader',
                options: {
                  url: false
                }
              }]
            },
            {
              test: /\.png/,
              use: [{
                loader: 'url-loader',
              }]
            }
          ]
    }
}

module.exports = config