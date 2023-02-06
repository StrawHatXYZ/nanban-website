import ProjectDesc from "@/components/projectDesc";
import React from "react";
import ImageTitle from "@/components/imageTitle";
import Hero_2 from "@/components/hero";

const Home_1 = () => {
  const banner = "/images/banner.jpg";
  return (
    <div className="">
      <Hero_2 />
      <ProjectDesc left={true} title={"Planting Trees"} />
      <ProjectDesc left={false} title={"Lake Rejuvenation"} />
      <ImageTitle text="Nanban Founation" image={banner} />
      <ProjectDesc left={true} title={"Organic and Sustainable Farming"}  />
    </div>
  );
};

export default Home_1;
