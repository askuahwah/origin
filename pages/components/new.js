import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Menu from "./svg/menu_icon.svg";
import styles from '../../styles/mobileNav.module.css';
import DashboardIcon from './svg/dashboard.svg';
import AnalyticsIcon from './svg/anaytics.svg';
import PostsIcon from './svg/dashboard.svg';
import FavoritesIcon from './svg/favorite_nav.svg';
import LineupIcon from './svg/lineup.svg';
import Profile from './svg/profile.svg';
import { stringifyError } from 'next/dist/shared/lib/utils';

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
      <div className={styles.profile}>
        <div><Profile/></div>
        <p>Origin</p>
      </div>
        <ul>
          <li><Link href="/" onClick={closeSidebar}><div className={styles.icon}><DashboardIcon/><p>Dashboard</p></div></Link></li>
          <li><Link href="/favorites" onClick={closeSidebar}><div className={styles.icon}><FavoritesIcon/><p>Favorites</p></div></Link></li>
          <li><Link href="/posts" onClick={closeSidebar}><div className={styles.icon}><PostsIcon/><p>Posts</p></div></Link></li>
          <li><Link href="/analytics" onClick={closeSidebar}><div className={styles.icon}><AnalyticsIcon/><p>Analytics</p></div></Link></li>
          <li><Link href="/lineup" onClick={closeSidebar}><div className={styles.icon}><LineupIcon/><p>Line-up Maker</p></div></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
