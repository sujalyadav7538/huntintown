export default function sitemap() {
  const siteUrl = "https://huntintown.com";
  const routes = ["", "/about", "/explore", "/post"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
