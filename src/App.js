import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hom from './pages';
import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import Buy  from './pages/buy';
import Footer from './foot/Footer';
import Privacy from './foot/privacy';
import Terms from './foot/terms';

function App() {

return (
  <div>
	<Router>
	 <Navbar />
	 <Switch>
		<Route path='/' exact component={Hom} />
		<Route path='/home' component={Home} />
		<Route path='/about' component={About} />
		<Route path='/team' component={Team} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/buy' component={Buy} />
		<Route path='/contact' component={Contact} />
		<Route path='/privacy' component={Privacy} />
		<Route path='/terms' component={Terms} />
	 </Switch>
	</Router>

	<Footer />
 </div>	
);
}

export default App;
