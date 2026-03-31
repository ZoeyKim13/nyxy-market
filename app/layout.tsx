import type { Metadata } from 'next';
import './globals.css';
import { MainNav } from '@/components/main-nav';

export const metadata: Metadata = {
  title: '女院闲鱼',
  description: '校园二手交易平台原型'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="mx-auto min-h-screen max-w-6xl px-4 py-6">
          <MainNav />
          <main className="mt-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
