import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


// add useEffect to do a window.scrollTo(0, 0)

const Nav = () => {

	const [showMobile, setShowMobile] = useState(false);
	const [navHide, setNavHide] = useState('hide-nav')

	useEffect( () => toTop(), [navHide]);

	const toTop = () => window.scrollTo(0, 0);

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
								<li><Link to="/" onClick={toTop}>Home</Link></li>
								<li><Link to="/services" onClick={toTop}>Services</Link></li>
								<li><Link to="/about" onClick={toTop}>About</Link></li>
								<li><Link to="/contact" onClick={toTop}>Contact</Link></li>
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
