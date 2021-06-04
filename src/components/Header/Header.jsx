import c from './Header.module.css';

const Header = () => {
  return (
    <header className={c.header}>
      <img
        className={c.image}
        src="https://api.freelogodesign.org/files/23bfe68f1fd34f8cb61c1be389f9a975/thumb/logo_200x200.png?v=0"
      />
    </header>
  );
};

export default Header;
