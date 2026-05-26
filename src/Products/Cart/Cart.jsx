import { CiWarning } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import writingImg from "../../assets/products/writing_2327400 1.png";
import designToolImage from "../../assets/products/design-tool.png";
import operationImg from "../../assets/products/operation.png";
import portfolioImg from "../../assets/products/portfolio.png";
import socialMediaImg from "../../assets/products/social-media.png";

const cartImages = {
  1: writingImg,
  2: designToolImage,
  3: operationImg,
  5: portfolioImg,
  6: socialMediaImg,
};

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const handleCheckout = () => {
    toast.success(`Payment of total $${totalPrice} Successful`);
    setCart([]);
  };
  const handleRemove = (item) => {
    const newCart = cart.filter((cp) => cp.id != item.id);
    setCart(newCart);
    toast.warning(`${item.name} removed from cart`);
  };
  return (
    <div className="rounded-2xl border border-base-300 shadow-md shadow-base-300 flex flex-col gap-4 p-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-left">Your Cart</h2>
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 py-16">
          <h4 className="text-7xl">
            <CiWarning />
          </h4>
          <h3 className="text-3xl font-semibold">Your Cart is empty</h3>
        </div>
      )}
      {cart.length != 0 && (
        <div className="flex flex-col">
          <div className="flex flex-col justify-between items-center gap-3">
            {cart.map((item) => {
              const cartImage = cartImages[item.id] || designToolImage;
              return (
                <div
                  key={item.id}
                  className="p-4 flex border bg-base-300 border-base-300 rounded-2xl w-full justify-between items-center"
                >
                  <div className="flex gap-3">
                    <div className="p-3 rounded-full h-14 md:h-18 md:w-18 w-14 flex items-center justify-center border border-zinc-300">
                      <img
                        src={cartImage}
                        alt={`${item.name} Icon`}
                        className="py-3"
                      />
                    </div>
                    <div className="flex flex-col justify-between items-start gap-3">
                      <h4 className="font-bold text-xl text-left md:text-2xl">
                        {item.name}
                      </h4>
                      <p className="text-left">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item)}
                    className="btn btn-error lg:btn-soft rounded-full"
                  >
                    <MdDeleteOutline className="text-lg" />
                  </button>
                </div>
              );
            })}
            <div className="flex justify-between gap-5 w-full p-3">
              <h4 className="text-xl font-semibold text-left">Total</h4>
              <p className="text-lg font-semibold text-right">${totalPrice}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="btn btn-primary text-xl font-semibold w-full p-4 rounded-full"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
