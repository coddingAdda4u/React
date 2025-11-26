import { NavLink, Link } from 'react-router-dom';
import { navLinks } from '../../Constants';

function Header() {
  return (
    <header className="w-full px-global py-3 sticky top-0">
      <nav className="flex items-center justify-between w-full h-full">
        <div>
          <Link to="/" className='text-3xl font-bold tracking-wider'>
            Logo
          </Link>
        </div>
        <div className='flex gap-3'>
          {
            navLinks.map(({ path, link }) =>
              <NavLink
                to={path}
                key={link}
                className={
                  ({ isActive }) => `text-[17px] font-semibold tracking-wider ${isActive ? "text-red-500" : "text-zinc-800"}`
                }
              >
                {link.toUpperCase()}
              </NavLink>
            )
          }
        </div>
        <div>
          <button role='link' className='py-2 px-5 bg-red-500 rounded-xl text-xl text-white cursor-pointer'>
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
