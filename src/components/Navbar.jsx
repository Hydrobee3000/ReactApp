import c from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={c.menu}>
      <ul className={c.menu__list}>
        <li className={c.item}>
          <a className={c.item__link} href="#">
            Profile
          </a>
        </li>
        <li className={c.item}>
          <a className={c.item__link} href="#">
            Messages
          </a>
        </li>
        <li className={c.item}>
          <a className={c.item__link} href="#">
            News
          </a>
        </li>
        <li className={c.item}>
          <a className={c.item__link} href="#">
            Music
          </a>
        </li>
        <li className={c.item}>
          <a className={c.item__link} href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
