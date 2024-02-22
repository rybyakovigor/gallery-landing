// Styles
import styles from './styles.module.css';

interface PropsType {
  className?: string;
  type: 'text' | 'tel' | 'email';
  value: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ className, type, value, placeholder, onChange }: PropsType): React.ReactNode => {
  return (
    <input
      className={`${styles.input} ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
