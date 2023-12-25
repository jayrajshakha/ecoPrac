import { Link } from "react-router-dom";
import women from "../img/woman_hero.png";

const Hero = () => {
  return (
    <section className=" h-[800px] bg-hero bg-no-repeat bg-cover py-24 bg-center">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col  justify-center">
          <div className="flex items-center uppercase font-bold ">
            <div className="w-10 bg-red-500 h-[2px] mr-3"></div>new trend
          </div>
          <h1 className="leading-[1.1]  text-[40px] md:text-[70px] font-light mb-4">
            AUTUMAN SALES STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            className="uppercase self-start font-semibold border-b border-primary"
            to={"/"}
          >
            discover more
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={women} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
