import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { images } from "../../constants";

const Chef = () => {
  const chefs = [
    {
      title: "Walter White",
      desc: "Master Chef",
      image: images.chef1,
    },
    {
      title: "Sarah Johnson",
      desc: "Patissiere",
      image: images.chef2,
    },
    {
      title: "William Anderson",
      desc: "Cook",
      image: images.chef3,
    },
  ];
  return (
    <section id="chefs" className="chefs">
      <div className="container">
        <div className="section-title">
          <h2>
            Our Proffesional <span>Chefs</span>
          </h2>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>

        <div className="row">
          {chefs.map((chef, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="member">
                <div className="pic">
                  <img src={chef.image} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>{chef.title}</h4>
                  <span>{chef.desc}</span>
                  <div className="social">
                    <a href="">
                      <i>
                        <FaFacebook />
                      </i>
                    </a>
                    <a href="">
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                    <a href="">
                      <i>
                        <FaLinkedin />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chef;
