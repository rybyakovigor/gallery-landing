// Core
import Link from 'next/link';
import { useRouter } from 'next/router';

// Styles
import styles from './styles.module.css';

const links = [
  {
    name: 'Галерея',
    href: '/gallery',
  },
  {
    name: 'Обо мне',
    href: '/about',
  },
];

const Header = (): React.ReactNode => {
  const router = useRouter();

  const isActive = (pathname: string): boolean => router.pathname === pathname;

  return (
    <header className={`${styles.header} ${styles.padding}`}>
      <Link className={`${styles.logo} ${styles['link-color']}`} href="/">
        Юлия Рыбьякова Арт
      </Link>
      <nav>
        {/* TODO: Добавить анимацию для underline */}
        <ul className={styles['nav-list']}>
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link
                className={`${styles['list-item']} ${styles['link-color']} ${isActive(href) ? styles.active : ''}`}
                href={href}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
