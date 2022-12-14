import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const Card = ({ value }) => {
  const {
    title,
    short,
    one,
    two,
    there,
    four,
    five,
    dp,
    tech,
    live,
    client,
    server,
    img1,
    img2,
    img3,
  } = value;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="box btn_shadow ">
        <div className="img">
          <img src={dp} alt="" onClick={toggleModal} />
        </div>

        <div className="title">
          <h2 onClick={toggleModal}>{title}</h2>
          <p>{short}</p>
          <a
            href="#popup"

            onClick={toggleModal}
          >
           Click to See Details..
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              {/* <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" /> */}
              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />
        </SwiperSlide>
       
      </Swiper>
            </div>
            <div className="modal-text right">
              <span>PROJECT - NAME</span>
              <h1>{title}</h1>
              <div>
                <ul>
                  <li>#{one}</li>
                  <li>#{two}</li>
                  <li>#{there}</li>
                  <li>#{four}</li>
                  <li>#{five}</li>
                </ul>
              </div>
              <p>
                <span>{tech}</span>
              </p>
              <div className="button f_flex mtop">
                <a href={client}>
                  {" "}
                  <button className="btn_shadow">Client</button>
                </a>
                <a href={server}>
                  {" "}
                  <button className="btn_shadow">Server</button>
                </a>
                <a href={live}>
                  <button className="btn_shadow">VIEW PROJECT</button>
                </a>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
