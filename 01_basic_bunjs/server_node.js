const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const myurl = url.parse(req.url, true);
  console.log(myurl);

  if (myurl.pathname === "/favicon.ico") return res.end();
  try {
    switch (myurl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const queryname = myurl.query.name;
        res.end(`Hi You are ${queryname}`);
        break;
      default:
        res.end("404 Not found");
    }
  } catch (error) {
    console.log(error);
  }
});

server.listen(8000, () => {
  console.log("Server is listening at 8000 !");
});
