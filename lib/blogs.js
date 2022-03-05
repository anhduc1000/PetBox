import fs from 'fs';
import path from 'path';

export async function getBlogData(id) {
  const rawData = fs.readFileSync(path.join(process.cwd(), "./breeds/breeds.json"));
  const blogs = JSON.parse(rawData);
  id = +id - 1;

  return {
    ...blogs[id],
  };
}


export function getAllBlogData() {
  const rawData = fs.readFileSync(path.join(process.cwd(), "./breeds/breeds.json"));
  const blogs = JSON.parse(rawData);
  return blogs;
}