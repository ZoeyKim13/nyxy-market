import Link from 'next/link';

const links = [
  { href: '/', label: '首页' },
  { href: '/goods', label: '商品列表' },
  { href: '/publish', label: '发布闲置' },
  { href: '/profile', label: '我的' }
];

export function MainNav() {
  return (
    <header className="rounded-2xl border border-rose-100 bg-white/90 p-4 shadow-soft backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-rose-500">校园二手 · 温柔流转</p>
          <h1 className="text-2xl font-semibold text-rose-700">女院闲鱼</h1>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-rose-100 px-4 py-1.5 text-gray-700 transition hover:border-rose-500 hover:text-rose-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
