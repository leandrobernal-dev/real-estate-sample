import heroImage from "../assets/images/image 1.jpg";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-text-container">
          <div className="hero-text">
            <h1>Looking to buy or sell your property?</h1>
            <h2>You've come to the right place.</h2>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="hero" />
      </div>
    </section>
  );
}
