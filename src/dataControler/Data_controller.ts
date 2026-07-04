import type { IncomingMessage, ServerResponse } from "http";
import { read_product } from "../Service/ServiceHandle";
import type { data_type_controller } from "../data_type/data_type_manage";

export const data_Controller = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  const split_Url = url?.split("/");
  const id =
    split_Url && split_Url[1] === "products" ? Number(split_Url[2]) : null;

  console.log("here is my id", id);

  if (url === "/products" && method === "GET") {
    const product_read_2 = read_product();
    res.writeHead(200, { "content-type": "Application/JSON" });
    res.end(
      JSON.stringify({
        message: "Here is our products",
        data: product_read_2,
      }),
    );
  } else if (method === "GET" && id != null) {
    const find_All_product = read_product();
    const find_Single_ID = find_All_product.find(
      (id_find: data_type_controller) => id_find.id === id,
    );
    res.writeHead(200, { "content-type": "Application/JSON" });
    res.end(
      JSON.stringify({
        message: "Here is our products",
        data: find_Single_ID,
      }),
    );
  }
};
