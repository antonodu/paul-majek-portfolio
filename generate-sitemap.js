const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/gallery', changefreq: 'monthly', priority: 0.8 },
    { url: '/exhibition', changefreq: 'weekly', priority: 0.8 },
    { url: '/statement', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({
    hostname: 'http://localhost:3000', // Replace this with your staging/production URL when live
});

streamToPromise(sitemap)
    .then((data) => {
        fs.writeFileSync('./sitemap.xml', data.toString());
        console.log('Sitemap generated successfully!');
    })
    .catch((err) => {
        console.error('Error generating sitemap:', err);
    });

// Add each link to the sitemap
links.forEach((link) => sitemap.write(link));

// End the sitemap stream
sitemap.end();
