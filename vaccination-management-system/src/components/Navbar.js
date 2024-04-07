import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        {/* <a href="#">Logo</a> */}
        <a href="#">HOME</a>
        <a href="#">VACCINES</a>
        <a href="#">CENTERS</a>
       
      </nav>
    </div>
  );
}

export default Navbar;
