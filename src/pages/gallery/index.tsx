// Container
import GalleryContainer from '@/ui/containers/gallery/Gallery.container';

// Components
import CustomHead from '@/ui/components/custom-head/CustomHead';

// Types
import { NextPageWithLayout } from '../../ui/types/page-with-layout';

// Layout
import MainLayout from '@/ui/layouts/main/Main.layout';

const Gallery: NextPageWithLayout = (): React.ReactNode => {
  return (
    <>
      <CustomHead />
      <GalleryContainer />
    </>
  );
};

Gallery.getLayout = (page: React.ReactElement): React.ReactNode => {
  return <MainLayout>{page}</MainLayout>;
};

export default Gallery;
