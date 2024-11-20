const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Устанавливаем режим разработки
  entry: './src/scripts/main.ts', // Ваш основной файл TypeScript
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь к папке для выходного файла
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Разрешение расширений файлов
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Регулярное выражение для файлов .ts и .tsx
        use: 'ts-loader', // Использование ts-loader для компиляции
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Путь к вашему шаблону HTML
      filename: 'index.html', // Имя выходного HTML файла
    }),
  ],
};
