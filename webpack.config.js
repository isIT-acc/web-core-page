const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// let htmlPageOptions = [
//   {
//     fileName: "index",
//     title: "Услуги и сервисы"
//   },
//   {
//     fileName:"techs-repair",
//     title:"Ремонт техники"
//   },
//   {
//     fileName:"corporative-clients",
//     title:"Корпоративным клиентам"
//   },
//   {
//     fileName:"techs-salesmans",
//     title:"Продавцам техники"
//   },
//   {
//     fileName:"partners",
//     title:"Партнёрам"
//   },
//   {
//     fileName:"manufacturers",
//     title:"Производителям"
//   },
//   {
//     fileName:"our-services-centers",
//     title:"Наши сервисные центры"
//   },
//   {
//     fileName:"contacts",
//     title:"Контакты"
//   }
// ];
// let multipleHtmlPlugins = htmlPageOptions.map((option) => {
//   return new HtmlWebpackPlugin({
//     title: option.title,
//     template: `./src/${option.fileName}.html`, // relative path to the HTML files
//     filename: `${option.fileName}.html`, // output HTML files
//     inject: true,
//       minify: {
//         removeComments: true,
//         collapseWhitespace: false,
//       },
//   });
// });

module.exports = {
  // Входной файл
  entry: ["./src/js/index.js"],

  // Выходной файл
  output: {
    filename: "./js/bundle.js",
  },

  // Source maps для удобства отладки
  // devtool: "source-map",
  resolve: {
    extensions: [".js", ".json", ".png"],
  },
  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // parse CSS and add vendor prefixes to CSS rules
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader?name=./fonts/[folder]/[name].[ext]",
          },
        ],
        // loader: 'file-loader',
        // options:{
        //   outputPath: 'fonts/[folder]/[name].[ext]',
        // },
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: "file-loader?name=./static/[name].[ext]",
          },
        ],
      },
    ],
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: "Услуги и сервисы",
      template: "./src/index.html",
      filename: 'index.html', // output HTML files
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Ремонт техники",
      template: "./src/techs-repair.html",
      filename: 'techs-repair.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Корпоративным клиентам",
      template: "./src/corporative-clients.html",
      filename: 'corporative-clients.html', // output HTML files
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Продавцам техники",
      template: "./src/techs-salesmans.html",
      filename: 'techs-salesmans.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Партнёрам",
      template: "./src/partners.html",
      filename: 'partners.html', // output HTML files
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Производителям",
      template: "./src/manufacturers.html",
      filename: 'manufacturers.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Наши сервисные центры",
      template: "./src/our-services-centers.html",
      filename: 'our-services-centers.html', // output HTML files
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Контакты",
      template: "./src/contacts.html",
      filename: 'contacts.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: "./src/img",
        to: "img",
      },
    ]),
  ],
};
