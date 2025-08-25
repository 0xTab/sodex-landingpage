import Header from "@/components/Header";
import Content1 from "@/components/Content1";
import Content2 from "@/components/Content2";
import Content3 from "@/components/Content3";
import Content4 from "@/components/Content4";
import Content5 from "@/components/Content5";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary relative">
      {/* Mobile-First Layout */}
      <div className="mobile:w-[393px] mobile:mx-auto pc:w-full">
        {/* Header */}
        <Header />

        {/* Content Sections */}
        <main className="relative">
          <Content1 />
          <Content2 />
          <Content3 />
          <Content4 />
          <Content5 />
        </main>
      </div>
    </div>
  )
}
