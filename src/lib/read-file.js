import fs from "fs";
import path from 'path';

const readFile = async (dirNameInDoc, fileName) => {
  // process.cwd() => "C:\Users\User\Documents\portfolio"
  // __dirname => "C:\Users\User\Documents\portfolio\.next\server\app\home"
  const filePath = path.join(process.cwd(), 'src/doc', dirNameInDoc, fileName);
  return fs.readFileSync(filePath, 'utf8');
}

export default readFile;
