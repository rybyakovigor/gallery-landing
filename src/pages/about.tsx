// Container
import AboutContainer from '@/ui/containers/about/About.container';

// Components
import CustomHead from '@/ui/components/custom-head/CustomHead';

export default function About(): React.ReactNode {
  return (
    <>
      <CustomHead />
      <AboutContainer />
    </>
  );
}
