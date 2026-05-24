import { use } from "react";
import AvailableProducts from "./AvailableProducts/AvailableProducts";
import Cart from "./Cart/Cart";

const Products = ({ productPromise, cart, setCart, isActive, setIsActive }) => {
  const productData = use(productPromise);
  return (
    <div className="container mx-auto flex flex-col justify-between items-center gap-8 py-16 px-3">
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Premium Digital Tools
        </h1>
        <p className="lg:text-lg">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="tabs tabs-box justify-center items-center w-fit mx-auto bg-transparent border-0 shadow-none">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white text-lg font-semibold rounded-full h-12 px-7 items-center justify-center"
            aria-label="Products"
            onClick={() => setIsActive("product")}
            checked={isActive === "product"}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white text-lg font-semibold rounded-full h-12 px-7 items-center justify-center"
            onClick={() => setIsActive("cart")}
            aria-label={`Cart (${cart.length})`}
            checked={isActive === "cart"}
          />
        </div>
        {isActive === "product" && (
          <AvailableProducts
            productData={productData}
            cart={cart}
            setCart={setCart}
          />
        )}
        {isActive === "cart" && <Cart cart={cart} setCart={setCart} />}
      </div>
    </div>
  );
};

export default Products;
