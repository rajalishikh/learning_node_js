import fs from "fs";
import path from "path";

const file_path = path.join(process.cwd(), "/src/Database/db.json");
export const read_product = () => {
  const product_read = fs.readFileSync(file_path, "utf-8");

  return JSON.parse(product_read);
};

export const insert_product = (payData: any) => {
  fs.writeFileSync(file_path, JSON.stringify(payData));
};
