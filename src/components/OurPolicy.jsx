import { assets } from "../assets/assets"
import PolicyCard from "./sharedComponents/PolicyCard"


const OurPolicy = () => {


  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 text-center text-xs sm:text-sm py-20">
        <PolicyCard
        image={assets.exchange_icon}
        text1={"Easy Exchange Policy"}
        text2={"We offer hassle free exchange policy"}
        />
        <PolicyCard
        image={assets.quality_icon}
        text1={"7 Days Return Policy"}
        text2={"We provide 7 days free return policy"}
        />
        <PolicyCard
        image={assets.support_img}
        text1={"Best customer support"}
        text2={"We provide 24/7 customer support"}
        />
    </div>
  )
}

export default OurPolicy