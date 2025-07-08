// generate-sitemap.js
import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

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

const data = await streamToPromise(Readable.from(sitemap));
fs.writeFileSync('./public/sitemap.xml', data.toString());
console.log('✅ Sitemap criado com sucesso em public/sitemap.xml');
