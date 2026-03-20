import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/mock-data';

export default function ProfilePage() {
  const myPublished = products.slice(0, 2);
  const myFavorites = products.slice(2, 5);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-rose-100">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
              alt="用户头像"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-rose-500">个人中心</p>
            <h2 className="text-2xl font-semibold text-gray-800">晚风同学</h2>
            <p className="text-sm text-gray-500">大三 · 爱逛二手好物</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-700">我发布的商品</h3>
          <Link href="/publish" className="text-sm text-rose-700 hover:underline">
            再发布一个
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {myPublished.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <h3 className="mb-4 text-lg font-medium text-gray-700">我收藏的商品</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {myFavorites.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
