const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const sitemap = new SitemapStream({ hostname: 'https://antoniosaborido.es' });

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/cookie-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/proyectos/tfg', changefreq: 'monthly', priority: 0.8 },
  { url: '/proyectos/:nombreProyecto', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://certs.antoniosaborido.es', changefreq: 'monthly', priority: 0.8 },
  // Agregar más rutas según sea necesario
];

links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then(data => {
    const writeStream = createWriteStream(resolve(__dirname, 'dist/portfolio-antonio/sitemap.xml'));
    writeStream.write(data.toString());
    writeStream.end();
  })
  .catch(err => console.error(err));
