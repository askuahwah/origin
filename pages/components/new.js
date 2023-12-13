import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Menu from "./svg/menu_icon.svg";
import styles from '../../styles/mobileNav.module.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.menuButton} onClick={toggleSidebar}>
        <Menu/>
      </div>
      <div ref={sidebarRef} className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <ul>
          <li><Link href="/" onClick={closeSidebar}>Dashboard</Link></li>
          <li><Link href="/favorites" onClick={closeSidebar}>Favorites</Link></li>
          <li><Link href="/posts" onClick={closeSidebar}>Posts</Link></li>
          <li><Link href="/analytics" onClick={closeSidebar}>Analytics</Link></li>
          <li><Link href="/lineup" onClick={closeSidebar}>Line-up Makers</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
