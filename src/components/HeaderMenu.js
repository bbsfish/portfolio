'use client';

import { useEffect, useState, useRef } from 'react';
import styles from '@/styles/headerMenu.module.scss';

export default function HeaderMenu() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // スクロールに応じてヘッダー隠す／出す
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // メニュー外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // クリーンアップ
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      className={`${styles.header} ${hidden ? styles.hidden : styles.visible}`}
      ref={menuRef}
    >
      <div className={styles.menuWrapper}>
        <div className={styles.menuRow}>
          <div className={styles.logo}>ポートフォリオ</div>
          <div className={styles.burger} onClick={toggleMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            <ul className={styles.navList}>
            <li><a href="#skill">スキル</a></li>
            <li><a href="#devs">作ったもの</a></li>
          <li><a href="#weblink">ウェブリンク</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
