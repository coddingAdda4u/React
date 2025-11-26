import { Link } from 'react-router-dom';
import { navLink } from '../../../constants';

function Footer() {
  return (
    <footer className="text-gray-600 mt-10">
      <div className='flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-6 py-6'>
        <Link className='text-2xl text-black'>
          Logo
        </Link>
        <ul className="flex gap-3 max-md:flex-col max-md:justify-center">
          {
            navLink.map(({ name, url }) => (
              <li key={name}>
                <Link to={url} className='text-zinc-800'>
                  {name.toUpperCase()}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <p className='text-center'>
          &copy; Copyright reserves
        </p>
      </div>
    </footer>
  );
}

export default Footer;