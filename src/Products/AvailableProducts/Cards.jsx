import { toast } from "react-toastify";
import { IoMdCheckmark } from "react-icons/io";
import writingImg from "../../assets/products/writing_2327400 1.png";
import designToolImage from "../../assets/products/design-tool.png";
import operationImg from "../../assets/products/operation.png";
import portfolioImg from "../../assets/products/portfolio.png";
import socialMediaImg from "../../assets/products/social-media.png";

const productImages = {
  1: writingImg,
  2: designToolImage,
  3: operationImg,
  5: portfolioImg,
  6: socialMediaImg,
};
const Cards = ({ product, cart, setCart }) => {
  const productImage = productImages[product.id] || designToolImage;
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
      <img src={productImage} alt={`${product.name} Icon`} className="py-3" />
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
