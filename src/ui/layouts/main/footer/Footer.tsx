// Core
import Image from 'next/image';

// Components
import Button from '@/ui/components/button/Button';
import Input from '@/ui/components/input/Input';

// Assets
import youtubeIcon from '@/ui/assets/icons/youtube.svg';
import telegramIcon from '@/ui/assets/icons/telegram.svg';

// Styles
import styles from './styles.module.css';

const socialMediaLinks = [
  {
    title: 'Группа в telegram',
    href: 'https://t.me/yuliya_rybyak_art',
    icon: telegramIcon,
  },
  {
    title: 'Канал в youtube',
    href: 'https://youtube.com/@yuliya_rybyak_art',
    icon: youtubeIcon,
  },
];

const Footer = (): React.ReactNode => {
  return (
    <footer className={`${styles.footer}`} id="footer">
      <div className={styles['left-side']}>
        <span className="regular-text">
          Если вас очаровали уникальные полотна, в которых каждый штрих соединяет природу и искусство, не упустите шанс
          стать обладателем эксклюзивной работы. Заполните форму ниже или позвоните, чтобы обсудить желаемый проект или
          приобрести уже готовую картину, добавив в свой интерьер кусочек природной гармонии.
        </span>
        <ul className={styles['social-list']}>
          {socialMediaLinks.map(({ title, href, icon }) => (
            <li key={title}>
              <Button as="externalLink" href={href} title={title}>
                <Image src={icon} alt="" width={30} height={30} />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['right-side']}>
        <Input placeholder="Ваше имя" type="text" value="" onChange={() => {}} />
        <Input placeholder="Ваша почта" type="email" value="" onChange={() => {}} />
        <Input placeholder="Ваш телефон" type="tel" value="" onChange={() => {}} />
        <Button as="button" onClick={() => {}} className={styles['submit-button']}>
          Отправить
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
