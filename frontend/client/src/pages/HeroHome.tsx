import HeroPosts from "../components/HeroPosts";
import RightSider from "../components/rightSiderbar/RightSider";
import StoryCarousel from "../components/story/StoryCarousel";

const HeroHome = () => {
  return (
    <section className="w-full flex h-full pt-4 justify-end max-w-min border border-red-500">
      <div className="lg:max-w-[630px] max-w-none w-full ">
        <StoryCarousel />
        <HeroPosts />
      </div>
      <RightSider />
    </section>
  );
};

export default HeroHome;
