'use client'
import Header from "@/components/Header";
import HeroSection from "@/components/heroSection";
import Content2 from "@/components/Content2";
import Content3 from "@/components/Content3";
import Content4 from "@/components/Content4";
import Content5 from "@/components/Content5";
import { FooterLinkType, SocialLinkType } from "@/types";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  // 为所有组件创建ref
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLElement>(null);
  const content3Ref = useRef<HTMLElement>(null);
  const content4Ref = useRef<HTMLElement>(null);
  const content5Ref = useRef<HTMLElement>(null);
  
  // 滚动控制状态
  const isScrolling = useRef(false);
  const [currentSection, setCurrentSection] = useState(0); // 0: Hero, 1: Content2, 2: Content3, 3: Content4, 4: Content5
  
  // Content2 的 isFinalStep 状态
  // 默认为 false，表示初始状态（显示完整布局）
  // 当向下滚动时，先切换到 true（显示简化布局），再滚动到下一个元素
  // 当向上滚动时，先切换到 false（显示完整布局），再滚动到上一个元素
  const [content2IsFinalStep, setContent2IsFinalStep] = useState(false);
  
  const handleFooterLinks = (type: FooterLinkType) => {
    console.log('handleFooterLinks', type);
  }

  const handleSocialLinks = (type: SocialLinkType) => {
    console.log('handleSocialLinks', type);
  }

  // 滚动到指定section的函数
  const scrollToSection = (sectionIndex: number) => {
    if (isScrolling.current) return;
    
    isScrolling.current = true;
    setCurrentSection(sectionIndex);
    
    if (sectionIndex === 0) {
      // 滚动到顶部（HeroSection）
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const sectionRefs = [content2Ref, content3Ref, content4Ref, content5Ref];
      const targetRef = sectionRefs[sectionIndex-1];
      targetRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  // 滚动事件监听
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      console.log('currentSection', currentSection, 'content2IsFinalStep', content2IsFinalStep);
      
      // 向下滚动
      if (e.deltaY > 0) {
        // 如果在 Content2 区域且 isFinalStep 为 false，先切换到 true
        if (currentSection === 1 && !content2IsFinalStep) {
          setContent2IsFinalStep(true);
          return;
        }
        
        if (currentSection < 4) {
          scrollToSection(currentSection + 1);
        }
      }
      // 向上滚动
      else if (e.deltaY < 0) {
        // 如果在 Content2 区域且 isFinalStep 为 true，先切换到 false
        if (currentSection === 1 && content2IsFinalStep) {
          setContent2IsFinalStep(false);
          return;
        }
        
        if (currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, content2IsFinalStep]);


  return (
    <div className="min-h-screen bg-primary relative">
      {/* Mobile-First Layout */}
      <div className=" mobile:mx-auto pc:w-full">
        {/* Header */}
        <Header />

        {/* Content Sections */}
        <main className="pc:relative mobile:hidden">
          {/* a层：HeroSection - 固定在底部，高度734px */}
          <div ref={heroSectionRef} className="fixed bottom-0 left-0 right-0 z-10">
            <HeroSection/>
          </div>

          {/* b层：滚动内容区域 - 使用sticky定位 */}
          <div className="sticky top-0 z-20">
            {/* 透明区域：与a层高度相同 */}
            <div className="h-[800px] bg-transparent"></div>
            <div className="bg-black">
              <Content2 ref={content2Ref} isFinalStep={content2IsFinalStep} />
              <Content3 ref={content3Ref} />
              <Content4 ref={content4Ref} />
              <Content5 ref={content5Ref} handleFooterLinks={handleFooterLinks} handleSocialLinks={handleSocialLinks} />
            </div>
          </div>

        </main>

        <main className="pc:hidden mobile:relative">
          {/* a层：HeroSection - 固定在底部，高度804px */}
          <div className="fixed bottom-0 left-0 right-0 z-10">
            <HeroSection />
          </div>
          
          {/* b层：滚动内容区域 - 使用sticky定位 */}
          <div className="sticky top-0 z-20">
            {/* 透明区域：与a层高度相同 */}
            <div className="h-[804px] bg-transparent"></div>
            
            {/* 黑色背景内容区域 */}
            <div className="bg-black">
              <Content2 />
              <Content3 />
              <Content4 />
              <Content5 handleFooterLinks={handleFooterLinks} handleSocialLinks={handleSocialLinks} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home;