import "./styles.scss";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="navBrand">
          <img src={logoImg} alt="Logo do Space Flight News" />
          <span>Space Flight News</span>
        </a>

        <ul className="navList">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/">
            <li>Trending</li>
          </a>
          <a href="/">
            <li>Categories</li>
          </a>
          <a href="/">
            <li>About us</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
