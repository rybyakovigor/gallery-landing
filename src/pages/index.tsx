// Container
import HomeContainer from '@/ui/containers/home/Home.container';

// Components
import CustomHead from '@/ui/components/custom-head/CustomHead';

export default function Home(): React.ReactNode {
  return (
    <>
      <CustomHead />
      <HomeContainer />
    </>
  );
}
