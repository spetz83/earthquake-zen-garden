import path from "path";
import { promises as fs } from "fs";

export default async function getData() {
  const filePath = path.join(process.cwd(), "data", "siteData.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  return JSON.parse(jsonData);
}
