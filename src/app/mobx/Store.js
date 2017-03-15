import mobx, {observable, computed} from 'mobx';

class Store {
	@observable todos = [];

	constructor() {
		mobx.autorun(() => {
			console.log(this.report());
		});
	}

	@computed get completedTodosCount() {
		return this.todos.filter(
			todo => todo.done === true
		).length;
	}

	addTodo(todo) {
		this.todos.push(todo);
	}

	report() {
		return `${this.completedTodosCount} / ${this.todos.length}`;
	}

	getTodos() {
		setTimeout(() => {
			this.todos = [
				{id: 1, thing: 'learn java', done: true},
				{id: 2, thing: 'learn javascript', done: true},
				{id: 3, thing: 'learn angular', done: true},
				{id: 4, thing: 'learn react', done: false}
			];
		}, 1000);
	}
}
export default new Store();
