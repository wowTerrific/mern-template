import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Site from "../_site_var";

const Nav = () => {

	const [showMobile, setShowMobile] = useState(false);
	const [navHide, setNavHide] = useState('hide-nav')

	useEffect( () => toTop(), [navHide]);

	const toTop = () => window.scrollTo(0, 0);

	const newPage = () => {
		setShowMobile(false);
		setNavHide('hide-nav');
	}

	const deskLinks = Site.mainPages.map( x => <li key={x.key}><Link to={x.link} onClick={toTop}>{x.name}</Link></li> );
	const mobileLinks = Site.mainPages.map( x => <Link to={x.link} onClick={newPage} key={x.key}><li>{x.name}</li></Link> );

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
								{deskLinks}
							</ul>
						</nav>
						
						<nav id="mobile-nav" className={ navHide }>
							<ul>
								{mobileLinks}
							</ul>
						</nav>
		</div>
	)
}

export default Nav
