import { Link } from "react-router-dom";
import women from "../../public/img/woman_hero.png";

const Hero = () => {
  return (
    <section className=" h-[800px] imgg bg-no-repeat bg-cover py-24 bg-center">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col  justify-center">
          <div className="flex items-center uppercase font-bold ">
            <div className="w-10 bg-red-500 h-[2px] mr-3"></div>new trend
          </div>
          <h1 className="leading-[1.1]  text-[40px] family md:text-[70px] font-medium mb-4">
            Save up to 45% on Fashion <br />
            <span className="font-bold text-green-700 ">Don&apos;t Miss</span>
          </h1>
          <Link
            className="hover:text-green-700 hover:scale-105 duration-300 uppercase self-start font-semibold border-b border-primary"
            to={"/"}
          >
            discover more
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={women} alt="" />
        </div>
      </div>
      {/* <div className="container mx-auto flex flex-col md:flex-row justify-around h-full">
        <div className="flex flex-col mb-3 justify-start md:justify-center">
          <div className="flex items-center uppercase font-bold ">
             
          </div>
          <h1 className="leading-[1.1]  text-[40px] md:text-[70px] font-bold ">
            Shop with Confidence <br />

            <span className="font-bold text-gray-200  text-[25px]">
              New Arrivals Just In!
            </span>
          </h1>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
