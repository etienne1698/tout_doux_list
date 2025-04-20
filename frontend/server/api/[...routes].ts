import { joinURL } from "ufo";

export default defineEventHandler(async (event) => {
  const proxyUrl = "http://localhost:3000";

  //const path = event.path.replace(/^\/api\//, "");
  const path = event.path;

  const target = joinURL(proxyUrl, path);

  console.error(target);

  return proxyRequest(event, target, { headers: { origin: proxyUrl } });
});
