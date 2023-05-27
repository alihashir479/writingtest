import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';


// Home Pages Import
import DigitalAgency from './pages/DigitalAgency';

// Blog Import
import BlogGridView from './pages/BlogGrid';
import BlogCategory from './pages/Category';
import BlogArchive from './pages/Archive';
import BlogDetails from './pages/BlogDetails';

// Service 
import Service from './pages/Service/service';
// Pages 
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Css Import
import './assets/scss/app.scss';


const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<DigitalAgency />}/>


				{/* Blogs */}
				<Route path={process.env.PUBLIC_URL + "/blog/"} element={<BlogGridView />}/>
				<Route path={process.env.PUBLIC_URL + "/category/:slug"} element={<BlogCategory />}/>
				<Route path={process.env.PUBLIC_URL + "/archive/:slug"} element={<BlogArchive />}/>
				<Route path={process.env.PUBLIC_URL + "/blog-details/:id"} element={<BlogDetails />}/>

				{/* Service */}
				<Route path={process.env.PUBLIC_URL + "/assignment-help/"} element={<Service />}/>

				{/* Pages  */}
				<Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />}/>
				<Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />}/>
				<Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy />}/>

			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
