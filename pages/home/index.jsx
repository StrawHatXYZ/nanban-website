import ProjectDesc from "@/components/projectDesc";
import React from "react";
import ImageTitle from "@/components/imageTitle";
import Hero_2 from "@/components/hero/hero2";

const Home_1 = () => {
  const bgImage = "/images/page-title/knowledge_base_banner.jpg";
  const banner = "/images/user/banner.jpg";
  return (
    <div className="">
      <Hero_2 />
      <ProjectDesc left={true} />
      <ProjectDesc left={false} />
      <ImageTitle text="Nanban Founation" image={banner} />
      <ProjectDesc left={true} />
    </div>
  );
};

export default Home_1;
