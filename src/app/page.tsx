import Header from "@/components/Header";
import Content1 from "@/components/Content1";
import Content2 from "@/components/Content2";
import Content3 from "@/components/Content3";
import Content4 from "@/components/Content4";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <Header />

      {/* Content Sections */}
      <main>
        <Content1 />
        <Content2 />
        <Content3 />
        {/* Additional content sections will be added here */}
      </main>
    </div>
  )
}
