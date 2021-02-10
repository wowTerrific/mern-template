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
							<div className="description-content flex-item-50">
								<h3>Get in touch</h3>
								<p>Here's a little blurb about why you should reach out to us or maybe some info about your hours and what not.</p>
							</div>
							<div className="form flex-item-50">
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
