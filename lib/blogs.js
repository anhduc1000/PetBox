import fs from 'fs';

export async function getBlogData(id) {
  const rawData = fs.readFileSync("./breeds/breeds.json");
  const blogs = JSON.parse(rawData);
  id = +id - 1;

  return {
    ...blogs[id],
  };
}
