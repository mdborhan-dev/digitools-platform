import { toast } from "react-toastify";
import designToolImage from "../../assets/products/design-tool.png";
import { IoMdCheckmark } from "react-icons/io";

const Cards = ({ product, cart, setCart }) => {
  const handleCart = () => {
    const ifFound = cart.find((item) => item.id === product.id);
    if (ifFound) {
      toast.error(`${product.name} already in cart`);
      return;
    }
    toast.success(`${product.name} successfully added to cart`);
    setCart([...cart, product]);
  };
  return (
    <div className="card rounded-2xl bg-base-100 p-6 flex flex-col justify-between items-start gap-3 relative shadow-md inset-shadow-base-300 drop-shadow-base-300 border border-base-300">
      {product.icon != "" ? (
        <img src={product.icon} alt={`${product.name} Icon`} className="py-3" />
      ) : (
        <img
          src={designToolImage}
          alt="there wasn't other images so I used this"
          className="py-3"
        />
      )}
      <h3 className="text-2xl font-bold">{product.name}</h3>
      <p>Best for professionals</p>
      <p className="">
        <span className="text-3xl font-bold">${product.price}</span>/
        {product.period}
      </p>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1">
            <IoMdCheckmark className=" text-green-500 " />
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handleCart}
        className="btn rounded-full btn-primary py-6 text-lg w-full"
      >
        Buy Now
      </button>
      <div
        className={`badge badge-soft ${product.tagType === "bestSeller" ? "badge-secondary" : product.tagType === "popular" ? "badge-primary" : product.tagType === "new" ? "badge-info" : ""} absolute right-5 top-5`}
      >
        {product.tag}
      </div>
    </div>
  );
};

export default Cards;
