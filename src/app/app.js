import React from 'react';
import ReactDOM from 'react-dom';
import Test from './jsx/Test';
import List from './component/List';
import Profile from './component/Profile';
import State from './component/State';
import LifeCycle from './component/LifeCycle';


let profileData = {
	name: 'HeHe',
	age: 30,
	skills: ['AngularJS1.x', 'Webpack', 'React'],
	child: <State stateText="watching movie" />
};


class App extends React.Component {

	render() {
        return (
            <div>
                <h2>Hello React</h2>
                <h3>JSX</h3>
                <Test />
				<h3>Component</h3>
				<List />
				<Profile name={'hjzheng'} age={23} child={<State />} />
				<Profile {...profileData} />
				<LifeCycle test={'test'} />
            </div>
        );
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);