export default function Team() {
  return (
    <section id="team">
      <div className="team-container">
        <h1 className="section-title">Meet our team</h1>
        <div className="team-content-container">
          <div className="team-details">
            <span>
              <h3>Shawn Garcia</h3>
              <h5>President / Broker</h5>
            </span>
            <span>
              <h3>Neil Tran</h3>
              <h5>Real Estate Agent</h5>
            </span>
            <span>
              <h3>Estelle Darcy</h3>
              <h5>Real Estate Agent</h5>
            </span>
            <span>
              <h3>Olivia Wilson</h3>
              <h5>Real Estate Agent</h5>
            </span>
          </div>
          <div className="team-profiles">
            <span>
              <img src={require("../assets/images/image 2.jpg")} />
            </span>
            <span>
              <img src={require("../assets/images/image 5.jpg")} />
            </span>
            <span>
              <img src={require("../assets/images/image 4.jpg")} />
            </span>
            <span>
              <img src={require("../assets/images/image 3.jpg")} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
