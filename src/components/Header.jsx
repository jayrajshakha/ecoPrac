import { BsBag } from "react-icons/bs";
import useSidebar from "../hooks/UseSidebar";
import useCart from "../hooks/UseCart";
import { Link } from "react-router-dom";
import logo from "../../public/img/logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const { totalAmount } = useCart();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={` ${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } z-10 w-full fixed transition-all sc `}
    >
      <div className="flex justify-between items-center mx-auto h-full container">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={logo} alt="" />
          </div>
        </Link>

        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 h-[18px] w-[18px] flex justify-center items-center text-[12px] text-white rounded-full ">
            {totalAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
