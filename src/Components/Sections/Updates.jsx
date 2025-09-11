import Cards from './Cards'

const LatestUpdates = ({ id, title, sectionId, data }) => {

  console.log(Cards);

  return (
    <section className='h-full w-full' aria-labelledby={sectionId}>
      <div className='h-full w-full'>
        <h2 id={sectionId} className="heading2  m-4 md:m-9">
          {title}
        </h2>

        <div className="relative flex justify-start items-center overflow-hidden">
          <div className="h-auto w-full flex flex-col justify-center items-center flex-wrap md:flex-row gap-4 px-4  mb-4 md:mb-9 md:px-9 cards-container" id={id}>
            {
              data.map(card => {
                return <Cards key={card.title} url={card.url} title={card.title} desc={card.desc} price={card.price} />
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestUpdates