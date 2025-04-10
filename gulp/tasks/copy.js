import fs from "fs";

export const copy = () => {
  const tasks = [];

  // Копирование файлов из папки files
  if (fs.existsSync(app.path.src.files)) {
    console.log("Копирование папки files...");
    tasks.push(
      app.gulp.src(app.path.src.files).pipe(app.gulp.dest(app.path.build.files))
    );
  }

  // Копирование папки lib
  if (fs.existsSync(app.path.src.lib.split("**")[0])) {
    console.log("Копирование папки lib...");
    tasks.push(
      app.gulp.src(app.path.src.lib).pipe(app.gulp.dest(app.path.build.lib))
    );
  } else {
    console.log("Папка lib не найдена в src");
  }
  return Promise.all(tasks);
};