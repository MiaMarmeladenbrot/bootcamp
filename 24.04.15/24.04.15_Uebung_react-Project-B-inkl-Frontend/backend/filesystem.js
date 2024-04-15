import fs from "fs";
import url from "url";
import path from "path";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// functions to read files
export function readJsonFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, buff) => {
      if (err) return reject(err);

      const jsObj = JSON.parse(buff.toString());
      resolve(jsObj);
    });
  });
}
export function readTodos() {
  return readJsonFile(__dirname + "/data/todos.json");
}

// functions to write files
export function writeJsonFile(path, jsObj) {
  return new Promise((resolve, reject) => {
    const jsonString = JSON.stringify(jsObj, null, 2);

    fs.writeFile(path, jsonString, (err) => {
      if (err) return reject(err);
      resolve(jsObj);
    });
  });
}
export function writeTodo(todoArray) {
  return writeJsonFile(__dirname + "/data/todos.json", todoArray);
}
