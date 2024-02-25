// Core
import { useRouter } from 'next/router';

// Components
import Button from '@/ui/components/button/Button';
import Typography from '@/ui/components/typography/Typography';

// Routes
import { Routes } from '@/ui/types/routes';

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

  const isActive = (pathname: string): boolean => router.pathname === pathname;

  return (
    <header className={`${styles.header} ${styles.padding}`}>
      <Button as="internalLink" className={`${styles.logo} ${styles['link-color']}`} to={Routes.HOME}>
        Юлия Рыбьякова Арт
      </Button>
      <nav>
        <ul className={styles['nav-list']}>
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
