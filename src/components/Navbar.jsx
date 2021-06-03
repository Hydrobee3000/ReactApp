const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a className="menu__list-link" href="#">
            Profile
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__list-link" href="#">
            Messages
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__list-link" href="#">
            News
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__list-link" href="#">
            Music
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__list-link" href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
