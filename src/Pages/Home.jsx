import "../Styles/Home.css";
import hero from "/desktop/image-hero.jpg";
import React, { useState } from "react";
import "/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "/desktop/image-interactive.jpg";
import "/desktop/image-deep-earth.jpg";
import "/desktop/image-night-arcade.jpg";
import "/desktop/image-soccer-team.jpg";
import "/desktop/image-grid.jpg";
import "/desktop/image-from-above.jpg";
import "/desktop/image-pocket-borealis.jpg";
import "/desktop/image-curiosity.jpg";
import "/desktop/image-fisheye.jpg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="image">
        <header id="header">
          <nav id="navbar">
            <div className="image_logo">
              <img src="/logo.svg" alt="" />
            </div>
            <div className="header_list">
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
              </ul>
            </div>

            <div className="menu">
              <FontAwesomeIcon
                icon={isOpen ? faXmark : faBars}
                onClick={toogleMenu}
                className="icon"
              />
            </div>
          </nav>
        </header>

        {isOpen && (
          <div className="dropwrapper">
            <div className="dropmenu">
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        )}

        <section id="firstsection">
          <div className="section_wrapper">
            <div className="fs_content">
              <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>
          </div>
        </section>
      </div>

      <section id="second_section">
        <div className="sectiontwo_wrapper">
          <div className="image_bg"></div>
          <div className="section_two_content">
            <h1>THE LEADER IN INTERACTIVE VR</h1>
            <h2>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creation have transformed businesses
              through digital experiences that bind to their brand.
            </h2>
          </div>
        </div>
      </section>

      <section id="creation_section">
        <div className="cont_sect_wrapper">
          <div className="cs_header_content">
            <h1>OUR CREATIONS</h1>
            <h2>SEE ALL</h2>
          </div>
          <div className="cs_images">
            <div className="image1">
              <h1 className="image_cont">DEEP EARTH</h1>
            </div>
            <div className="image2">
              <h1 className="image_cont">NIGHT ARCADE</h1>
            </div>
            <div className="image3">
              <h1 className="image_cont">SOCCER TEAM VR</h1>
            </div>
            <div className="image4">
              <h1 className="image_cont">THE GRID</h1>
            </div>
          </div>
          <div className="row2">
            <div className="image5">
            <h1 className="image_cont1">FROM UP ABOVE VR</h1>
            </div>
            <div className="image6">
            <h1 className="image_cont">POCKET BOREALIS</h1>
            </div>
            <div className="image7">
            <h1 className="image_cont">THE CURIOSITY</h1>
            </div>
            <div className="image8">
            <h1 className="image_cont">MAKE IT FISHEYE</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
