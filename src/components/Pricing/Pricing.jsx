import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-6 py-12 lg:py-18">
        <div className="text-center space-y-4">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Simple, Transparent Pricing
          </h1>
          <p className="lg:text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        {/* Card sect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {/* Starter */}
          <div className="card rounded-2xl bg-base-200 p-6 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold">Starter</h3>
              <p>Perfect for getting started</p>
              <p className="py-3">
                <span className="text-4xl font-bold">$0</span>/Month
              </p>
              <ul>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Access to 10 free tools
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Basic templates
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Community support
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />1
                  project per month
                </li>
              </ul>
            </div>
            <button className="btn btn-primary rounded-full py-6 text-lg">
              Get Started Free
            </button>
          </div>
          {/* Pro */}
          <div className="card rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-6 flex flex-col justify-between gap-6 relative">
            <div className="space-y-3 text-white">
              <h3 className="text-3xl font-bold">Pro</h3>
              <p>Best for professionals</p>
              <p className="py-3">
                <span className="text-4xl font-bold">$29</span>/month
              </p>
              <ul>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Access to all premium tools
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Unlimited templates
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Priority support
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Unlimited projects
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Cloud sync
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Advanced analytics
                </li>
              </ul>
            </div>
            <button className="btn rounded-full py-6 text-lg">
              Start Pro Trial
            </button>
            <div className="badge bg-[#FEF3C6] text-[#BB4D00] border-0 p-3 rounded-full absolute -top-3 left-1/2 -translate-x-1/2">
              Most Popular
            </div>
          </div>
          {/* EnterPrise */}
          <div className="card rounded-2xl bg-base-200 p-6 flex flex-col justify-between gap-6 md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold">Enterprise</h3>
              <p>For teams and businesses</p>
              <p className="py-3">
                <span className="text-4xl font-bold">$99</span>/Month
              </p>
              <ul>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Everything in Pro
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Team collaboration
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Custom integrations
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Dedicated support
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  SLA guarantee
                </li>
                <li>
                  <IoMdCheckmark className="inline text-green-500 mr-1" />
                  Custom branding
                </li>
              </ul>
            </div>
            <button className="btn btn-primary rounded-full py-6 text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
