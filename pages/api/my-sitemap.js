const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const func = async (req, res) => {
  // An array with your links
  const links = [
    { url: "/" },
    { url: "/simuladores/banco-nacion" },
    { url: "/simuladores/banco-santander" },
    { url: "/simuladores/banco-credicoop" },
    { url: "/simuladores/banco-bbva" },
    { url: "/simuladores/banco-galicia" },
    { url: "/tarjetas/mastercard" },
    { url: "/tarjetas/visa" },
    { url: "/tarjetas/uala" },
    { url: "/tarjetas/lemoncash" },
    { url: "/tarjetas/mercado-pago" },
    { url: "/tarjetas/sobre-nosotros" },
    { url: "/tarjetas/contacto" },
    { url: "/tarjetas/politica-de-privacidad" },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
export default func