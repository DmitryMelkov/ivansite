import fileinclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import htmlMin from 'gulp-htmlmin';
import prettier from 'gulp-prettier';

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'HTML',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      .pipe(
        fileinclude({
          prefix: '@@',
          basepath: '@file',
        })
      )
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          versionNumber({
            value: '%DT%',
            append: {
              key: '_v',
              cover: 0,
              to: ['css', 'js'],
            },
            output: {
              file: 'gulp/version.json',
            },
          })
        )
      )
      // Форматирование и минификация
      .pipe(
        app.plugins.if(
          app.isBuild,
          htmlMin({
            collapseWhitespace: true, // Минификация для production
            removeComments: true,
            minifyCSS: true,
            minifyJS: true,
            preserveLineBreaks: false,
            conservativeCollapse: false,
          })
        )
      )
      .pipe(
        app.plugins.if(
          !app.isBuild,
          prettier({
            tabWidth: 2,
            useTabs: false,
            printWidth: 120,
            htmlWhitespaceSensitivity: 'ignore',
            endOfLine: 'auto',
          })
        )
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
  );
};
