import LandingButton from "@/components/LandingButton";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <div className="p-8">
        <Header />
      </div>
      
      {/* Main Content */}
      <div className="max-w-md mx-auto p-8">
        <h1 className="text-white font-bold mb-4 text-yellow">Hello World</h1>
        <LandingButton text="Start Trading" />
      </div>
    </div>
  )
}
