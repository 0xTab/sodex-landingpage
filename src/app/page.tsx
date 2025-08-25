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
          <HeroSection />
          <div>
            <Content2 />
            <Content3 />
            <Content4 />
            <Content5 handleFooterLinks={handleFooterLinks} handleSocialLinks={handleSocialLinks} />
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