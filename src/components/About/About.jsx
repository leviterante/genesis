import React from "react";
import { BiCheckDouble } from "react-icons/bi";

import { images } from "../../constants";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-5 align-items-stretch video-box"
            style={{ backgroundImage: `url(${images.about})` }}
          >
            <a
              href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              className="venobox play-btn mb-4"
              data-vbtype="video"
              data-autoplay="true"
              content={""}
            >
              ""
            </a>
          </div>
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
            <div className="content">
              <h3>
                Eum ipsam laborum deleniti{" "}
                <strong>velit pariatur architecto aut nihil</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i>{<BiCheckDouble />}</i> Ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </li>
                <li>
                  <i>{<BiCheckDouble />}</i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i>{<BiCheckDouble />}</i> Ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate trideta storacalaperda mastiro dolore eu fugiat
                  nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
