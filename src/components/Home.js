import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/Home.css";

export default function Home() {
  console.log('home render')
  return (
    <div className="home-container">
      <div className="home-main">
        <ImageSlider slides={SliderData} />
        <div className='home-texts'>
        <p className="p-text">
          Star Wars, space opera film series (created by George Lucas) that
          became one of the most successful and influential franchises in motion
          picture history. Begun in the 1970s and ’80s and resuscitated at the
          turn of the 21st century, the Star Wars films continually advanced the
          field of motion picture special effects and developed into an
          enormously lucrative merchandising industry.
        </p>
        </div>
      </div>
      <footer>
        <div className="footer-links">
          <a href="http://facebook.com">
            <FaFacebook className="link" />
          </a>
          <> </>
          <a href="http://twitter.com">
            <FaTwitter className="link" />
          </a>
          <> </>
          <a href="http://instagram.com">
            <FaInstagram className="link" />
          </a>
          <> </>
          <a href="http://youtube.com">
            <FaYoutube className="link" />
          </a>
        </div>
        <p className="footer-text">
          TM & © Lucasfilm Ltd. All Rights Reserved{" "}
        </p>
      </footer>
    </div>
  );
}
