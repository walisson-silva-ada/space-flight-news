import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.navBrand}>
          <img src={logoImg} alt="Logo do Space Flight News" />
          <span>Space Flight News</span>
        </a>

        <ul className={styles.navList}>
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
