import { Hero, Products } from "../components";
import useProducts from "../hooks/UseProducts";

const Home = () => {
  const [data] = useProducts();

  return (
    <div>
      <Hero />

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {!data ? (
              <h1 className="text-primary uppercase font-bold">Loading...</h1>
            ) : (
              data?.products &&
              data?.products.map((products) => {
                return (
                  <Products productsDetails={products} key={products.id} />
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
