cnpm i create-react-app -g 全局安装 create-react-app 快速构建react环境
create-react-app life-cycle 创建一个react 的文件
cnpm i prop-types -S        需要指定某种字符串的类型
## 挂载阶段
 - componentwillMount 即将挂载
 - componentDidMount 已经挂载

## 更新阶段

shouldComponentUpdate
true 更新
false 不更新

componentWillUnmount
清理
定时器
全局事件绑定


## red blue
// parent state 
{
    theme: 'red'
}
theme 层层传递从最外面层的 父组件传到子组件 再到 孙组件
Context 的作用就是解决 这个问题 ，它可以进行 跨层传递

使用 Context 时候
1. 父组件 通过 getChildContext 返回提供的 context 内容
2. 父组件 通过 .childContextTyps 定义 提供的 context 类型
3. 子组件 获取的时候 .contextTypes 定义接收的类型 this.context 获取

4. vuex 改变 比较困难

问题：
   - 15.xxx 跨层级传递的时候，假如中间某一组件 shouldComponentUpdate()  { return false }
    之后，后代 不会更新 context 的数据不会同步 。
   - 16.xxx shouldComponentUpdate()  { return false } 则还可以改变

    16.XXX
    1. 构造 Provider Consumer
    2. 父组件 <Provider value={} /> 提供数据
    3. 后代组件 <Consumer> { () => {} } </Consumer>   获取数据
    4. state = { theme: 'purple' , toggle: 'this.handleToggletheme'}
        静态属性 无法获取 实例的 this



## function && class 组件的区别
    function component 也叫做 dumb component 只做一件事：
        根据props 渲染页面，不会依赖任何东西，没有状态 state。性能好
    class component 也叫做 smart component 需要负责 状态的管理，可能就需要依赖于其他的组件



子组件向父组件传值 通过 回调 onChang={this.handleChange}

## 状态管理
    redux    cnpm i redux -S
        把整个应用的状态当作放在全局的位置，任何一个组件都可以拿到这份状态
        全局定义 var a = 1  a 就是一个全局的变量
        定制了一套更改数据的流程 （因为更改比较难）
    mobx
## action
    - action 是 js 中的一个 对象 {}，易于描述，可以用来描述干什么，传递数据
        type: 'INCREMENT'
## Reducer
    - 是一个函数
    - 负责一个功能就是更新 store (store 就是存数据的地方 )

## hoc 高阶组件
    high order component
    高阶函数 
        接收一个函数作为参数 返回一个 函数
    高阶组件
        接收一个组件作为参数 返回一个组件

    高阶组件 将组件之间相似的功能集中处理

## @
    es7 里面的 装饰器 decorator
