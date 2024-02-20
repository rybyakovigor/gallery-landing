// Container
import GalleryContainer from '@/ui/containers/gallery/Gallery.container';

// Components
import CustomHead from '@/ui/components/custom-head/CustomHead';

export default function Gallery(): React.ReactNode {
  return (
    <>
      <CustomHead />
      <GalleryContainer />
    </>
  );
}
