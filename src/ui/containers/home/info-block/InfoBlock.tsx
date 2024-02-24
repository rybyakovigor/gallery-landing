// Core
import Image from 'next/image';

// Components
import Button from '@/ui/components/button/Button';

// Assets
import headerPicture from '@/ui/assets/images/main/1.jpg';

// Styles
import styles from './styles.module.css';

const InfoBlock = (): React.ReactNode => {
  return (
    <section className={styles.container}>
      <div className={styles['text-wrapper']}>
        <span className={styles.title}>Художественная живопись</span>
        <span className="text">
          Создаю уникальные картины, сочетая акварель, акрил, темперу, текстурные пасты и натуральные элементы, внося
          кусочек природы в городской быт.
        </span>
        <Button as="internalLink" to="#footer">
          Написать
        </Button>
      </div>
      <div className={styles['image-wrapper']}>
        <Image
          src={headerPicture}
          alt="Девушка с папоротником на фоне леса"
          priority
          fill
          className={styles.image}
          sizes="(max-width: 280px) 100vw, 280px"
        />
      </div>
    </section>
  );
};

export default InfoBlock;
