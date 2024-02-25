// Core
import Image from 'next/image';

// Routes
import { Routes } from '@/ui/types/routes';

// Components
import Button from '@/ui/components/button/Button';
import Typography from '@/ui/components/typography/Typography';
import Gallery from '@/ui/components/gallery/Gallery';

// Assets
import ArrowIcon from '@/ui/assets/icons/right-arrow.svg';

// Styles
import styles from './styles.module.css';

const WorksList = (): React.ReactNode => {
  return (
    <section className={styles.container}>
      <Typography as="h2" variant="h2" className={styles.title}>
        Мои работы
      </Typography>
      <Gallery />
      <Button as="internalLink" to={Routes.GALLERY} className={`${styles['gallery-link']} nav-animation`} scroll>
        <Typography className={styles['gallery-link-text']}>
          Все работы <Image src={ArrowIcon} alt="" width={20} height={17} />
        </Typography>
      </Button>
    </section>
  );
};

export default WorksList;
