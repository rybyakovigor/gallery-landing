// Container
import AboutContainer from '@/ui/containers/about/About.container';

// Components
import CustomHead from '@/ui/components/custom-head/CustomHead';

// Types
import { NextPageWithLayout } from '../ui/types/page-with-layout';

// Layout
import MainLayout from '@/ui/layouts/main/Main.layout';

const About: NextPageWithLayout = (): React.ReactNode => {
  return (
    <>
      <CustomHead />
      <AboutContainer />
    </>
  );
};

About.getLayout = (page: React.ReactElement): React.ReactNode => {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
