// Container
import HomeContainer from '@/ui/containers/home/Home.container';

// Components
import CustomHead from '@/ui/components/custom-head/CustomHead';

// Layout
import MainLayout from '@/ui/layouts/main/Main.layout';

// Types
import { NextPageWithLayout } from '../ui/types/page-with-layout';

const Home: NextPageWithLayout = (): React.ReactNode => {
  return (
    <>
      <CustomHead />
      <HomeContainer />
    </>
  );
};

Home.getLayout = (page: React.ReactElement): React.ReactNode => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
