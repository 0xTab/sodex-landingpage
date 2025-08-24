import Header from "@/components/Header";
import Content1 from "@/components/Content1";
import Content2 from "@/components/Content2";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <Header />

      {/* Content Sections */}
      <main>
        <Content1 />
        <Content2 />
        {/* Additional content sections will be added here */}
      </main>
    </div>
  )
}
