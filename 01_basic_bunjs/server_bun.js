import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    console.log(url);
    if (url.pathname === "/") {
      return new Response("Hello Home Page", { status: 200 });
    } else if (url.pathname === "/about") {
      const query = url.searchParams;
      const name = query.get("name");
      return new Response(`Hello ${name}`, { status: 200 });
    } else {
      return new Response("404 Not Found", { status: 404 });
    }
  },
  port: 4000,
});
