# 女院闲鱼（nyxy-market）

校园二手交易前端原型（Next.js + TypeScript + Tailwind CSS）。

## 页面
- 首页 `/`
- 商品列表页 `/goods`
- 商品详情页 `/goods/[id]`
- 发布闲置页 `/publish`
- 我的页面 `/profile`

## 本地安装与启动
> 如果你本机设置过代理，请先清理代理环境变量。

```bash
unset http_proxy https_proxy HTTP_PROXY HTTPS_PROXY npm_config_http_proxy npm_config_https_proxy
npm install
npm run dev
```

打开浏览器访问：

- <http://localhost:3000>

## 说明
当前仓库使用 mock data，可直接用于第一版页面联调与视觉确认。
