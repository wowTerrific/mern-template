import { Link } from 'react-router-dom';
import { useState } from 'react';


const Nav = () => {

	const [showMobile, setShowMobile] = useState(false);
	const [navHide, setNavHide] = useState('hide-nav')

	const newPage = () => {
		setShowMobile(false);
		setNavHide('hide-nav');
	}

	return (
	    <div id="nav-container">
	        <div id="nav-btn-mobile" onClick={ () => {
	          setShowMobile(!showMobile);
	          setNavHide( navHide === 'hide-nav' ? '' : 'hide-nav')
	          console.log(showMobile)} 
	          }>
	            <div className="nav-btn-bar"></div>
	            <div className="nav-btn-bar"></div>
	            <div className="nav-btn-bar"></div>
	        </div>
	        
						<nav id="desk-nav">
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/services">Services</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</nav>
						
						<nav id="mobile-nav" className={ navHide }>
							<ul>
								<Link to="/" onClick={newPage}><li>Home</li></Link>
								<Link to="/services" onClick={newPage}><li>Services</li></Link>
								<Link to="/about" onClick={newPage}><li>About</li></Link>
								<Link to="/contact" onClick={newPage}><li>Contact</li></Link>
							</ul>
						</nav>
		</div>
	)
}

export default Nav
