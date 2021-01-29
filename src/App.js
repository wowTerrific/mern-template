import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Helmet test
import Site from "./_site_var"
import { Helmet } from "react-helmet";

const App = () => {
  return (
	<>
	  <Helmet>
		<title>{ Site.name } | Title</title>
	  	<meta name="description" content="This is a test description" />
	  </Helmet>
	  <Header>
		<Nav />
	  </Header>
	   <h3 style={{ fontSize: "50px" }}> {Site.location} </h3>
	  <Footer />
	</>
  );
}

export default App;
