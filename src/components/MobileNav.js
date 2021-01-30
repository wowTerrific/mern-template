import { Link } from 'react-router-dom';
import { useState } from 'react';


const MobileNav = () => {

	const [showMobile, setShowMobile] = useState(false)

// check view-width to see if <= 767px
// if true - show mobile nav component
// else show current


	return (
	    <div id="nav-container">
	        <div id="nav-btn-mobile" onClick={ () => {setShowMobile(!showMobile); console.log(showMobile)} }>
	            <div className="nav-btn-bar"></div>
	            <div className="nav-btn-bar"></div>
	            <div className="nav-btn-bar"></div>
	        </div>
		    <nav>
			    <ul>
				    <li><Link to="/">Home</Link></li>
				    <li><Link to="/services">Services</Link></li>
				    <li><Link to="/about">About</Link></li>
				    <li><Link to="/contact">Contact</Link></li>
			    </ul>
		    </nav>
		</div>
	)
}

export default MobileNav
