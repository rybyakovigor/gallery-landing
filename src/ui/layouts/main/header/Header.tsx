// Core
import { useRouter } from 'next/router';
import { Spin as Hamburger } from 'hamburger-react';
import { useEffect, useRef, useState } from 'react';

// Components
import Button from '@/ui/components/button/Button';
import Typography from '@/ui/components/typography/Typography';

// Routes
import { Routes } from '@/ui/types/routes';

// Hooks
import useClickOutside from '@/ui/hooks/useClickOutside';

// Styles
import styles from './styles.module.css';

const links = [
  {
    name: 'Галерея',
    href: Routes.GALLERY,
  },
  {
    name: 'Обо мне',
    href: Routes.ABOUT,
  },
];

const Header = (): React.ReactNode => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const menu = useRef(null);
  const button = useRef(null);
  useClickOutside(menu, () => setOpen(false), button);

  const isActive = (pathname: string): boolean => router.pathname === pathname;

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header className={styles.header}>
      <Button as="internalLink" className={`${styles.logo} ${styles['link-color']}`} to={Routes.HOME}>
        Юлия Рыбьякова Арт
      </Button>
      <div ref={button} className={styles['nav-toggle']}>
        <Hamburger toggled={isOpen} toggle={setOpen} color="var(--black)" />
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles['nav-expanded'] : ''}`}>
        <ul ref={menu} className={styles['nav-list']}>
          {links.map(({ name, href }) => (
            <li key={name}>
              <Button
                as="internalLink"
                to={href}
                className={`${styles['list-item']} ${styles['link-color']} nav-animation ${isActive(href) ? 'active' : ''}`}
              >
                <Typography>{name}</Typography>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
