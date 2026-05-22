const Stats = () => {
  return (
    <div className="bg-[#4f39f6] p-12">
      <div className="container mx-auto">
        <div className="flex justify-evenly text-white">
          <div className="flex flex-col gap-3 lg:gap-5 text-center items-center justify-center">
            <h1 className="text-2xl lg:text-5xl font-semibold tracking-wide">
              50K+
            </h1>
            <p className="md:text-xl">Active Users</p>
          </div>
          <div className="divider md:divider-horizontal"></div>
          <div className="flex flex-col gap-3 lg:gap-5 text-center items-center justify-center">
            <h1 className="text-2xl lg:text-5xl font-semibold tracking-wide">
              200+
            </h1>
            <p className="md:text-xl">Premium Tools</p>
          </div>
          <div className="divider md:divider-horizontal"></div>
          <div className="flex flex-col gap-3 lg:gap-5 text-center items-center justify-center">
            <h1 className="text-2xl lg:text-5xl font-semibold tracking-wide">
              4.9
            </h1>
            <p className="md:text-xl">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
