import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-[15px] mb-15">
        <div>
          <img className="w-35 mb-4" src={assets.logo} alt="" />
          <p className="w-full sm:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium uppercase mb-5">Company</p>
          <ul className="flex flex-col gap-1">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium uppercase mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92 300000000</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="border-gray-400" />
        <p className="text-center text-sm py-6">
          Copyright 2026@ Outfithub.com - All Right Reserved.
        </p>
      </div>

    </div>
  );
};

export default Footer;
