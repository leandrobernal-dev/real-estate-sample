export default function RecentListings() {
  const listings = [
    {
      img: require("../assets/images/image 13.jpg"),
      name: "Single Detached House",
      location: "123 Beldenwood Avenue",
      description: "4 Beds  |  3 Baths  |  2 Cars",
    },
    {
      img: require("../assets/images/image 12.jpg"),
      name: "Townhouse",
      location: "45 Whelstone Hill",
      description: "2 Beds | 2 Baths | 1 Car Wheelchair accessible property ",
    },
    {
      img: require("../assets/images/image 11.jpg"),
      name: "Single Detached House",
      location: "6 Roseltown Drive",
      description: "3 Beds | 3 Baths | 2 Cars",
    },
  ];

  const listingsElement = listings.map((listing) => {
    return (
      <span key={listing.img}>
        <img src={listing.img} />
        <h5>{listing.name}</h5>
        <h3>{listing.location}</h3>
        <h5>{listing.description}</h5>
      </span>
    );
  });
  return (
    <section id="recent-listings">
      <div className="recent-listings-container">
        <h1 className="section-title">Recent Listings</h1>
        <div className="listings-container">{listingsElement}</div>
      </div>
    </section>
  );
}
