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
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}

module.exports = config