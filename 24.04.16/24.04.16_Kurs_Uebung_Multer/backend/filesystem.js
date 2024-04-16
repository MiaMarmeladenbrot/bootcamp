import fs from "fs";
import url from "url";
import path from "path";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

//* functions to read blogData
// liest Daten-File und gibt den Inhalt als JS Object zurück
export function readJsonFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, dataBuffer) => {
      if (err) return reject(err);
      const jsonString = dataBuffer.toString();
      const jsObj = JSON.parse(jsonString);
      resolve(jsObj);
    });
  });
}

// ruft obere Funktion auf und wendet sie auf blogData an
export function readBlogPosts() {
  return readJsonFile(__dirname + "/data/blogData.json");
}

//* functions to write in blogData
// schreibt die empfangenen Daten als json String in eine Datei und gibt ein JS Object zurück
export function writeJsonFile(path, jsObj) {
  return new Promise((resolve, reject) => {
    const jsonString = JSON.stringify(jsObj, null, 2);
    fs.writeFile(path, jsonString, (err) => {
      if (err) return reject(err);
      resolve(jsObj);
    });
  });
}

// ruft die vorherige Funktion auf, wendet sie auf blogData an und übernimmt die aktualisierten Blogposts als Argument
export function writeBlogPosts(blogPostsArray) {
  return writeJsonFile(__dirname + "/data/blogData.json", blogPostsArray);
}
