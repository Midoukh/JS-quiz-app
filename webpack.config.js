// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
  context: __dirname,
  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/js/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: 'public'
 },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development',
  resolve: {
    extensions: ['.js'] // add your other extensions here
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html'
    }),
    new HtmlWebpackPlugin({
      filename: './src/html/quiz.html',
      template: './src/html/quiz.html'
  })
],
module: {
  rules: [
    {
      test: /\.js$/,
      /* ... */
    }
  ]
}
};