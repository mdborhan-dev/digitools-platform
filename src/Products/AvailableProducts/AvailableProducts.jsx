import Cards from "./Cards";

const AvailableProducts = ({ productData, cart, setCart }) => {
  return (
    <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch justify-between">
      {productData.map((product) => (
        <Cards
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default AvailableProducts;
