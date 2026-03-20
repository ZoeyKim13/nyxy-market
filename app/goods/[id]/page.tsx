import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/mock-data';

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-soft">
        <p className="text-lg text-gray-600">未找到该商品</p>
        <Link href="/goods" className="mt-3 inline-block text-rose-700 hover:underline">
          返回商品列表
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="relative h-80 overflow-hidden rounded-3xl lg:col-span-3">
        <Image src={product.image} alt={product.title} fill className="object-cover" />
      </div>
      <section className="space-y-4 rounded-3xl bg-white p-6 shadow-soft lg:col-span-2">
        <span className="rounded-full bg-rose-50 px-3 py-1 text-sm text-rose-700">{product.category}</span>
        <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-3xl font-semibold text-rose-700">¥{product.price}</p>
        <p className="text-gray-600">成色：{product.condition}</p>
        <p className="text-gray-600">卖家：{product.sellerName}</p>
        <p className="text-sm text-gray-400">发布时间：{product.createdAt}</p>
        <p className="rounded-xl bg-rose-50 p-3 text-sm text-gray-600">{product.description}</p>

        <div className="flex gap-3">
          <button className="rounded-full bg-rose-500 px-5 py-2 text-white hover:bg-rose-700">联系卖家</button>
          <button className="rounded-full border border-rose-200 bg-white px-5 py-2 text-rose-700 hover:border-rose-500">
            收藏商品
          </button>
        </div>
      </section>
    </div>
  );
}
