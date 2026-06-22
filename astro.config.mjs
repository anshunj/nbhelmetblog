// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 部署後請把 site 換成你的正式網域，例如 https://blog.riderment.com
// 這個值會用在 sitemap.xml、RSS、canonical URL 的絕對網址產生
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
});
