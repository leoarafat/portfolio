import React, { useRef } from "react";
import contact1 from "./contact1.png";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log(e, "click");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_omilxah",
        "template_kcbewrk",
        form.current,
        "u9EhZl7NDe9ND_R7o"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Send Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Yeasin Arafat</h1>
                  <p>Junior Frontend Developer</p>
                  <p>
                    I am available for Junior frontend developer role. Connect
                    with me via and call in to my account.
                  </p>{" "}
                  <br />
                  <p>Phone: +8801303896556</p>
                  <p>Email: yeasinarafat1734.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <a href="https://www.facebook.com/profile.php?id=100065181076417">
                      {" "}
                      <button className="btn_shadow">Facebook</button>
                    </a>
                    <a href="">
                      {" "}
                      <button className="btn_shadow">Twitter</button>
                    </a>
                    <a href="">
                      {" "}
                      <button className="btn_shadow">Instagram</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form ref={form} method="post" onSubmit={sendEmail}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input type="text" name="name" />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input type="number" name="phone" />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input type="email" name="email" />
                </div>

                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea cols="30" rows="10" name="message"></textarea>
                </div>
                <button className="btn_shadow">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
