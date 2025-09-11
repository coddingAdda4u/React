const Cards = ({ url, title, desc, price = null, oldPrice = null }) => {
  return (
    <article className='h-auto w-full min-w-90 max-w-96 hover:shadow-xl p-3 rounded-xl bg-white'
      title={title}
      aria-label={title}
    >
      <div className='mb-3 rounded-xl overflow-hidden'>
        <img src={url} alt={title} className='h-full w-full hover:scale-[1.1] transition-all' />
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <h3 className='heading3'>{title}</h3>
          <p className='heading4'>{desc}</p>
          {
            (price !== null) ? <p className='heading4'><strong>Rs. </strong> <strike>{oldPrice}</strike>&nbsp;{price} /-</p> : null
          }
        </div>
        <button href="#" className='bg-blue-200 hover:bg-blue-100 p-3 rounded-xl font-semibold'
          title={`Know more about ${title}`}
          aria-label={`Know more about ${title}`}
        >
          Know more
        </button>
      </div>
    </article>
  )
}

export default Cards
