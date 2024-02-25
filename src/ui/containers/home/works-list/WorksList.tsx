// Core
import Image from 'next/image';

// Routes
import { Routes } from '@/ui/types/routes';

// Components
import Button from '@/ui/components/button/Button';
import Typography from '@/ui/components/typography/Typography';

// Assets
import image1 from '@/ui/assets/images/main/works/1.jpg';
import image2 from '@/ui/assets/images/main/works/2.jpg';
import image3 from '@/ui/assets/images/main/works/3.jpg';
import image4 from '@/ui/assets/images/main/works/4.jpg';
import image5 from '@/ui/assets/images/main/works/5.jpg';
import image6 from '@/ui/assets/images/main/works/6.jpg';
import ArrowIcon from '@/ui/assets/icons/right-arrow.svg';

// Styles
import styles from './styles.module.css';

const works = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
];
const WorksList = (): React.ReactNode => {
  return (
    <section className={styles.container}>
      <Typography as="h2" variant="h2" className={styles.title}>
        Мои работы
      </Typography>
      <ul className={styles.list}>
        {works.map((work) => (
          <li key={work.id} className={styles['list-item']}>
            <Image src={work.image} alt="Мои работы" fill className={styles.image} placeholder="blur" />
          </li>
        ))}
      </ul>
      <Button as="internalLink" to={Routes.GALLERY} className={`${styles['gallery-link']} nav-animation`}>
        <Typography className={styles['gallery-link-text']}>
          Все работы <Image src={ArrowIcon} alt="" width={20} height={17} />
        </Typography>
      </Button>
    </section>
  );
};

export default WorksList;
