export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h1 className="section-title">
          Do you have questions? <br />
          Contact us.
        </h1>

        <div className="contact-content-container">
          <span>
            <img src={require("../assets/images/image 15.jpg")} />
          </span>
          <span className="contact-info">
            <p>Phone</p>
            <p>(123) 456-7890</p>

            <br />
            <br />
            <p>Email</p>
            <p>hello@reallygreatsite.com</p>
            <br />
            <br />
            <p>Social</p>
            <div className="social-links">
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </span>

          <span></span>
        </div>
      </div>
    </section>
  );
}
