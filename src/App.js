import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
	return (
		<main>
			<BrowserRouter basename={window.location.pathname}>
				<Switch>
					<Route exact path='/' component={Projects} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</BrowserRouter>
		</main>
	);
}
