import Hero from "../sections/Hero";
import Identity from "../sections/Identity";
import Featured from "../sections/Featured";
import Capabilities from "../sections/Capabilities";
import Shift from "../sections/Shift";
import Origin from "../sections/Origin";
import Final from "../sections/Final";
import Story from "../components/Story";
import Skills from '../sections/Skills'
const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <Skills/>
      <Identity />
      <Featured />
      <Capabilities />
      <Shift />
      <Origin />
      <Final />
    </>
  );
};

export default Home;
