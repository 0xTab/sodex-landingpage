
export default function Home() {
  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-white font-bold  mb-4 text-yellow">Hello World</h1>
        <div className="space-y-4">
          <div className=" p-4 rounded-lg">
            <p className="text-var(--primary-color)">Sosored 1背景色</p>
          </div>
          <div className="bg-button-up p-4 rounded-lg">
            <p className="text-sosored">Button Up 背景色</p>
          </div>
          <div className="bg-brand p-4 rounded-lg">
            <p className="text-white">Brand 背景色</p>
          </div>
          <div className="border-2 border-default p-4 rounded-lg">
            <p className="text-yellow">Link 文字颜色</p>
          </div>
        </div>
      </div>
    </div>
  )
}
