import React from 'react';
import './Home.css';
import { SocialIcon } from 'react-social-icons';


import {Link} from 'react-router-dom';
import { AssessmentTwoTone, SocialDistanceOutlined } from '@mui/icons-material';
function Home() {
  return (
  



    <div>
      <header>
        <nav>
          <div className="logo">
            <img src="https://tse4.mm.bing.net/th?id=OIP.POXLgr0EHVvBkuRsY4mxdQHaEx&pid=Api&P=0&h=180" alt="Logo" />
          </div>
          <div className='move'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Album">Album</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="login"><Link to="/login">Login</Link></li>
            <li className="logout"><Link to="/price">Pricing</Link></li>
            <li className="signup"><Link to="/Signup">Sign Up</Link></li>
          </ul>
          </div>
        </nav>
      </header>
     <div className='back'>
      <main>
        <h1>TO ACHIEVE GREAT THINGS, TWO THINGS ARE NEEDED: A PLAN AND NOT QUITE ENOUGH TIME!</h1>
     

           <section className="dashboard">
          <div className="card-container">
            
            <div className="card"></div>
            <div className="card1"></div>
            <div className="card2"></div>
            </div>
            <h1>OUR SERVICES</h1>
            <div className="card1-container">
            <div className="card3"></div>
            <div className="card4"></div>
            <div className="card5"></div>
            </div>
        </section>  
      </main>

      

      <footer>
        <p>&copy; 2023 Heydays... All rights reserved.</p>
        

    <div className="main-footer">
    <div className="row">
      {/* Column1 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>COMPANY</h4>
          <li className='fot'>About us</li>
          <li className='fot'>Team</li>
          <li className='fot'>Careers</li>
          <li className='fot'>Blog</li>
        </ul>
      </div>
      {/* Column2 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>CONTACT</h4>
          <li className='fot'>Help and Support</li>
          <li className='fot'>Partner with us</li>
          <li className='fot'>Ride with us </li>
        </ul>
      </div>
      {/* Column3 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>LEGAL</h4>
          <li className='fot'>Terms & Conditions</li>
          <li className='fot'>Privacy Policy</li>
          <li className='fot'>Cookie Policy</li>
          <li className='fot'>Security</li>
          <li className='fot'>Sitemap</li>
        </ul>
      </div>
      <div className="col">
        <ul className="list-unstyled">
          <h4>SOCIAL LINKS </h4>
          <li className='fot1'><SocialIcon  url="https://twitter.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://instagram.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://linkedin.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://facebook.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://youtube.com/jaketrent"/></li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row_sm">
      <p className="col-sm">
      By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © LET'S Foody™ Ltd. All rights reserved.
      </p>
    </div>
</div>
  
      </footer>
      </div>
    </div>
   
  );
}

export default Home;