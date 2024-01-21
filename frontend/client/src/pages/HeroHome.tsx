import HeroPosts from "../components/HeroPosts";
import RightSider from "../components/rightSiderbar/RightSider";
import StoryCarousel from "../components/story/StoryCarousel";

const HeroHome = () => {
  return (
    <section className="w-full flex h-full pt-4">
      <div className="max-w-[630px] mx-auto w-full">
        <StoryCarousel />
        <HeroPosts />
      </div>
      <div className="max-w-[319px] w-full mr-14">
        <RightSider />
      </div>
    </section>
  );
};

export default HeroHome;
