// Core
import Image from 'next/image';

// Assets
import image1 from '@/ui/assets/images/main/works/1.jpg';
import image2 from '@/ui/assets/images/main/works/2.jpg';
import image3 from '@/ui/assets/images/main/works/3.jpg';
import image4 from '@/ui/assets/images/main/works/4.jpg';
import image5 from '@/ui/assets/images/main/works/5.jpg';
import image6 from '@/ui/assets/images/main/works/6.jpg';

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

const Gallery = (): React.ReactNode => {
  return (
    <ul className={styles.list}>
      {works.map((work) => (
        <li key={work.id} className={styles['list-item']}>
          <Image src={work.image} alt="Мои работы" fill className={styles.image} placeholder="blur" />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
