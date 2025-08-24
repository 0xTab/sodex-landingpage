# SoDEX Landing Page

这是一个基于Next.js和Tailwind CSS构建的SoDEX项目落地页。

## 项目结构

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx          # Header组件
│   └── LandingButton.tsx   # 按钮组件
```

## 组件说明

### Header组件 (`src/components/Header.tsx`)

Header组件是根据Figma设计稿实现的响应式导航栏，包含以下特性：

- **Logo区域**: SoDEX品牌标识和testnet标签
- **导航菜单**: X(Twitter)、Telegram、Docs三个导航项
- **行动按钮**: "Start Trading"按钮
- **响应式设计**: 支持PC和移动端适配
- **毛玻璃效果**: 使用backdrop-blur实现现代UI效果

#### 特性
- 完全响应式设计
- 移动端汉堡菜单
- 悬停交互效果
- 使用Tailwind CSS自定义颜色
- 支持Lato字体

#### 使用方法

```tsx
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="p-8">
        <Header />
      </div>
      {/* 其他内容 */}
    </div>
  );
}
```

### LandingButton组件 (`src/components/LandingButton.tsx`)

可重用的按钮组件，支持自定义文本和点击事件。

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **字体**: Lato, Inter

## 自定义配置

### 颜色配置 (tailwind.config.js)

项目使用自定义颜色配置：

```javascript
colors: {
  'white': '#FFFFFF',
  sosored: '#EB5F31',
  'primary': '#121212',
  'button-up': '#18B36B',
  'brand': '#FF7637',
  'link': '#9BC4F4',
  'default': '#444444',
  "brand-default": "#FF7637",
}
```

### 响应式断点

```javascript
screens: {
  smaller: { max: '389px' },
  sm: { max: '599.95px' },
  md: { max: '959.95px', min: '600px' },
  lg: { max: '1279.95px', min: '960px' },
  xl: { min: '1280px' },
  mobile: { max: '759.99px' },
  pc: { min: '759.99px' },
}
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 设计规范

Header组件严格按照Figma设计稿实现：
- 最大宽度: 1200px
- 高度: 56px (h-14)
- 圆角: 99px
- 背景: rgba(255, 255, 255, 0.1)
- 边框: #444444
- 毛玻璃效果: backdrop-blur-xl

## 组件映射

项目使用`mapping.json`文件管理组件映射关系：

```json
{
  "components": {
    "LandingButton": {
      "name": "LandingButton",
      "path": "src/components/LandingButton.tsx"
    },
    "Header": {
      "name": "Header", 
      "path": "src/components/Header.tsx"
    }
  }
}
```
