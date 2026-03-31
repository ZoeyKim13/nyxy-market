import Link from 'next/link';
import { ProductCard } from '@/components/product-card';
import { categories, products } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-r from-rose-100 via-white to-lilac p-8">
        <p className="text-sm text-rose-500">面向女生宿舍生活场景</p>
        <h2 className="mt-2 text-3xl font-semibold text-rose-700">让每一件闲置，找到下一个心动主人</h2>
        <p className="mt-3 max-w-2xl text-gray-600">
          女院闲鱼是校园二手交易原型站，支持快速浏览、发布闲置和私信沟通，帮你把衣物、书籍和日用品温柔流转。
        </p>
        <div className="mt-5 flex gap-3">
          <Link href="/goods" className="rounded-full bg-rose-500 px-5 py-2 text-white hover:bg-rose-700">
            逛逛闲置
          </Link>
          <Link href="/publish" className="rounded-full border border-rose-200 px-5 py-2 text-rose-700 hover:border-rose-500">
            立即发布
          </Link>
        </div>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-medium text-gray-700">热门分类</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-soft">
              {category}
            </span>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-700">最新发布</h3>
          <Link href="/goods" className="text-sm text-rose-700 hover:underline">
            查看全部
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
