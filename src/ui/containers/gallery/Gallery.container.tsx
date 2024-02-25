// Components
import Gallery from '@/ui/components/gallery/Gallery';
import Typography from '@/ui/components/typography/Typography';

// Styles
import styles from './styles.module.css';

const GalleryContainer = (): React.ReactNode => {
  return (
    <main className={styles.main}>
      <Typography as="h1" variant="h2">
        Галерея
      </Typography>
      <Gallery />
    </main>
  );
};

export default GalleryContainer;
