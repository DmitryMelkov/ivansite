import webpack from "webpack-stream";
import mergeStream from "merge-stream";

export const js = () => {
  // Минифицированный файл
  const minified = app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: "production", // Всегда production для минифицированного файла
        output: {
          filename: "app.min.js", // Имя минифицированного файла
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
        }
      })
    )
    .pipe(app.gulp.dest(app.path.build.js));

  // Обычный собранный файл
  const regular = app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: "none", // Режим без минификации
        output: {
          filename: "app.js", // Имя обычного файла
        },
        devtool: app.isDev ? 'inline-source-map' : false, // Добавляем source map для разработки
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
        }
      })
    )
    .pipe(app.gulp.dest(app.path.build.js));

  // Возвращаем объединенный поток
  return mergeStream(minified, regular)
    .pipe(app.plugins.browsersync.stream());
};