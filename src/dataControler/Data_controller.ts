import type { IncomingMessage, ServerResponse } from "http";
import { read_product } from "../Service/ServiceHandle";

export const data_Controller = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const product = [{ id: 2, name: "Md Raj Ali sheikh " }];
  if (url === "/products" && method === "GET") {
    read_product();
    res.writeHead(200, { "content-type": "Application/JSON" });
    res.end(
      JSON.stringify({
        message: "Here is our products",
        data: product,
      }),
    );
  }
};
