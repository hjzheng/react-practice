# react-practice

#### 自己玩

- `npm install`

- `npm run dev`

- 访问 `http://localhost:8080/src/index.html`

#### 练习内容

- 关于 [CSS Module](https://github.com/camsong/blog/issues/5)
- 关于 [react中 条件表达式](https://github.com/ShuyunXIANFESchool/FE-problem-collection/issues/40):
    - if
    - jsx-control-statements
- 使用 [react-lumberjack](https://github.com/ryanflorence/react-lumberjack)
- 组件练习:
    - dropdown
    - tabs
    - modal
- Mobx

#### 乱七八糟

- 关于 React 在 [0.13](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html) 中取消自动绑定的原因:
    - 表面上看自动绑定给开发带来了便利，而Facebook却认为这破坏了JavaScript的语言习惯，其背后的神奇（Magic）逻辑或许会给初学者带来困惑，甚至开发者如果从React再转到其它库也可能会无所适从。
- 关于 React 对文本加 react-text 注释(comments) 的[原因](https://stackoverflow.com/questions/38133978/reactjs-net-are-react-text-tags-required-when-rendered):
    - 该注释是提供为 React 内部使用的, 举例说明 如果你需要 render 两个彼此相邻的变量, React 通过这些注释区别两个变量的位置, 从而进行准确的更新, 之前版本使用的使用 `<span>`
- 关于 React render 只能输出 0 个 或 1 个节点, 会导致添加不必要的包裹节点: [未来版本可能会支持多节点输出](https://github.com/facebook/react/issues/2127)
- State 应该放什么? 引用别人一段:

```js
function shouldIKeepSomethingInReactState() {
    if (canICalculateItFromProps()) {
        // Don't duplicate data from props in state
        // Calculate what you can in render() method.
        return false;
    }

    if (!amIUsingItInRenderMethod()) {
        // Don't keep something in the state
        // if you don't use it for rendering.
        // For example, API subscriptions are
        // better off as custom private fields
        // or variables in external modules.
    }

    // you can use React state for this.
    return true
}
```
- 关于 [PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
    - 复杂类型 使用 shape
    - 自定义校验
    - 生产环境, 删除 PropTypes: [插件](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types)
    - 通过 PropTypes 生成 doc: [docgen](https://github.com/reactjs/react-docgen)
- React StoryBook (?)
- Container and Presentational pattern [example](https://github.com/hjzheng/react-demo-starter)
    - Container components
        - They are more concerned about the behavior
        - They render their presentational components
        - They make API calls and manipulate data
        - They define event handlers
        - They are written as classes
    - Presentational components
        - They are more concerned with visual representation
        - They render the HTML markup(or other components)
        - They receive data from the parents in the form of props
        - They are often written as stateless functional components
- Mixin and HoC (代码复用的角度, React 引入了 Mixin, 但又在 0.13 取消了 Mixin, 原因如下: [见官网](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html))
    - 官方提到的三个原因: 1. 引入了隐式依赖 2. 命名冲突 3. snowballing complexity
    - 本人认为主要还是命名冲突, 在中小型项目中, 解决了命名冲突, Mixin 也是不错的解决方案, 之前在 [AngularJS + ES6](https://github.com/hjzheng/angular-utils) 中使用 Mixin 装饰器的尝试, 效果还是很不错的.
    - HoC
        - 扩展 prop
        - 将无状态组件扩展为有状态组件
        - 其它功能 (?)

#### 相关书籍

- [React（第2版）：引领未来的用户界面开发框架](https://book.douban.com/subject/26918475/) 入门经典
- [React Design Patterns and Best Practices](https://book.douban.com/subject/26963822/) 进阶神器

#### 补充
- [脚手架](https://github.com/facebookincubator/create-react-app) 初学者福音
