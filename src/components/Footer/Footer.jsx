import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto">
        <div className="footer sm:footer-horizontal text-neutral-content py-14 pt-18 max-sm:px-5 mx-auto justify-between">
          <nav>
            <div className="flex items-center">
              <h1 className="font-semibold text-5xl mb-3">DigiTools</h1>
            </div>
            <p className="text-lg w-90">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title text-lg text-white">Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg text-white">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Career</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg text-white">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg text-white">Social</h6>
            <a className="link link-hover text-4xl rounded-full flex gap-3">
              <CiInstagram /> <CiTwitter /> <CiFacebook />
            </a>
          </nav>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between items-center pb-4 max-sm:flex-col">
          <p>&copy; 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-4 justify-between">
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
