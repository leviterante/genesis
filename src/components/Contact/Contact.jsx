import React from "react";
import { BsGeoAlt, BsHourglass, BsEnvelope, BsPhone } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>
            Contact <span>Us</span>
          </h2>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>
      </div>

      <div className="map">
        <iframe
          title="Map"
          style={{ border: "0", width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
          frameborder="0"
          allowfullscreen
        />
      </div>

      <div className="container mt-5">
        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i>
                <BsGeoAlt />
              </i>
              <h4>Location:</h4>
              <p>
                A108 Adam Street
                <br />
                New York, NY 535022
              </p>
            </div>
            <div className="col-lg-3 col-md-6 info">
              <i>
                <BsHourglass />
              </i>
              <h4>Open Hours:</h4>
              <p>
                Monday-Saturday:
                <br />
                11:00 AM - 2300 PM
              </p>
            </div>
            <div className="col-lg-3 col-md-6 info">
              <i>
                <BsEnvelope />
              </i>
              <h4>Email:</h4>
              <p>
                info@example.com
                <br />
                contact@example.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6 info">
              <i>
                <BsPhone />
              </i>
              <h4>Call:</h4>
              <p>
                +1 5589 55488 51
                <br />
                +1 5589 22475 14
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
