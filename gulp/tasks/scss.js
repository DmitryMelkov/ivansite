import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css"; //Сжатие css
import webpcss from "gulp-webpcss"; //Вывод webp изображений
import autoprefixer from "gulp-autoprefixer"; //Добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; //Группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: true })

    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      webpcss({
        webpClass: ".webp",
        nowebpClass: ".nowebp",
      })
    )
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 version"],
        cascade: true,
      })
    )
    
    //Раскомментировать если нужен не сжатый дубль файла стилей
    .pipe(app.gulp.dest(app.path.build.css))

    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};
