import path from "path";

const file_path = path.join(process.cwd(), "/src/Database/db.json");
export const read_product = () => {
  console.log(file_path);
};
