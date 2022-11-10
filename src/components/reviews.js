export default function Reviews() {
  const reviews = [
    {
      review:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",

      name: "Jean and Julian Marsh",
    },
    {
      review:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable. ",
      review2:
        "Boost your product and service's credibility by adding testimonials from your clients. ",
      name: "Helene Paquet",
    },
    {
      review:
        "Boost your product and service's credibility by adding testimonials from your clients.",
      name: "Chad Gibbons",
    },
  ];

  const reviewElements = reviews.map((review) => {
    return (
      <div>
        <p>{review.review}</p>
        {review.review2 ? (
          <p>
            <br />
            {review.review2}
          </p>
        ) : (
          ""
        )}
        <br />
        <p>- {review.name}</p>
      </div>
    );
  });
  return (
    <section id="reviews">
      <div className="reviews-container">
        <h1 className="section-title">Client Reviews</h1>

        <div className="reviews-content">
          <div className="reviews-content-grid">{reviewElements}</div>
        </div>
      </div>
    </section>
  );
}
