import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";
import PopularInstructor from "../PopularInstructor";
import Slider from "../Slider";
import PopularClasses from "./PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>NextLang |Home</title>
      </Helmet>
      <Slider />
      <Featured />
      <PopularInstructor />
      <PopularClasses />
    </div>
  );
};

export default Home;
