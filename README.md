### PreviewImage

#### 开发流程
##### 图片依赖node服务，提供图片
```
cd server
node index.js
```
##### 可预览组件
```
yarn storybook
```


#### previewdemo看效果

```
import PreviewImage from './PreviewImage';
PreviewImage({
  images: [],
  index: 1
})
```

const Config = {
  next: true      // 切换下一张图 按钮
  pre: true      // 回到上一张图 按钮
  plus: true    // 放大 按钮
  minus: true   // 缩小按钮
  refresh: true   // 初始化
  flipLeft: true   // 逆时针方向旋转 按钮
  flipRight: true  // 顺时针方向旋转
  arrowH: true   // 水平方向翻转（以y轴对称） 按钮
  arrowV: true  // 垂直方向翻转（以x轴对称） 按钮
}

| 属性             | 说明              |  类型            | 默认值           |   
| :----------------| :------------------| :---------------| :---------------|
| images           | 待预览图片的`url`    | `string[]`      | []              |
| inde             | 初始化展开图片的索引  | `number`       | `0`           |
| maskCloseable    | 点击遮罩层关闭       | `boolean`       | false            |
| config           | 底部操作配置         | `object`        | `Config`         |
| configSlot       | 替换操作去内容     | `React.ReactNode | string` |   |
