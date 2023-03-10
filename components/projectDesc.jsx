const ImageComponent = () => {
  return (
    <div className="lg:w-[55%]">
      <div className="relative">
        <img
          src="/images/project.jpg"
          width="200"
          height="200"
          className="mx-auto mt-8 w-[80%] rotate-[8deg] rounded-[10rem]"
        />
        <img
          src="/images/3D_elements.png"
          alt=""
          className="animate-fly absolute top-0"
        />
      </div>
    </div>
  );
};

const Description = ({ title }) => {
  return (
    <div className="py-20 lg:w-[45%] lg:pl-16">
      <h2 className="text-jacarta-700 font-display mb-6 text-2xl dark:text-white">
        {title}
      </h2>
      <p className="dark:text-jacarta-300 mb-8 text-lg leading-normal">
        Project Tag line - Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam
      </p>
      <p className="dark:text-jacarta-300 mb-10">
        Project Description - Every digital creation available through
        MakersPlace is an authentic and truly unique digital creation, signed
        and issued by the creator — made possible by blockchain technology. Even
        if the digital creation is copied, it wont be the authentic and
        originally signed version.
      </p>
      <div className="flex justify-center sm:space-x-10">
        <a
          href="#"
          className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
        >
          Contribute and get a NFT
        </a>
      </div>
    </div>
  );
};

export default function ProjectDesc({ left, title }) {
  return (
    <div>
      <section className="dark:bg-jacarta-800 relative  lg:py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          {left ? (
            <div className="lg:flex lg:justify-between">
              <ImageComponent />
              <Description title={title} />
            </div>
          ) : (
            <div className="lg:flex lg:justify-between pb-20 lg:pb-0">
              <Description title={title} />
              <ImageComponent />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
