import Link from "next/link";
import Image from "next/image";

const Hero_2 = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero relative h-screen">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <figure className="h-screen w-full">
            <Image src="/images/gradient.jpg" alt="gradient" layout="fill" />
          </figure>
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <figure className="h-screen w-full">
            <Image
              src="/images/gradient_dark.jpg"
              alt="gradient dark"
              layout="fill"
            />
          </figure>
        </picture>

        <div className="container pt-32 flex flex-col justify-between">
          <div className="py-24 text-center">
            <h1 className="text-jacarta-700 font-display mb-6 text-5xl dark:text-white lg:text-6xl xl:text-7xl">
              Reviving the earth, restoring the hope
            </h1>
            {/* <p className="dark:text-jacarta-200 mb-8 text-lg">
              Buy and sell NFTs from the worlds top artists
            </p> */}
            <div className="md:inline-flex space-x-4 space-y-12 md:space-y-0">
              <div>
                <Link href="">
                  <a className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                    Donate
                  </a>
                </Link>
              </div>
              <div>
                <Link href="">
                  <a className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                    Donate crypto
                  </a>
                </Link>
              </div>
              <div>
                <Link href="">
                  <a className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                    Contribute and get a NFT
                  </a>
                </Link>
              </div>
              {/* <Link href="/collection/explore_collection">
								<a className="text-accent shadow-accent-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white">
									Explore
								</a>
							</Link> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_2;
