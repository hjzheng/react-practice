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
- 关于 React 在 [0.13](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html) 中取消自动绑定的原因:
    - 表面上看自动绑定给开发带来了便利，而Facebook却认为这破坏了JavaScript的语言习惯，其背后的神奇（Magic）逻辑或许会给初学者带来困惑，甚至开发者如果从React再转到其它库也可能会无所适从。
- 关于 React 对文本加 react-text 注释(comments) 的[原因](https://stackoverflow.com/questions/38133978/reactjs-net-are-react-text-tags-required-when-rendered):
    - 该注释是提供为 React 内部使用的, 举例说明 如果你需要 render 两个彼此相邻的变量, React 通过这些注释区别两个变量的位置, 从而进行准确的更新, 之前版本使用的使用 `<span>`
- 关于 React render 只能输出 0 个 或 1 个节点, 会导致添加不必要的包裹节点: 未来版本可能会支持多节点输出 https://github.com/facebook/react/issues/2127
