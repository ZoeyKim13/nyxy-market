import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/mock-data';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-soft">
      <div className="relative h-48 w-full">
        <Image src={product.image} alt={product.title} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-gray-800">{product.title}</h3>
          <span className="rounded-full bg-rose-50 px-2 py-1 text-xs text-rose-700">{product.category}</span>
        </div>
        <p className="text-xl font-semibold text-rose-700">¥{product.price}</p>
        <p className="text-sm text-gray-500">{product.condition} · {product.sellerName}</p>
        <p className="text-xs text-gray-400">发布时间：{product.createdAt}</p>
        <Link
          href={`/goods/${product.id}`}
          className="inline-block rounded-full bg-rose-500 px-4 py-2 text-sm text-white transition hover:bg-rose-700"
        >
          查看详情
        </Link>
      </div>
    </article>
  );
}
