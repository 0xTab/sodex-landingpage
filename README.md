# Sodex Landing Page

这是一个使用 Next.js 14 + TypeScript + Tailwind CSS 构建的现代化前端项目。

## 🚀 技术栈

- **Next.js 14** - React 框架，使用 App Router
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 实用优先的 CSS 框架
- **ESLint** - 代码质量检查

## 🎨 主题颜色

项目配置了完整的主题颜色系统：

### 主要颜色 (Primary)
- 蓝色系：`primary-50` 到 `primary-950`
- 默认主色：`primary-500` (#3b82f6)

### 次要颜色 (Secondary)
- 灰色系：`secondary-50` 到 `secondary-950`
- 默认次色：`secondary-500` (#64748b)

### 强调颜色 (Accent)
- 紫色系：`accent-50` 到 `accent-950`
- 默认强调色：`accent-500` (#d946ef)

## 📁 项目结构

```
src/
├── app/                 # App Router 页面
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 首页
├── components/         # 可重用组件
│   └── Button.tsx     # 按钮组件
└── ...
```

## 🛠️ 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 🎯 特性

- ✅ Next.js 14 App Router
- ✅ TypeScript 支持
- ✅ Tailwind CSS 配置
- ✅ 响应式设计
- ✅ 深色模式支持
- ✅ 自定义主题颜色
- ✅ 组件化开发
- ✅ ESLint 代码检查

## 📝 使用示例

### 使用主题颜色

```tsx
// 使用主要颜色
<div className="bg-primary text-primary-foreground">
  主要内容
</div>

// 使用次要颜色
<div className="bg-secondary text-secondary-foreground">
  次要内容
</div>

// 使用强调颜色
<div className="bg-accent text-accent-foreground">
  强调内容
</div>
```

### 使用按钮组件

```tsx
import Button from '@/components/Button';

// 主要按钮
<Button variant="primary">主要按钮</Button>

// 次要按钮
<Button variant="secondary">次要按钮</Button>

// 强调按钮
<Button variant="accent">强调按钮</Button>
```

## 🌙 深色模式

项目支持系统深色模式，会自动根据用户系统设置切换主题。

## �� 许可证

MIT License
