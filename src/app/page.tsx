import LandingButton from "@/components/LandingButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-white font-bold  mb-4 text-yellow">Hello World</h1>
        <LandingButton text="Start Trading" />
        </div>
    </div>
  )
}
