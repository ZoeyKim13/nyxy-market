export type Category = '衣物' | '鞋子' | '包包' | '书籍' | '日用品';

export type Product = {
  id: string;
  title: string;
  price: number;
  condition: string;
  sellerName: string;
  createdAt: string;
  image: string;
  category: Category;
  description: string;
};

export const categories: Category[] = ['衣物', '鞋子', '包包', '书籍', '日用品'];

export const products: Product[] = [
  {
    id: '1',
    title: '奶油白针织开衫',
    price: 69,
    condition: '9成新',
    sellerName: '晴晴学姐',
    createdAt: '2026-03-15 14:20',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
    category: '衣物',
    description: '柔软亲肤，适合春季通勤。仅试穿两次。'
  },
  {
    id: '2',
    title: '小白鞋（37码）',
    price: 88,
    condition: '8成新',
    sellerName: '晚风',
    createdAt: '2026-03-14 20:10',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    category: '鞋子',
    description: '鞋底轻微磨损，整体干净，穿着舒适。'
  },
  {
    id: '3',
    title: '通勤托特包',
    price: 120,
    condition: '9成新',
    sellerName: '小乔',
    createdAt: '2026-03-13 10:00',
    image:
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=900&q=80',
    category: '包包',
    description: '容量大，可放A4资料和13寸电脑。'
  },
  {
    id: '4',
    title: '《传播学概论》教材',
    price: 25,
    condition: '7成新',
    sellerName: 'Yuki',
    createdAt: '2026-03-12 17:35',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    category: '书籍',
    description: '有少量划线，课后复习完全够用。'
  },
  {
    id: '5',
    title: '桌面收纳三件套',
    price: 39,
    condition: '9成新',
    sellerName: 'Momo',
    createdAt: '2026-03-11 09:15',
    image:
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=900&q=80',
    category: '日用品',
    description: '宿舍搬家出，收纳盒+笔筒+抽屉分隔板。'
  }
];
