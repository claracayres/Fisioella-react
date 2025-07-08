// generate-sitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// domínio do seu site:
const siteUrl = 'https://www.fisioella.com.br';

const pages = [
  '/',
  '/contato',
  '/drenagem',
  '/fisiopelvica',
  '/inicio',
  '/radiofrequencia',
  '/sobre-mim',
  '/tratamentos'
];

const sitemap = new SitemapStream({ hostname: siteUrl });

pages.forEach((page) => {
  sitemap.write({ url: page, changefreq: 'monthly', priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  console.log('✅ Sitemap criado com sucesso em public/sitemap.xml');
});
