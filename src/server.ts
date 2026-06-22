import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    if (url === "/" && method === "GET") {
      res.writeHead(200, { "content-type": "Application/JSON" });
      res.end(JSON.stringify({ message: "This root route" }));
    } else if (url?.startsWith("/products")) {
      res.writeHead(200, { "content-type": "Application/JSON" });
      res.end(JSON.stringify({ message: "Here is our products" }));
    } else {
      res.writeHead(404, { "content-type": "Application/JSON" });
      res.end(JSON.stringify({ message: "NO page found" }));
    }
  },
);

server.listen(5000, () => {
  console.log("Server is running the port 50000");
});
