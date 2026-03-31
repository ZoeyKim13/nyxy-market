import { categories } from '@/lib/mock-data';

export default function PublishPage() {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-semibold text-gray-800">发布闲置</h2>
      <p className="mt-2 text-sm text-gray-500">完善商品信息，让同学更快联系你。</p>

      <form className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm text-gray-600">商品标题</label>
          <input type="text" placeholder="例如：九成新米白色开衫" className="w-full" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-gray-600">价格（元）</label>
            <input type="number" placeholder="请输入价格" className="w-full" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">成色</label>
            <select className="w-full">
              <option>全新</option>
              <option>9成新</option>
              <option>8成新</option>
              <option>7成新及以下</option>
            </select>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-600">商品分类</label>
          <select className="w-full">
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-600">图片链接</label>
          <input type="url" placeholder="https://..." className="w-full" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-600">商品描述</label>
          <textarea rows={4} placeholder="描述商品细节、瑕疵和交易方式" className="w-full" />
        </div>

        <button type="button" className="rounded-full bg-rose-500 px-6 py-2 text-white hover:bg-rose-700">
          发布商品
        </button>
      </form>
    </div>
  );
}
