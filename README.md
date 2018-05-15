# jquery_plugin_equal 等高插件


# 默认配置 

```
{
   'type':'ave',
   'add':0,
   'selector':''
}
```
## 平均值等高（相同元素）

```
$('.equal_1').equalHeight({'add':10})//平均等高 低于50不参与瓜分高度 最终高度加10。返回的是当前dom对象可以链式操作

$('.equal_1').equalHeight({'add':10}).find('img').css('height','100%')//平均等高 低于50不参与瓜分高度 最终高度加10，内部的图片高度一致
```
## 最大高度等高（相同元素）

```
$('.equal_2').equalHeight({'type':'max'}).css('position','relative').find('a:last').css({'position':'absolute','bottom':'0px'})//最大等高 最后一个元素平齐
```
## 不同元素等高

```
$('.equal_1').equalHeight({'select':'#abc'})//.equal_1 和#abc 等高，高度为最大元素的高度
```

