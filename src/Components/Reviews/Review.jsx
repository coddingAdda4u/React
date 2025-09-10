import reviewsData from "./reviews"

const Review = () => {
  return (
    <section className='h-full w-full bg-[#FFFFFF] py-4' aria-labelledby='customer-reviews'>
      <div className='h-full w-full'>
        <h2 id='customer-reviews' className="heading2 m-4 md:m-9">
          Customer Reviews
        </h2>

        <div className="h-72 w-full flex justify-around items-center gap-4 px-4 md:px-9 overflow-x-auto overflow-y-visible reviews-container">
          {
            reviewsData.map(review => {
              return (
                <ReviewsCards key={review.id} name={review.name} profile={review.profile} date={review.date} rating={review.rating} review={review.review_message} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Review


function ReviewsCards({ name, profile, date, rating, review }) {
  return (
    <div className='h-60 min-w-74 p-4 bg-[#F2F6F3] rounded-xl transition hover:scale-[1.04] hover:shadow-xl cursor-grab reviews-cards'
      tabIndex={0}
    >
      <div className="flex justify-start items-center h-auto w-full">
        <img src={profile} alt="Profile imag" className="rounded-full mr-1.5 h-10 w-10" />
        <div>
          <h3 className="heading3 -mb-1">
            {name}
          </h3>
          <p style={{
            fontSize: '.8rem',
          }}>
            {date}
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center h-auto w-full">
        <CalculateRatings rating={rating} />
      </div>
      <div className='py-3'>
        <p style={{
          fontSize: '.9rem'
        }}>
          {review}
        </p>
      </div>
    </div>
  )
}

function CalculateRatings({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        key={i}
        src='Star.png'
        alt={i < rating ? "Filled star" : "Empty star"}
        style={{ width: "20px", height: "20px", opacity: i < rating ? 1 : 0.3 }}
      />
    );
  }
  return <span className='flex gap-1'>{stars}</span>;
}