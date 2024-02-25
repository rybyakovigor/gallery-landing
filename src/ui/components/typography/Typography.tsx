// Styles
import styles from './styles.module.css';

interface PropsType {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  variant?: 'regular' | 'h2' | 'h1';
  children: React.ReactNode;
  className?: string;
}
const Typography = ({ as = 'span', variant = 'regular', children, className }: PropsType): React.ReactNode => {
  const Component = as;
  return <Component className={`${styles[variant]} ${className}`}>{children}</Component>;
};

export default Typography;
