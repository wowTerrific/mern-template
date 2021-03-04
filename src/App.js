import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoRoute from "./pages/NoRoute";
import Sitemap from "./pages/Sitemap";

const App = () => {
  return (
	<Router>
		<Header>
			<Nav />
		</Header>
		  <Switch>
			<Route exact path="/">
			  <Home />
			</Route>
			<Route path="/services">
			  <Services />
			</Route>
			<Route path="/about">
			  <About />
			</Route>
			<Route path="/contact">
			  <Contact />
			</Route>
			<Route path="/sitemap">
			  <Sitemap />
			</Route>
			<Route path="*">
			  <NoRoute />
			</Route>
		  </Switch>
		<Footer />
	</Router>
  );
}

export default App;
