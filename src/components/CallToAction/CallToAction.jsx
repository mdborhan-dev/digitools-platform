const CallToAction = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-22">
      <div className="container mx-auto flex flex-col gap-4 justify-between items-center text-white">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-lg">
            Join thousands of professionals who are already using DigiTools to
            work smarter. <br /> Start your free trial today.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-4 text-center">
          <div className="flex gap-3 max-sm:flex-col">
            <button className="btn bg-white text-[#4f39f6] py-7 rounded-full text-xl border border-white">
              Explore Products
            </button>
            <button className="btn btn-outline btn-ghost py-7 rounded-full text-xl">
              View Pricing
            </button>
          </div>
          <p className="text-md">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
