import fs from "fs";

export const copy = () => {
  if (!fs.existsSync(app.path.src.files)) {
    console.log('Папка files не существует, пропускаем копирование');
    return Promise.resolve();
  }
  return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files));
};