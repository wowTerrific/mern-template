const ContactForm = () => {
	return (
		<form id="contact-form" style={{paddingRight: "25px"}} >
			<div>
				<label for="fname">First Name</label>
				<input type="text" id="fname" name="firstname" placeholder="Your name.." />
			</div>
			<div>
				<label for="lname">Last Name</label>
				<input type="text" id="lname" name="lastname" placeholder="Your last name.." />
			</div>
			<div>
				<label for="phone">Phone Number</label>
				<input type="tel" id="phone" name="phone" placeholder="(555) 555-5555" />
			</div>
			<div>
				<label for="email">Email Address</label>
				<input type="email" id="email" name="email" placeholder="your@email.com" />
			</div>
			<div>
				<label for="country">Contact Me Via</label>
				<select id="contactBy" name="contactBy">
				  <option value="email">Email</option>
				  <option value="Phone">Phone</option>
				</select>
			</div>
			<hr />
			<div>
				<label for="subject">Your Message</label>
				<textarea id="subject" name="subject" placeholder="Write something.."></textarea>
			</div>
			<div>
				<input type="submit" value="Submit" className="btn-primary" />
			</div>
		</form>
	)
}

export default ContactForm;