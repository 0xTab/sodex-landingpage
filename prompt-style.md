如何实现 
1.图层有两层 a层是层叠关系中最底部的元素，高度为500px, 最上面还有一层为b层,高度不详 
2.初始情况下，a层完全显示，b层元素分为两块，一块a图层一样高度为透明，剩下的显示黑色背景 
3.鼠标滑轮滚动，a层不动，b层向上滚动，黑色色块覆盖向上覆盖，遮挡a层元素 
4.最后b层完全遮挡a层后
5.b层继续滚动，知道b层元素滚动到他自己元素的底部


应用到项目中， 先实现pc端

  <main className="pc:relative mobile:hidden">
          <HeroSection /> // 为a层，位于层叠关系最底部
          <div> // 为b层，位于层叠关系最上层，为滚动元素
            <Content2 />
            <Content3 />
            <Content4 />
            <Content5 handleFooterLinks={handleFooterLinks} handleSocialLinks={handleSocialLinks} />
          </div>
        </main>