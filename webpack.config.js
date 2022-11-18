const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, "output"),
        filename : "bundle.js"
    },
    plugins : [
        new htmlWebpackPlugin({
            template : "./src/index.html",
            filename : "index.html",
        })
    ],
    module : {
        rules : [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
            

        ]
    },
    devServer: {
        client: {
          overlay: {
            errors: true,
            warnings: false,
          },
        },
      },

}