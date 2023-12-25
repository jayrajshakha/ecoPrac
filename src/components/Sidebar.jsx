import useSidebar from "../hooks/UseSidebar";
import { IoMdArrowForward } from "react-icons/io";
import useCart from "../hooks/UseCart";
import { CartItems } from "./index";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useSidebar();

  const { cart, clearCart, total, totalAmount } = useCart();

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  fixed top-0 h-full w-full bg-white shadow-2xl md:w-[35vw] lg:max-w-[30vw] transition-all duration-300 px-4 lg:px-[35px] z-20`}
    >
      <div className="flex justify-between pt-[7px] border-b items-center">
        <div className="uppercase font-semibold text-sm">
          Shoping Bag ({totalAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer flex justify-center items-center h-8 w-8"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col pr-1 overflow-y-auto overflow-x-hidden border-b h-[60%] custom-scrollbar">
        {cart?.map((item) => {
          return <CartItems item={item} key={item.id} />;
        })}
      </div>
      <div className="mt-1 gap-x-1 flex flex-col w-full ">
        <div className="flex justify-between items-center w-full">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total :</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icons*/}
          <div
            onClick={clearCart}
            className="flex justify-center items-center text-white bg-red-500 cursor-pointer h-12 w-12 text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="flex my-2 justify-center items-start bg-gray-200 font-medium w-full text-primary p-4"
        >
          {" "}
          Viewcart
        </Link>
        <Link
          className="flex justify-center items-start bg-primary font-medium w-full text-white p-4"
          to={"/"}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
