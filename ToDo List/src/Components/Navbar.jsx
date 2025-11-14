import { useState } from "react";

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('home')
  const links = ['home', 'todo', 'challenges']

  return (
    <header>
      <nav>
        <div className="logo">
          Tod's
        </div>
        <div className="navbar-links">
          {
            links.map(link => (
              <div
                className={`links ${activeLink === link ? 'active' : ''}`}
                key={link}
                onClick={() => setActiveLink(link)}
              >
                {link.toUpperCase()}
              </div>
            ))
          }
        </div>
        <div>
          {/* <div className="toggle-btn">
            <button>

            </button>
          </div> */}
          <div className="profile-image">
            <img src="user.jpg" alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;