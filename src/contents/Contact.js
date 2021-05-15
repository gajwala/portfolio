import "./Contact.css";
function Contact() {
  return (
    <>
      <section className="contact section active" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <p>balachandraiahgajwala@gmail.com</p>
            </div>

            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <p>Guntur, Andhrapradesh</p>
            </div>
          </div>
          <div className="row padd-15">
            <div className="contact-text">Let's get in touch</div>
          </div>
          <div className="row padd-15">
            <div className="buttons">
              <a
                href="mailto:balachandraiahgajwala@gmail.com"
                className="btn contact-btn"
              >
                Mail Me !!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
