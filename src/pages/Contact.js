import Site from "../_site_var"
import { Helmet } from "react-helmet";

import Container from "../components/Container";
import FlexContainer from "../components/FlexContainer";
import ContactForm from "../components/ContactForm";
import "../components/contactform.css"

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contact | { Site.name }</title>
				<meta name="description" content="This is a test Contact Description" />
			</Helmet>
			<main>
				<section className="hero">
					<Container>
						<h1>Contact Us</h1>
					</Container>
				</section>
				<section className="description">
					<Container>
						<FlexContainer>
							<div className="description-content flex-m-50">
								<h3>Get in touch</h3>
								<p>Here's a little blurb about why you should reach out to us or maybe some info about your hours and what not.</p>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14464.011438319441!2d-71.00875476219463!3d25.000018791134593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89451ab5034cb7ab%3A0xb600ecf3df7aca4d!2sBermuda%20Triangle!5e0!3m2!1sen!2sus!4v1613075498659!5m2!1sen!2sus" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
							</div>
							<div className="form flex-m-50">
								<ContactForm />
							</div>
						</FlexContainer>
					</Container>
				</section>
			</main>
		</>
	)
}

export default Contact
