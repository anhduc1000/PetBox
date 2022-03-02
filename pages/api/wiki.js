import fs from "fs";

let rawData = fs.readFileSync("./data/breeds.json");
let posts = JSON.parse(rawData);

export default function handler(req, res) {
  res.status(200).json(posts);
}
