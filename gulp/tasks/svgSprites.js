import svgSprite from 'gulp-svg-sprite';

export const svgSprites = () => {
  return app.gulp
    .src(`${app.path.src.svgicons}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SVG',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../icons/icons.svg',
            example: true,
          },
        },
        svg: {
          xmlDeclaration: false,
          doctypeDeclaration: false,
          namespaceIDs: false,
          namespaceClassnames: false,
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  { removeUselessDefs: false },
                  { cleanupIDs: false },
                  { removeViewBox: false },
                  { mergePaths: false },
                  { inlineStyles: false },
                ],
              },
            },
          ],
        },
      })
    )

    .pipe(app.gulp.dest(`${app.path.build.images}`));
};
