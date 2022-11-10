export default function Consultation() {
  return (
    <section id="consultation">
      <div className="consultation-container">
        <h1 className="section-title">Book a consultation</h1>
        <div className="consultation-content-container">
          <img src={require("../assets/images/image 14.jpg")} />
          <span className="consultation-description">
            <h2>
              Highlight specific services or products here. It can be a property
              appraisal service, a consultation, or something uniquely yours.
              Give it room to shine here.
            </h2>
            <br />
            <br />
            <span>
              <a className="contact-link" href="#">
                Contact Us
              </a>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
