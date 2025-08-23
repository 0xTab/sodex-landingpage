1.访问.cursor文件，了解并遵守代码规范

2.该项目是pc和moile端，实现的时候需要考虑到兼容两端
 * 页面由5个模块组成，和1个header组件
 * 请按顺序一个一个还原
 * 每个模块的背景图片在public/img/home， 例如content1.webp就是模块1的背景图片



3.访问此 Figma 设计链接 ，
   — 并精确还原设计
   - 确保所有样式、元素和交互符合设计规范
   — 参考以上规则和信息

   
4.还原样式之前，获取 Figma 设计稿信息后，依据 mapping.json 进行组件匹配：
   - 按照规则：使用 Figma 中的 "name" 参数作为键名查找mapping.json对应的代码组件路径。
   - 如果匹配，根据匹配项，找到匹配的组件路径和名称，输出匹配的组件
   
   例如
   * figma的name匹配components里面的键名
   * 例如figma有一个name为Mybutton, 匹配到了mapping.json里面的Mybutton
   * 还原页面的时候，则根据找到匹配的组件路径和名称，输出匹配的组件Mybutton代替
    

6.合理拆分并且复用新的子组件，
- 拆分5为6个组件，每个模块1个组件，header一个组件
- 子组件代码放置到 `/src/components` 文件中。
— 遇到可以复用的组件在放置到该文件夹中  

7.只提交为1个commit