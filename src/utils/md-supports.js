import fs from 'fs'
import path from 'path'
import marked from 'marked'

export const markdownFileToHtml = (filePath) => {
  const markdown = fs.readFileSync(path.resolve(filePath), 'utf-8');
  const html = marked(markdown);
  return html
}
