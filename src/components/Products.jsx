import { BsPlus } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useCart from "../hooks/UseCart";

// eslint-disable-next-line react/prop-types
const Products = ({ productsDetails }) => {
  // eslint-disable-next-line react/prop-types

  const { addCarts } = useCart();

  const { images, title, price, category, id } = productsDetails;

  return (
    <div>
      <div className="h-[300px] border border-[#e4e4e4] overflow-hidden mb-4 relative group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* Image */}
          <div className="w-[200px] flex justify-center items-center mx-auto">
            <img
              className="max-h-[190px] group-hover:scale-110 transition duration-300"
              src={images[0]}
        
              alt={title}
            />
          </div>
          {/* Button*/}
          <div className="absolute top-4 -right-11 group-hover:right-4  p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addCarts(productsDetails, id)}>
              <div className="flex justify-center items-center bg-red-500 text-white h-12 w-12 ">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/products/${id}`}
              className="h-12 w-12 flex justify-center bg-white items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill className="" />
            </Link>
          </div>
        </div>
      </div>
      {/* catagory and title */}
      <div>
        <div className="text-sm mb-1 capitalize text-gray-500">{category}</div>
        <Link to={`/products/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold ">${price}</div>
      </div>
    </div>
  );
};

export default Products;
