import type { IncomingMessage, ServerResponse } from "http";
import { data_Controller } from "../dataControler/Data_controller";

export const route_handler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    res.writeHead(200, { "content-type": "Application/JSON" });
    res.end(JSON.stringify({ message: "This root route" }));
  } else if (url?.startsWith("/products")) {
    data_Controller(req, res);
  } else {
    res.writeHead(404, { "content-type": "Application/JSON" });
    res.end(JSON.stringify({ message: "NO page found" }));
  }
};
