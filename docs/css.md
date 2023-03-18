##### 实现外层 div 在 input 获得焦点时产生样式变化可以使用 CSS 伪类 :focus-within。

CSS 伪类 :focus-within 可以匹配当前元素或其后代元素中拥有焦点的元素，因此当 input 获得焦点时，外层 div 也会匹配到 :focus-within 伪类的样式规则。

以下是一个简单的示例代码，演示如何使用 :focus-within 伪类来实现外层 div 在 input 获得焦点时产生样式变化。

```HTML
<div class="container">
  <input type="text" placeholder="Input something here...">
</div>
```
CSS 代码：
```CSS
.container {
  border: 1px solid gray;
  padding: 10px;
}

.container:focus-within {
  border: 1px solid blue;
}
```

在上面的示例中，外层 div 的初始样式为 1 像素灰色边框和 10 像素内边距。当 input 获得焦点时，外层 div 的边框颜色将变为蓝色，以表示样式变化。



