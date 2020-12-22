import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<main className="">
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Hero} />
					<Route path='/about' component={About} />
					<Route path='/projects' component={Projects} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</BrowserRouter>
		</main>
	);
}

export default App;