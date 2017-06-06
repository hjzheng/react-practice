import styles from './index.scss';
import React, { Component} from 'react';
class CSSModule extends Component {

	constructor(props) {
		super(props);
		console.log(styles);
		this.cssVar = styles.primaryColor;
	}

	render() {
		return (
			<div className={styles.header}>
				<h2 className={styles.title}>CSS Module 学习</h2>
				{'css module 对所有 className 进行'}
				{Object.keys(styles).map(key => <div key={key} className={styles.map}><span className={styles.key}>{key}:</span><span>{styles[key]}</span></div>)}
				{'使用 composes 组合样式'}
				<button className={styles['primary-button']}>测试 composes </button>
				{'使用 :export 导出 css 中的变量'}
				<div>{this.cssVar}</div>
			</div>
		);
	}
}

export default CSSModule;
