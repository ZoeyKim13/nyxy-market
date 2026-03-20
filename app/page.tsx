import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/product-card';
import { categories, products } from '@/lib/mock-data';

const categoryEmoji: Record<string, string> = {
  衣物: '👗',
  鞋子: '👟',
  包包: '👜',
  书籍: '📚',
  日用品: '🧴'
};

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-r from-rose-100 via-white to-lilac p-8">
        <div className="absolute -right-10 -top-8 h-32 w-32 rounded-full bg-rose-200/60" />
        <div className="absolute bottom-0 right-24 h-24 w-24 rounded-full bg-lilac/70" />
        <p className="text-sm text-rose-500">女院闲鱼 · 校园温柔循环站</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold text-rose-700">把你的闲置，变成同学的心动好物</h2>
        <p className="mt-3 max-w-2xl text-gray-600">
          这里可以轻松发布衣物、书籍、日用品，让每一件物品在校园里继续发光。
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/goods" className="rounded-full bg-rose-500 px-5 py-2 text-white hover:bg-rose-700">
            去逛推荐
          </Link>
          <Link href="/publish" className="rounded-full border border-rose-200 bg-white px-5 py-2 text-rose-700 hover:border-rose-500">
            发布闲置
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-rose-100 bg-white p-5 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-700">分类入口</h3>
          <Link href="/goods" className="text-sm text-rose-700 hover:underline">
            查看全部
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category}
              href="/goods"
              className="rounded-2xl bg-rose-50 px-4 py-4 text-center text-sm text-gray-700 transition hover:-translate-y-0.5 hover:bg-rose-100"
            >
              <p className="text-xl">{categoryEmoji[category]}</p>
              <p className="mt-1">{category}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-700">推荐商品</h3>
          <Link href="/goods" className="text-sm text-rose-700 hover:underline">
            更多好物
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-rose-100 bg-white p-6 shadow-soft">
        <div className="grid items-center gap-5 md:grid-cols-2">
          <div>
            <p className="text-sm text-rose-500">新手提示</p>
            <h4 className="mt-2 text-2xl font-semibold text-gray-800">发布只要 1 分钟</h4>
            <p className="mt-2 text-sm text-gray-600">填写标题、价格、成色和图片，就能快速找到愿意接手的同学。</p>
            <Link href="/publish" className="mt-4 inline-block rounded-full bg-rose-500 px-5 py-2 text-white hover:bg-rose-700">
              立即发布
            </Link>
          </div>
          <div className="relative h-40 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
              alt="女生校园生活"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
