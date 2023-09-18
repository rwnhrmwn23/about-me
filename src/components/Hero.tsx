import Particle from "./Particles";
const Hero = ({ colorTheme }: { colorTheme: string }) => {
  return (
    <div
      id=""
      className="relative flex justify-center items-center h-[calc(100vh-100px)] "
    >
      <Particle colorTheme={colorTheme} />
      <div className="absolute flex items-center z-2 max-w-[1140px] mb:px-[16px] lg:px-[60px] ">
        <p className="mt-[-100px] typography-hello-mobile lg:hidden dark:text-base-light text-base-dark">
          Hary Arrahman, Frontend Web Developer
        </p>
        <p className="mt-[-100px] typography-hello mb:hidden lg:block dark:text-base-light text-base-dark">
          Hary Arrahman, Frontend Web Developer
        </p>
      </div>
    </div>
  );
};

export default Hero;
