# UIO
> 为React-Native而生的ui框架

```js

import {
  TitleBar,
  SideBar
} from 'uio';

```

# TitleBar
> Icon lib: [http://ionicframework.com/docs/v2/ionicons/](http://ionicframework.com/docs/v2/ionicons/)

```js
<TitleBar
  title="xxx"
  backgroundColor="#09F"
  leftButton={{
    icon: 'ios-menu',
    color: 'white', // default,
    onPress: () => {}
  }}
  rightButton={{
    [sameAs:leftButton]
  }}
/>
```


# Row
> 为`ListView`和`ScrollView`提供的`Row` ui组件

```js

<Row
  type="thumb-title-desc-info"
  thumb="http://xxx.com/aa.png"
  title="列表的标题11"
  desc="哈哈哈哈，简介！"
  info={[
    { icon: 'comment', text: '评论', align: 'left' },
    { icon: 'date', text: '时间', align: 'right'}
  ]}
  onPress={() => {}}
/>

```

## type属性
> enum类型，指定row的样式

| 类型 | 说明 |
| :---|:---|
| thumb-title-desc-info | 左边图片，右边标题＋简介＋下边的信息栏（可放时间、作者、评论、浏览数等） |
| thumb-title-info | 左边图片＋右边标题＋右边信息 |
| thumb-title | 左边图片＋右边标题 |
| title-desc-info-thumb | 左边标题＋简介＋信息栏 ＋ 右边图片 |
| title-desc-info | 标题＋简介＋信息 |
| title-desc | 类推 |
| title-info | .. |
| title-info-thumb



- thumb-title-desc-info
- thumb-title-desc
- thumb-title-info
- thumb-title

- title-desc-info-thumb
- title-desc-thumb
- title-info-thumb
- title-thumb

- title-desc-info
- title-desc
- title-info


## info属性
> 用于在标题下方显示信息，如评论数、发布时间等
> typeof info = Array

| 属性 | 说明 |
| :-- | :-- |
| icon | 图片，可为空 |
| text | 文字 |
| align | 布局，enum={left, center, right} |

