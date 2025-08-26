步骤1：
1.新建鼠标监听事件，通过 window.pageYOffset 或 document.documentElement.scrollTop 等方式获取垂直滚动量
2.初始化为0，完全显示<HeroSection />
3.此时鼠标向下滚轮，则直接scroll到Content2元素，将conent2元素滚动到最上面，覆盖<HeroSection />，<HeroSection />完全不限时
4.反之滚动量在content2高度内，鼠标滚轮向上，则直接滚动到最上面，完全显示<HeroSection />
5.其他组件也实现这样的效果，每次向上滚动切换到上一个元素，向下切换到下一个元素

```
   <main className="pc:relative mobile:hidden">
          {/* a层：HeroSection - 固定在底部，高度734px */}
          <div className="fixed bottom-0 left-0 right-0 z-10">
            <HeroSection />
          </div>

          {/* b层：滚动内容区域 - 使用sticky定位 */}
          <div className="sticky top-0 z-20">
            {/* 透明区域：与a层高度相同 */}
            <div className="h-[800px] bg-transparent"></div>
            <div className="bg-black">
              <Content2 />
              <Content3 />
              <Content4 />
              <Content5 handleFooterLinks={handleFooterLinks} handleSocialLinks={handleSocialLinks} />
            </div>
          </div>
```



步骤2:
在步骤1的基础上
1.滚动量在content2高度内，
content2的isFinalStep默认为false, 
向下滚动则将isFinalStep设为true，
向上滚动isFinalStep为false, 
通过上下滚动切换状态


滚动检测判断，再次滚动的时候，当isFinalStep为false, 继续向上滚动则到上一个元素，
滚动检测判断，再次滚动的时候，当isFinalStep为true,继续向下滚动则到下一个元素





步骤3:
1.新建事件监听滚动事件
2.当鼠标滚动到某一个区域的时候，
    具体行为：有a,b两种样式
    * 向下滚动，会触发样式切换和动画，例如从a，切换到b样式
    * 反之，向上滚动，也会触发切换，从b，切换到a样式
    * 滚动量为该元素高度的1/3，滚动需要一次性到达滚动量才会触发切换
    * 如果继续滚动，就会切换到下一个元素
3.先实现pc端
    例如
    ```
      <div className="sticky top-0 z-20">
            {/* 透明区域：与a层高度相同 */}
            <div className="h-[800px] bg-transparent"></div>
            <div className="bg-black">
              <Content2 /> // 监听事件触发content2变化
              <Content3 />
              <Content4 />
              <Content5 handleFooterLinks={handleFooterLinks} handleSocialLinks={handleSocialLinks} />
            </div>
          </div>

       //   const [isFinalStep, setIsFinalStep] = useState(true); 触发这个状态的改变   
    ```



