import './Footer.css'

function topFunction() {
  document.body.scroll({
    top: 0,
    behavior: 'smooth'
  })
  document.documentElement.scroll({
    top: 0,
    behavior: 'smooth'
  });
}



const Footer = () => {

  return (
    <footer className='w-full h-auto footer'>
      <button
        className='h-[70px] w-full cursor-pointer flex items-center justify-center'
        title='Back to Top'
        onClick={topFunction}
      >
        Back to Top
        <img src="Up.png" alt="" />
      </button>
      <div className='h-auto w-full flex justify-between flex-col md:flex-row'>
        <div className='h-full w-full md:w-[40%] desc'>
          <img src="Logo.svg" alt="" className="logo" title='Logo' />
          <div style={{ marginTop: '1rem', marginBottom: '3rem' }}>
            <h4 className='flex items-center w-full' style={{ fontSize: '.8rem', margin: '10px', letterSpacing: '.5px' }}>
              <img src="Phone.png" style={{ height: '1.3rem' }} />
              <span><strong>Contact : </strong></span>
              &nbsp;9856894512
            </h4>
            <h4 className='flex items-center w-full' style={{ fontSize: '.8rem', margin: '10px', letterSpacing: '.5px' }}>
              <img src="Email.png" style={{ height: '1.3rem' }} />
              <span><strong>Email : </strong></span>
              &nbsp;<a href="mailto:mittaltravellers34@gmail.com">mittaltravellers34@gmail.com</a>
            </h4>
            <h4 className='flex items-start w-full' style={{ fontSize: '.8rem', margin: '10px', letterSpacing: '.5px' }}>
              <img src="Address.png" style={{ height: '1.3rem' }} />
              <span><strong>Address : </strong></span>
              &nbsp;
              <address>
                Deenbandhu Chotooram Marg,  Pocket 7, <br /> Sector 6D
                Rohini, New Delhi, Delhi, 110085,<br /> New Delhi
              </address>
            </h4>
          </div>
          <div className='w-full text-center md:text-left'>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'Potta One' }}>Follow Us</h2>
            <div className="flex gap-4 w-full justify-center md:justify-start">
              <a href="#" title='Facebook'>
                <img src="Facebook.svg" alt="" className='h-[2rem] md:h-[3rem]' />
              </a>
              <a href="#" title='Instagram'>
                <img src="Instagram.svg" alt="" className='h-[2rem] md:h-[3rem]' />
              </a>
              <a href="#" title='X'>
                <img src="X.svg" alt="" className='h-[2rem] md:h-[3rem]' />
              </a>
              <a href="#" title='You Tube'>
                <img src="YouTube.svg" alt="" className='h-[2rem] md:h-[3rem]' />
              </a>
            </div>
          </div>
        </div>
        <img src="Image.svg" className='w-[100%] md:w-[50%]' alt="" />
      </div>
      <h6>&copy; All copyrights reserved for Mittal's Travellers. 2019-25</h6>
    </footer >
  )
}

export default Footer
