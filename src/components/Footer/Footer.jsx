import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGooglePlusCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Genesis</h3>
        <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p>
        <div className="social-links">
          <a href="">
            <i>
              <AiFillFacebook />
            </i>
          </a>
          <a href="">
            <i>
              <AiFillInstagram />
            </i>
          </a>
          <a href="">
            <i>
              <AiFillGooglePlusCircle />
            </i>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Genesis</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://github.com/leviterante">Levi Terante</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
