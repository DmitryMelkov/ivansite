import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'SCSS',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
      .pipe(
        sass({
          outputStyle: 'expanded', // Читаемый CSS
        })
      )
      // Общие обработчики для обоих файлов
      .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          webpcss({
            webpClass: '.webp',
            nowebpClass: '.nowebp',
          })
        )
      )
      // Автопрефиксер применяем всегда (и в dev, и в prod)
      .pipe(
        autoprefixer({
          grid: true,
          overrideBrowserslist: ['last 3 versions'],
          cascade: true,
        })
      )
      // Сохраняем НЕминифицированную версию (style.css)
      .pipe(app.gulp.dest(app.path.build.css))
      // Минифицируем (ВСЕГДА, даже в dev)
      .pipe(
        cleanCss({
          level: app.isBuild ? 2 : 1, // В prod — агрессивная минификация
        })
      )
      .pipe(
        rename({
          extname: '.min.css',
        })
      )
      // Сохраняем минифицированную версию (style.min.css)
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
  );
};
