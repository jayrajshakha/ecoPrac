import { useParams } from "react-router-dom";
import useProducts from "../hooks/UseProducts";
import useCart from "../hooks/UseCart";

const ProductDetails = () => {
  const { id } = useParams();
  const [data] = useProducts();
  const { addCarts } = useCart();

  const product = data?.filter((f) => {
    return f.id === parseInt(id);
  });

  if (!product) {
    return <h1 className="text-center text-xl font-semibold">loading...</h1>;
  }

  return (
    <section className="pt-32 pb-12  lg:py-32 flex items-center  md:h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex justify-center items-center flex-1 mb-8 lg:mb-0">
            <img
              src={product[0].image}
              className="max-w-[200px] md:max-w-[200px] lg:max-w-[300px]"
              alt=""
            />
          </div>
          <div className="text-center lg:text-left flex-1">
            <h1 className="mb-2 mx-8 text-[18px] md:text-[26px] font-medium lg:mx-0  max-w-[450px]">
              {product[0].title}
            </h1>
            <div className="mb-6 text-xl text-red-500 font-medium">
              $ {product[0].price}
            </div>
            <p className="mb-8">{product[0].description}</p>
            <button
              onClick={() => addCarts(product[0], product[0].id)}
              className="text-white bg-primary px-8 py-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
