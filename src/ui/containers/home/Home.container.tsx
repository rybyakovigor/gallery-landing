// Components
import InfoBlock from './info-block/InfoBlock';
import WorksList from './works-list/WorksList';

// Styles
import styles from './styles.module.css';

const HomeContainer = (): React.ReactNode => {
  return (
    <main className={styles.container}>
      <InfoBlock />
      <WorksList />
    </main>
  );
};

export default HomeContainer;
