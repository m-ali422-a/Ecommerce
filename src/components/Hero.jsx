import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 rounded">
      {/* Left Section  */}
      <div className="flex items-center justify-center w-full sm:w-1/2 py-5 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-1.5">
            <p className="w-8 md:w-10 h-0.5 bg-[#414141]"></p>
            <p className="uppercase font-medium">Our BestSellers</p>
          </div>

          <h1 className="prata-regular text-3xl lg:text-6xl">Latest Arrivals</h1>

          <div className="flex items-center gap-1.5 py-3">
            <p className="uppercase font-medium">Shop Now</p>
            <p className="w-8 md:w-10 bg-[#414141] h-0.5"></p>
          </div>
        </div>
      </div>
      {/* Right Section  */}
        <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />

    </div>
  );
};

export default Hero;
