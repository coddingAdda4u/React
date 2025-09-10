import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import internationlPackages from '../Data/internationPackages'
import latestUpdatesData from '../Data/latestUpdatesData'
import nationalPackages from '../Data/nationalPackages'
import Review from '../Reviews/Review'
import Form from '../Form/Form'
import './Body.css'


function Cards({ url, title, desc, price = null, oldPrice = null }) {
  return (
    <article className='h-auto min-w-90 max-w-90 hover:shadow-xl p-3 rounded-xl bg-white'
      title={title}
      aria-label={title}
      tabIndex='0'
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

function Carousel({ target }) {

  const element = document.getElementById(target)

  const moveLeft = () => {
    element.scrollBy({
      left: -380,
      behavior: 'smooth'

    })
  }
  const moveRight = () => {
    element.scrollBy({
      left: 380,
      behavior: 'smooth'
    })
    console.log("dklsfshksl");
  }
  return (
    <>
      <button className="absolute h-8 w-8 rounded-full left-5 overflow-hidden cursor-pointer bg-[#2DBEE6] hover:bg-[#2599b9] z-50" onClick={moveLeft}>
        <img src="Left.svg" alt="Left" className='h-full w-full' />
      </button>
      <button className="absolute h-8 w-8 rounded-full right-5 overflow-hidden cursor-pointer bg-[#2DBEE6] hover:bg-[#2599b9] z-50" onClick={moveRight}>
        <img src="Right.svg" alt="Right" className='w-full h-full' />
      </button>
    </>
  )
}

const Body = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center flex-col w-full h-screen">
        <div className='flex items-center flex-col justify-center h-full w-full image'>
          <div className='text-center'>
            <h3 className='heading3'>Unlock new journey with</h3>
            <h1 className='heading1'>Mittal's Travellers</h1>
            <h2 className='heading2'>Experience Travel, Redifined</h2>
          </div>
          <a href='#' className='flex items-center justify-center btn' role='button'>
            <span className='heading3' title='Browse Now'>
              Browse Now
            </span>
            <img src="Upward Arrow.svg" alt="" />
          </a>
        </div>
        <div aria-label='Company Statics' className='flex items-center justify-around flex-col w-full p-4 md:flex-row gap-3 shadow'>
          <div className='flex w-full justify-around'>
            <div className='text-center w-[50%]'>
              <h2 className='heading2'>20+</h2>
              <h4 className='heading4'>Countries</h4>
            </div>
            <div className='text-center w-[50%]'>
              <h2 className='heading2'>25+</h2>
              <h4 className='heading4'>States</h4>
            </div>
          </div>
          <div className='flex w-full justify-around'>
            <div className='text-center w-[50%]'>
              <h2 className='heading2'>100+</h2>
              <h4 className='heading4'>Branches</h4>
            </div>
            <div className='text-center w-[50%]'>
              <h2 className='heading2'>10000+</h2>
              <h4 className='heading4'>Customers</h4>
            </div>
          </div>
        </div>
      </div>

      <section className='h-full w-full' aria-labelledby='latest-updates'>
        <div className='h-full w-full'>
          <h2 id='latest-updates' className="heading2 m-4 md:m-9">
            Latest Updates
          </h2>

          <div className="h-auto w-full flex flex-wrap justify-center items-center gap-4 px-4 md:px-9">
            {
              latestUpdatesData.map(card => {
                return <Cards key={card.title} url={card.url} title={card.title} desc={card.desc} price={card.price} oldPrice={card.oldPrice} />
              })}
          </div>
        </div>
      </section>

      <section className='h-auto w-full' aria-labelledby='international-packages'>
        <div className='h-full w-full'>
          <h2 id="international-packages" className="heading2 m-4 md:m-9">
            Internationl Packages
          </h2>

          <div className="relative flex justify-start items-center">
            <Carousel target={'international'} />
            <div className="h-auto w-full flex justify-between items-center gap-4 px-4 mb-4 md:mb-9 md:px-9 overflow-hidden cards-container" id='international'>
              {
                internationlPackages.map(card => {
                  return <Cards key={card.title} url={card.url} title={card.title} desc={card.desc} price={card.price} />
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section className='h-full w-full' aria-labelledby='national-packages'>
        <div className='h-full w-full'>
          <h2 id='national-packages' className="heading2  m-4 md:m-9">
            National Packages
          </h2>

          <div className="relative flex justify-start items-center">
            <Carousel target={'national'} />
            <div className="h-auto w-full flex justify-between items-center gap-4 px-4  mb-4 md:mb-9 md:px-9 overflow-hidden cards-container" id='national'>
              {
                nationalPackages.map(card => {
                  return <Cards key={card.title} url={card.url} title={card.title} desc={card.desc} price={card.price} />
                })
              }
            </div>
          </div>
        </div>
      </section>
      <Review />
      <Form />
      <Footer />
    </>
  )
}

export default Body
