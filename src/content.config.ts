import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
      // 顯示在 <h1> 和 <title> 標籤裡，建議 60 字內，包含主要關鍵字
      title: z.string(),
      // 會被當作 meta description 和列表頁摘要，建議 150-160 字內
      description: z.string().max(160),
      // 商品主圖，存放在 public/uploads/，用絕對路徑引用，例如 /uploads/foo.jpg
      image: z.string(),
      image_alt: z.string(),
      price: z.number().positive(),
      currency: z.string().default('TWD'),
      category: z.string(),
      // 用於 Product schema 的庫存狀態
      availability: z.enum(['InStock', 'OutOfStock', 'PreOrder']).default('InStock'),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // 標籤，用於相關商品推薦與內部連結
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { products };
