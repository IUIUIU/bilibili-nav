# bilibili-nav

注意：请解压bilibili.zip项目文件之后再npm install 然后再npm run serve运行

Vue 仿写 B 站侧边到导航栏
搬运来源：https://github.com/NightCatSama/vue-bilibili-nav

[在线预览 demo](https://nightcatsama.github.io/vue-bilibili-nav/example/dist/)

![动态图](https://cdn.nlark.com/yuque/0/2021/gif/632836/1621933340071-a8449e91-6bc5-461e-8d29-fb81ff80886e.gif) 


## options

```js
let options = {
	offset: 150,          //  滚动监测偏移值
	bindData: this.data,  //  绑定可排序数组数据
	backToTop: 0,         //  距离顶部多少距离时显示backtotop按钮
	data: [{              //  导航条数据，基于this.data生成
		name: '动画',
		target: 'id1'
	}, {
		name: '番剧',
		target: 'id2'
	},
	...
	]
}
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```
