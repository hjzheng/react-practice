import 'normalize.css';
import './App.scss';
// 添加 react-lumberjack https://github.com/ryanflorence/react-lumberjack
// import 'react-lumberjack';
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
import CSSModule from './cssModule';
// import { If, Else, Then } from './If';
import TestHoC from './HoC/TestHoC';
import Checkbox from './checkbox';
import Radio from './radio';

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
			value: 'xian',
			loading: true,
			checked: true,
			radioChecked: false,
			radioGroupChecked: 'React',
			checkList: [
				{label: 'React', checked: true},
				{label: 'Flux', checked: false},
				{label: 'Mobx', checked: false}
			]
		};
		this.options = [
			{ label: '西安', value: 'xian' },
			{ label: '上海', value: 'shanghai' },
			{ label: '北京', value: 'beijing' },
			{ label: '杭州', value: 'hangzhou' },
			{ label: '厦门', value: 'xiamen' },
			{ label: '成都', value: 'chengdu' }
		];
		this.checkList = [
			{label: 'AngularJS1.x', checked: true},
			{label: 'AngularJS2', checked: false},
			{label: 'AngularJS4', checked: false}
		];
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 3000);
	}

	checkCheckbox(checked) {
		this.setState({
			checked
		});
	}

	checkCheckboxGroup(checkedList) {
		console.log(checkedList);
	}

	checkCheckboxGroupControl(checkList) {
		this.setState({
			checkList
		});
	}

	checkRadio(radioChecked) {
		this.setState({
			radioChecked
		});
	}

	checkRadioGroup(radioGroupChecked) {
		this.setState({
			radioGroupChecked
		});
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
				<Modal title={'This is a Title No.1'} visible={this.state.visible} onOK={::this.onOK} ref={modalInstance => modalInstance && modalInstance.test()}>
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
				<CSSModule />
				<h2>jsx-control-statements</h2>
				<If condition={1} >
					<div>IfBlock</div>
				</If>
				<If condition={1} >
					one
					{'two'}
					<div>three</div>
					<span>four</span>
				</If>
				<For each="item" index="idx" of={[1, 2, 3]}>
					<span key={idx}>{item}</span>
					<span key={idx + '_2'}>Static Text</span>
				</For>
				<h2>HoC</h2>
				<TestHoC isLoading={this.state.loading} prop1="prop1" prop2="prop2" />
				<h2>Checkbox(非受控组件)</h2>
				<Checkbox defaultChecked>AngularJS</Checkbox>
				<Checkbox>React</Checkbox>
				<Checkbox disabled>Webpack</Checkbox>
				<h2>Checkbox(受控组件)</h2>
				<Checkbox checked={this.state.checked} onChange={::this.checkCheckbox}>AngularJS</Checkbox>
				<h2>Checkbox Group(非受控)</h2>
				<Checkbox.Group defaultCheckList={this.checkList} onChange={::this.checkCheckboxGroup} />
				<Checkbox.Group onChange={::this.checkCheckboxGroup}>
					<Checkbox>平民</Checkbox>
					<Checkbox>预言家</Checkbox>
					<Checkbox>狼人</Checkbox>
					<Checkbox>老板</Checkbox>
				</Checkbox.Group>
				<h2>Checkbox Group(受控)</h2>
				<Checkbox.Group checkList={this.state.checkList} onChange={::this.checkCheckboxGroupControl} />
				<h2>Radio</h2>
				<Radio label="开心" checked disabled />
				<Radio checked={this.state.radioChecked} onChange={::this.checkRadio}>程序员</Radio>
				<h2>Radio Group(受控)</h2>
				<Radio.Group value={this.state.radioGroupChecked} onChange={::this.checkRadioGroup}>
					<Radio>Vue</Radio>
					<Radio>AngularJS</Radio>
					<Radio>React</Radio>
				</Radio.Group>
            </div>
        );
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
