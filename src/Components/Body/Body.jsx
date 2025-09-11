import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Body.css'
import Review from '../Reviews/Review'
import Form from '../Form/Form'
import LatestUpdates from '../Sections/Updates';
import latestUpdatesData from '../Data/latestUpdatesData';
import Sections from '../Sections/Packages';
import nationalPackages from '../Data/nationalPackages';
import internationlPackages from '../Data/internationlPackages';


const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  let duration = 1400;

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}+</span>;
};




function Body() {
  return (
    <>
      <Navbar />

      <div className="flex justify-between items-center flex-col w-full h-screen">
        <div className='flex items-center flex-col justify-center h-full w-full image'>
          <div className='text-center'>
            <h3 className='heading3' id='heading3'>Unlock new journey with</h3>
            <h1 className='heading1' id='heading1'>Mittal's Travellers</h1>
            <h2 className='heading2' id='heading2'>Experience Travel, Redifined</h2>
          </div>
          <a href='#' className='flex items-center justify-center btn' role='button' id='browse-btn'>
            <span className='heading3' title='Browse Now'>
              Browse Now
            </span>
            <img src="Upward Arrow.svg" alt="" />
          </a>
        </div>
        <div aria-label='Company Statics' className='flex items-center justify-around flex-col w-full p-4 md:flex-row gap-3 shadow'>
          <div className='flex w-full justify-around'>
            <div className='text-center w-[50%]'>
              <h2 className='heading2'>
                <Counter end={20} />
              </h2>
              <h4 className='heading4'>
                Countries
              </h4>
            </div>
            <div className='text-center w-[50%]'>
              <h2 className='heading2'>
                <Counter end={25} />
              </h2>
              <h4 className='heading4'>
                States
              </h4>
            </div>
          </div>
          <div className='flex w-full justify-around'>
            <div className='text-center w-[50%]'>
              <h2 className='heading2'>
                <Counter end={100} />
              </h2>
              <h4 className='heading4'>
                Branches
              </h4>
            </div>
            <div className='text-center w-[50%]'>
              <h2 className='heading2'>
                <Counter end={10000} />
              </h2>
              <h4 className='heading4'>
                Customers
              </h4>
            </div>
          </div>
        </div>
      </div>

      <LatestUpdates id={'latest-updates'} title={'Latest Updates'} sectionId={'updates'} data={latestUpdatesData} />
      <Sections id={'international-packages'} title={'International Packages'} sectionId={'international'} data={internationlPackages} />
      <Sections id={'natioanl-packgaes'} title={"National Packages"} sectionId={'national'} data={nationalPackages} />
      
      <Review />
      <Form />
      <Footer />
    </>
  )
}

export default Body




