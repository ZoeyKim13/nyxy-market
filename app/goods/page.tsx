import { ProductCard } from '@/components/product-card';
import { categories, products } from '@/lib/mock-data';

export default function GoodsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-5 shadow-soft">
        <h2 className="text-2xl font-semibold text-gray-800">商品列表</h2>
        <p className="mt-2 text-sm text-gray-500">按分类快速浏览你需要的闲置物品。</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="rounded-full bg-rose-500 px-4 py-2 text-sm text-white">全部</button>
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-rose-100 px-4 py-2 text-sm text-gray-600 hover:border-rose-400"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
