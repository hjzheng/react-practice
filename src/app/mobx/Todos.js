import React from 'react';
import { observer } from 'mobx-react';
import store from './Store';
import ChildComponent from './ChildComponent';

@observer
class Todos extends React.Component {

	constructor(props) {
		super(props);
		this.init();
	}

	init() {
		store.getTodos();
	}

	addTodo() {
		store.addTodo({id: store.todos.length + 1, thing: this.refs.todo.value, done: false});
	}

	doSomeAction() {
		store.nestObj.obj.anotherObj.a += 1;
		store.nestObj.obj.anotherObj.b = 2;
	}

	render() {
		let todos = store.todos.map(todo => {
			return (
				<li key={todo.id}>
					<label style={{'textDecoration': todo.done ? 'line-through' : 'none'}}>
						<input type="checkbox" checked={todo.done} onChange={() => { todo.done = !todo.done; }} />{todo.thing}
					</label>
				</li>
			);
		});

		return (
			<div>
				<ul>
					{todos}
				</ul>
				Task done: {store.completedTodosCount} / {store.todos.length}
				<input ref="todo" /><button onClick={::this.addTodo}>Add Todo</button>
				<ChildComponent fn={this.doSomeAction} nestObj={store.nestObj} />
			</div>
		);
	}
}

export default Todos;
