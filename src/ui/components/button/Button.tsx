// Core
import Link from 'next/link';

// Styles
import styles from './styles.module.css';

interface Common {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

type Button = Common & {
  as: 'button';
  onClick: () => void;
};

type InternalLink = Common & {
  as: 'internalLink';
  to: string;
};

type ExternalLink = Common & {
  as: 'externalLink';
  href: string;
  title: string;
};

type PropsType = Button | InternalLink | ExternalLink;

const Button = (props: PropsType): React.ReactNode => {
  switch (props.as) {
    case 'button':
      return (
        <button className={`${styles.button} ${props.className}`} onClick={props.onClick} disabled={props.disabled}>
          {props.children}
        </button>
      );
    case 'internalLink':
      return (
        <Link href={props.to} className={`${styles.button} ${props.className}`} scroll={false}>
          {props.children}
        </Link>
      );
    case 'externalLink':
      return (
        <a href={props.href} title={props.title} target="_blank" rel="noreferrer">
          {props.children}
        </a>
      );
    default:
      return null;
  }
};

export default Button;
