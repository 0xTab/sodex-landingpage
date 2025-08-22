import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            欢迎使用 Next.js + TypeScript + Tailwind CSS
          </h1>
          <p className="text-xl text-secondary mb-8">
            这是一个使用 App Router 的现代化前端项目
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary">主要按钮</button>
            <button className="btn-secondary">次要按钮</button>
            <button className="btn-accent">强调按钮</button>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          主题颜色展示
        </h2>
        
        {/* Primary Colors */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-4">主要颜色 (Primary)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={shade} className="text-center">
                <div 
                  className={`w-20 h-20 rounded-lg mx-auto mb-2 bg-primary-${shade}`}
                  title={`primary-${shade}`}
                ></div>
                <span className="text-sm text-foreground">primary-{shade}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Colors */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-4">次要颜色 (Secondary)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={shade} className="text-center">
                <div 
                  className={`w-20 h-20 rounded-lg mx-auto mb-2 bg-secondary-${shade}`}
                  title={`secondary-${shade}`}
                ></div>
                <span className="text-sm text-foreground">secondary-{shade}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accent Colors */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-4">强调颜色 (Accent)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={shade} className="text-center">
                <div 
                  className={`w-20 h-20 rounded-lg mx-auto mb-2 bg-accent-${shade}`}
                  title={`accent-${shade}`}
                ></div>
                <span className="text-sm text-foreground">accent-{shade}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          项目特性
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-primary/10">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground text-2xl">⚛️</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Next.js 14</h3>
            <p className="text-secondary">使用最新的 App Router 架构</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-secondary/10">
            <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-secondary-foreground text-2xl">🔷</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">TypeScript</h3>
            <p className="text-secondary">完整的类型安全支持</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-accent/10">
            <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-accent-foreground text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Tailwind CSS</h3>
            <p className="text-secondary">现代化的 CSS 框架</p>
          </div>
        </div>
      </section>
    </main>
  )
}
