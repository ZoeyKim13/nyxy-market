import Link from 'next/link';
import { products } from '@/lib/mock-data';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <p className="text-sm text-rose-500">个人中心</p>
        <h2 className="mt-1 text-2xl font-semibold text-gray-800">你好，晚风同学 👋</h2>
        <p className="mt-2 text-gray-600">管理你的发布、收藏和交易进度。</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-rose-50 p-4">
            <p className="text-xs text-gray-500">我发布的</p>
            <p className="mt-1 text-2xl font-semibold text-rose-700">6</p>
          </div>
          <div className="rounded-2xl bg-rose-50 p-4">
            <p className="text-xs text-gray-500">我的收藏</p>
            <p className="mt-1 text-2xl font-semibold text-rose-700">14</p>
          </div>
          <div className="rounded-2xl bg-rose-50 p-4">
            <p className="text-xs text-gray-500">待确认交易</p>
            <p className="mt-1 text-2xl font-semibold text-rose-700">2</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-700">最近浏览</h3>
          <Link href="/goods" className="text-sm text-rose-700 hover:underline">
            去逛逛
          </Link>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          {products.slice(0, 3).map((item) => (
            <li key={item.id} className="rounded-xl bg-rose-50 p-3">
              {item.title} · ¥{item.price} · {item.createdAt}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
