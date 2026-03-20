'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { categories, products } from '@/lib/mock-data';

export default function GoodsPage() {
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'全部' | (typeof categories)[number]>('全部');
  const [price, setPrice] = useState<'全部' | '0-50' | '50-100' | '100+'>('全部');

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchKeyword = item.title.toLowerCase().includes(keyword.toLowerCase());
      const matchCategory = selectedCategory === '全部' || item.category === selectedCategory;
      const matchPrice =
        price === '全部' ||
        (price === '0-50' && item.price <= 50) ||
        (price === '50-100' && item.price > 50 && item.price <= 100) ||
        (price === '100+' && item.price > 100);

      return matchKeyword && matchCategory && matchPrice;
    });
  }, [keyword, selectedCategory, price]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-5 shadow-soft">
        <h2 className="text-2xl font-semibold text-gray-800">商品列表</h2>
        <p className="mt-2 text-sm text-gray-500">可以按关键词、分类和价格快速筛选。</p>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <label className="mb-1 block text-sm text-gray-600">搜索商品</label>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              placeholder="输入商品标题关键词"
              className="w-full"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">分类筛选</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as '全部' | (typeof categories)[number])}
              className="w-full"
            >
              <option value="全部">全部</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">价格筛选</label>
            <select value={price} onChange={(e) => setPrice(e.target.value as '全部' | '0-50' | '50-100' | '100+')} className="w-full">
              <option value="全部">全部</option>
              <option value="0-50">0 - 50 元</option>
              <option value="50-100">50 - 100 元</option>
              <option value="100+">100 元以上</option>
            </select>
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-white p-10 text-center text-gray-500 shadow-soft">没有找到符合条件的商品，换个条件试试吧。</div>
      )}
    </div>
  );
}
