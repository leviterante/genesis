import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import { images } from "../../constants";

const Gallery = () => {
  const gallery = [
    {
      id: 1,
      image: images.gallery1,
    },
    {
      id: 2,
      image: images.gallery2,
    },
    {
      id: 3,
      image: images.gallery3,
    },
    {
      id: 4,
      image: images.gallery4,
    },
    {
      id: 5,
      image: images.gallery5,
    },
    {
      id: 6,
      image: images.gallery6,
    },
    {
      id: 7,
      image: images.gallery7,
    },
    {
      id: 8,
      image: images.gallery8,
    },
  ];

  const [toggler, setToggler] = useState(false);
  return (
    <section id="gallery" className="gallery">
      <div className="container-fluid">
        <div className="section-title">
          <h2>
            Some photos from <span>Our Restaurant</span>
          </h2>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>

        <div className="row g-0">
          {gallery.map((photo) => (
            <div className="col-lg-3 col-md-4" key={photo.id}>
              <div className="gallery-item">
                <img
                  onClick={() => setToggler(!toggler)}
                  src={photo.image}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
          <FsLightbox
            toggler={toggler}
            sources={[
              images.gallery1,
              images.gallery2,
              images.gallery3,
              images.gallery4,
              images.gallery5,
              images.gallery6,
              images.gallery7,
              images.gallery8,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
