import React from "react";
import Logo from "../../public/assets/Logo (1).png";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav className={`navbar navbar-light ${styles.navbar}`}>
          <div className={`container ${styles.logoDiv}`}>
            <Image src={Logo} alt="Logo" />
          </div>
        </nav>

        <div className={`${styles.header} d-flex align-items-center`}>
          <h1 className={`${styles.heading} container`}>
            <span className={styles.heading1}> Watch</span>
            <span className={styles.heading2}>something </span>
            <span className={styles.heading3}>incredible. </span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
