import userImage from "../../assets/user.png";
import packageImage from "../../assets/package.png";
import rocketImage from "../../assets/rocket.png";
const HowItWorks = () => {
  return (
    <div className="lg:p-20 p-4">
      <div className="container mx-auto flex flex-col gap-3">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h1 className="lg:text-5xl text-3xl md:text-4xl font-bold">
            Get Started in 3 Steps
          </h1>
          <p className="text-sm lg:text-lg md:text-md">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between items-stretch">
          {/* Card 01 */}
          <div className="card bg-base-300 p-6 lg:py-16 py-10 flex flex-col gap-5 justify-center items-center relative text-center w-full rounded-2xl">
            <img
              src={userImage}
              alt=""
              className="w-30 h-30 rounded-full p-4 bg-base-200"
            />
            <h2 className="text-3xl font-semibold ">Create Account</h2>
            <p className="text-lg">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
            <p className="w-10 h-10 bg-[#4f39f6] rounded-full text-white flex items-center justify-center absolute right-5 top-5">
              01
            </p>
          </div>
          {/* Card 02 */}
          <div className="card bg-base-300 p-6 lg:py-16 py-10 flex flex-col gap-5 justify-center items-center relative text-center w-full rounded-2xl">
            <img
              src={packageImage}
              alt=""
              className="w-30 h-30 rounded-full p-4 bg-base-200"
            />
            <h2 className="text-3xl font-semibold ">Choose Products</h2>
            <p className="text-lg">
              Browse our catalog and select the tools that fit your needs.
            </p>
            <p className="w-10 h-10 bg-[#4f39f6] rounded-full text-white flex items-center justify-center absolute right-5 top-5">
              02
            </p>
          </div>
          {/* Card 03 */}
          <div className="card bg-base-300 p-6 lg:py-16 py-10 flex flex-col gap-5 justify-center items-center relative text-center w-full rounded-2xl md:col-span-2 lg:col-span-1">
            <img
              src={rocketImage}
              alt=""
              className="w-30 h-30 rounded-full p-4 bg-base-200"
            />
            <h2 className="text-3xl font-semibold ">Start Creating</h2>
            <p className="text-lg">
              Download and start using your premium tools immediately.
            </p>
            <p className="w-10 h-10 bg-[#4f39f6] rounded-full text-white flex items-center justify-center absolute right-5 top-5">
              03
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
