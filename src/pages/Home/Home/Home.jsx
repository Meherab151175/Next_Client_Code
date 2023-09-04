import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";
import PopularInstructor from "../PopularInstructor";
import Slider from "../Slider";
import PopularClasses from "./PopularClasses";
import ExtraCurri from "./ExtraCurri";
import Review from "./Review";
import UpcomingCourse from "./UpcomingCourse";

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
      <ExtraCurri />
      <Review />
      <UpcomingCourse />
    </div>
  );
};

export default Home;
