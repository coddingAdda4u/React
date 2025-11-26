import { Link, NavLink } from 'react-router-dom';
import { Button } from '..';
import { navLink } from '../../../constants'
import { useSelector } from 'react-redux';

function Header() {

  const authStatus = useSelector((state) => state.auth.status);

  return (
    <header className='w-full h-15 py-4 sticky top-0'>
      <nav className='flex justify-between items-center h-full w-full'>
        <Link
          to={'/'}
          className="text-2xl"
        >
          Logo
        </Link>
        <ul className='flex gap-3 items-center'>
          {
            navLink.map(({ name, url }) => (
              <li key={name}>
                <NavLink to={url} className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold text-[15px] tracking-wide underline underline-offset-2' : 'text-grey-900 text-[15px] tracking-wide'
                }>
                  {name.toUpperCase()}
                </NavLink>
              </li>
            ))
          }
        </ul>
        {
          !authStatus ?
            <Link
              to={'/login'}
              className='bg-black text-white hover:bg-zinc-800 py-2 text-lg px-6 rounded-xl'>
              LOGIN
            </Link>
            :
            <Link
              to={'/login'}
              className='bg-black text-white hover:bg-zinc-800 py-2 text-lg px-6 rounded-xl'>
              LOGOUT
            </Link>
        }
      </nav>
    </header>
  );
}

export default Header;
