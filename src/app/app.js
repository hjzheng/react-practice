import 'normalize.css';
import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './jsx/Test';
import List from './component/List';
import Profile from './component/Profile';
import State from './component/State';
import LifeCycle from './component/LifeCycle';
import FilterableProductTable from './thinking/FilterableProductTable';
import PRODUCTS from './thinking/data';
import Todos from './mobx/Todos';
import Tabs from './tabs';
import Modal from './modal';
import DropDown from './dropdown';

let profileData = {
	name: 'HeHe',
	age: 30,
	skills: ['AngularJS1.x', 'Webpack', 'React'],
	child: <State stateText="watching movie" />
};


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			value: 'xian'
		};
		this.options = [
			{ label: '西安', value: 'xian' },
			{ label: '上海', value: 'shanghai' },
			{ label: '北京', value: 'beijing' },
			{ label: '杭州', value: 'hangzhou' },
			{ label: '厦门', value: 'xiamen' },
			{ label: '成都', value: 'chengdu' }
		];
	}

	openConfirm() {
		Modal.confirm({'title': '这是一个确认框', message: '你确定你要做折磨SB的事情吗?'});
	}

	openConfirm2() {
		Modal.confirm({'title': '这是一个确认框', message: '你确定你要做折磨SB的事情吗?', container: this.refs.confirm.appendChild(document.createElement('div'))});
	}

	openModal() {
		this.setState({
			visible: true
		});
	}

	onOK() {
		this.setState({
			visible: false
		});
	}

	dropdownChange() {
		console.log(arguments);
	}

	dropdownChangeValue(value) {
		this.setState({
			value
		});
	}

	render() {
        return (
            <div>
                <h2>Hello React</h2>
                <h3>JSX</h3>
                <Test />
				<h3>Component</h3>
				<List />
				<h3>Tabs</h3>
				<Tabs>
					<Tabs.Pane label="第一个">第一个内容</Tabs.Pane>
					<Tabs.Pane label="第二个">第二个内容</Tabs.Pane>
					<Tabs.Pane label="第三个">第三个内容</Tabs.Pane>
				</Tabs>
				<h3>对话框</h3>
				<Modal title={'This is a Title No.1'} visible={this.state.visible} onOK={::this.onOK}>
					This is a Modal No.1
				</Modal>
				<Modal title={'This is a Title No.2'} footer={<div>自定义footer</div>}>
					This is a Modal No.2
				</Modal>
				<button onClick={::this.openModal}>打开第一个对话框</button>
				<button onClick={this.openConfirm}>打开一个确认框</button>
				<h3>选择框</h3>
				<div>
					<DropDown defaultValue={'xian'} onChange={this.dropdownChange} options={[{ label: '西安', value: 'xian' }, { label: '上海', value: 'shanghai' }, { label: '北京', value: 'beijing' }]} />
					<DropDown value={this.state.value} onChange={::this.dropdownChangeValue} options={[{ label: '西安', value: 'xian' }, { label: '上海', value: 'shanghai' }, { label: '北京', value: 'beijing' }]} />
					<DropDown options={this.options} />
					<DropDown defaultValue={'github'} >
						<DropDown.Option value="facebook">
							<i className="fa fa-facebook-official" aria-hidden="true">&nbsp;facebook</i>
						</DropDown.Option>
						<DropDown.Option value="github">
							<i className="fa fa-github-square" aria-hidden="true">&nbsp;github</i>
						</DropDown.Option>
						<DropDown.Option value="twitter">
							<i className="fa fa-twitter-square" aria-hidden="true">&nbsp;twitter</i>
						</DropDown.Option>
						<DropDown.Option value="weixin">
							<i className="fa fa-weixin" aria-hidden="true">&nbsp;weixin</i>
						</DropDown.Option>
					</DropDown>
				</div>
				<Profile name={'hjzheng'} age={23} child={<State />} />
				<Profile {...profileData} />
				<LifeCycle test={'test'} />
				<h3>thinking</h3>
				<FilterableProductTable products={PRODUCTS} />
				<h3>Todos</h3>
				<Todos />
				<h2 onClick={::this.openConfirm2}>Confirm 试验</h2>
				<div ref="confirm"></div>
            </div>
        );
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
