'use client'
import Header from "@/components/Header";
import HeroSection from "@/components/heroSection";
import Content2 from "@/components/Content2";
import Content3 from "@/components/Content3";
import Content4 from "@/components/Content4";
import Content5 from "@/components/Content5";
import { FooterLinkType, SocialLinkType } from "@/types";

const Home = () => {
  const handleFooterLinks = (type: FooterLinkType) => {
    console.log('handleFooterLinks', type);
  }

  const handleSocialLinks = (type: SocialLinkType) => {
    console.log('handleSocialLinks', type);
  }

  
  return (
    <div className="min-h-screen bg-primary relative">
      {/* Mobile-First Layout */}
      <div className=" mobile:mx-auto pc:w-full">
        {/* Header */}
        <Header />

        {/* Content Sections */}
        <main className="pc:relative mobile:hidden">
          {/* a层：HeroSection - 固定在底部，高度734px */}
          <div className="fixed bottom-0 left-0 right-0 z-10">
            <HeroSection />
          </div>
          
          {/* b层：滚动内容区域 - 使用sticky定位 */}
          <div className="sticky top-0 z-20">
            {/* 透明区域：与a层高度相同 */}
            <div className="h-[734px] bg-transparent"></div>
            
            {/* 黑色背景内容区域 */}
            <div className="bg-black">
              <Content2 />
              <Content3 />
              <Content4 />
              <Content5 handleFooterLinks={handleFooterLinks} handleSocialLinks={handleSocialLinks} />
            </div>
          </div>
          

        </main>

        <main className="pc:hidden mobile:relative">
          <HeroSection />
          <Content2 />
          <Content3 />
          <Content4 />
          <Content5 handleFooterLinks={handleFooterLinks} handleSocialLinks={handleSocialLinks} />
        </main>
      </div>
    </div>
  )
}

export default Home;