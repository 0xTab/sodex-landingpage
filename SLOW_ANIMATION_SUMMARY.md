# Content2 慢速动画效果总结

## 动画配置

### 1. 主要过渡动画
- **持续时间**：3000ms (3秒)
- **缓动函数**：ease-in-out (平滑的进入和退出)
- **布局切换**：flex-col ↔ flex-row
- **图片尺寸变化**：786x450 ↔ 541x310

### 2. 延迟动画时序
- **0ms**：开始布局和图片尺寸变化
- **1000ms**：第一个 feature card 开始出现/消失
- **1500ms**：第二个 feature card 开始出现/消失
- **2000ms**：标题开始出现/消失
- **2500ms**：副标题开始出现/消失
- **3000ms**：所有动画完成

### 3. 交互效果
- **Feature Cards**：hover 时的缩放效果 (scale-105)，1000ms 过渡
- **图标**：hover 时的旋转效果 (rotate-12)，1000ms 过渡

## 动画效果

### isFinalStep = false → true (向下滚动)
1. **0-3000ms**：图片尺寸从 786x450 平滑过渡到 541x310
2. **0-3000ms**：布局从 flex-col 切换到 flex-row
3. **1000-4000ms**：左侧第一个 feature card 淡出并滑动隐藏
4. **1500-4500ms**：左侧第二个 feature card 淡出并滑动隐藏
5. **1000-4000ms**：右侧第一个 feature card 淡出并滑动隐藏
6. **1500-4500ms**：右侧第二个 feature card 淡出并滑动隐藏
7. **2000-5000ms**：标题淡出并向下滑动
8. **2500-5500ms**：副标题淡出并向下滑动

### isFinalStep = true → false (向上滚动)
1. **0-3000ms**：图片尺寸从 541x310 平滑过渡到 786x450
2. **0-3000ms**：布局从 flex-row 切换到 flex-col
3. **1000-4000ms**：左侧第一个 feature card 淡入并滑动显示
4. **1500-4500ms**：左侧第二个 feature card 淡入并滑动显示
5. **1000-4000ms**：右侧第一个 feature card 淡入并滑动显示
6. **1500-4500ms**：右侧第二个 feature card 淡入并滑动显示
7. **2000-5000ms**：标题淡入并向上滑动
8. **2500-5500ms**：副标题淡入并向上滑动

## 技术实现

### CSS 类名
- `transition-all duration-3000 ease-in-out`：主要过渡效果
- `opacity-100/opacity-0`：透明度控制
- `transform translate-x-0/translate-x-10`：水平位移
- `transform translate-y-0/translate-y-10`：垂直位移
- `w-auto/w-0 overflow-hidden`：宽度控制
- `delay-1000/delay-1500/delay-2000/delay-2500`：延迟控制

### 用户体验
- **超慢速动画**：3秒的过渡时间让用户有充足时间观察变化
- **层次化时序**：1秒间隔的延迟创造明显的层次感
- **平滑缓动**：ease-in-out 让动画更加自然
- **完整动画周期**：从开始到完全结束需要5.5秒

## 注意事项
- 动画时间较长，适合展示和演示场景
- 用户需要耐心等待动画完成
- 建议在动画期间禁用滚动事件
- 移动端保持原有静态布局
