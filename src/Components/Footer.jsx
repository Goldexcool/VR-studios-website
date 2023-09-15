import React from 'react';
import "../Styles/Footer.css"
import "/logo.svg"
import "/icon-facebook.svg"
import "/icon-twitter.svg"
import "/icon-pinterest.svg"
import "/icon-instagram.svg"


const footer = () => {
  return (
    <footer id='footer'>
      <div className='footer_wrapper'>
        <div className='logo_list'>
          <img src="/logo.svg" alt="" />
          <div className='footer_list'>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
              </ul>
            </div>
        </div>
        <div className='socials_copyright'>
        <div className='socials'>
          <img src="/icon-facebook.svg" alt="" />
          <img src="/icon-twitter.svg" alt="" />
          <img src="/icon-pinterest.svg" alt="" />
          <img src="/icon-instagram.svg" alt="" />
        </div>
        <h1>© 2021 Loopstudios. All rights reserved.</h1>
        </div>
      </div>
    </footer>
  );
}

export default footer;
