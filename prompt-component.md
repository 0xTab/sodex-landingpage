1.访问.cursor文件，了解并遵守代码规范

2.该项目是pc和moile端，实现的时候需要考虑到兼容两端
 * 遇到需要的下载的图片请下载到/Users/soso/Documents/code/sodex-landingpage/public/img/home
 * 访问tailwind.config，获取系统自定义颜色，

3.访问此 Figma 设计链接 
   — 并精确还原设计
   - 确保所有样式、元素和交互符合设计规范
   — 参考以上规则和信息
   — 根据设计稿，使用tailwind实现样式还原，

   
4.还原样式之前，获取 Figma 设计稿信息后，依据 mapping.json 进行组件匹配：
   - 按照规则：使用 Figma 中的 "name" 参数作为键名查找mapping.json对应的代码组件路径。
   - 如果匹配，根据匹配项，找到匹配的组件路径和名称，输出匹配的组件
   
   例如
   * figma的name匹配components里面的键名
   * 例如figma有一个name为Mybutton, 匹配到了mapping.json里面的Mybutton
   * 还原页面的时候，则根据找到匹配的组件路径和名称，输出匹配的组件Mybutton代替

 5.新建的组件放置到src/components里

 6.阅读tailwind.config.js，使用里面的自定义颜色和自定义断点实现响应式，例如mobile和pc作为响应式切换