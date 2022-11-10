import Hero from "./components/hero";
import Nav from "./components/nav";
import Team from "./components/team";
import RecentListings from "./components/recent-listings";
import Consultation from "./components/consultation";
import WorkWithUs from "./components/work-with-us";
import Reviews from "./components/reviews";
import Contact from "./components/contact";

import "./assets/css/nav.css";
import "./assets/css/hero.css";
import "./assets/css/team.css";
import "./assets/css/recent-listings.css";
import "./assets/css/consultation.css";
import "./assets/css/work-with-us.css";
import "./assets/css/reviews.css";
import "./assets/css/contact.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Team />
      <RecentListings />
      <Consultation />
      <WorkWithUs />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
