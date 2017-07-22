# vue-component-boilerplate

vue开发组件的脚手架,支持组件按需加载。

### Usage

```
1. npm install
2. npm run build	// 打成umd格式的包
3. npm run dev		// 运行demo
4. open 0.0.0.0:8082
```

### Features

* vue2
* webpack2



### 目录结构
```
├── lib						// 组件打成umd格式后输出的目录
├── src 					// 组件目录
├── demo					// demo目录					
├── test					// demo模板html目录				
├── package.json
└── README
```

### Explation

1. npm run build： 打成umd格式的包输入到lib
2. 用法在demo文件夹里

### CHANGELOG

1.0.0  初版

1.0.1 删除shell依赖

2.0.0 按需加载组件，css不需要单独引入

2.0.1 demo增加cssnano,autoprefixer ie>=8 安卓>=4.3
