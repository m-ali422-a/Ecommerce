const PolicyCard = ({ image, text1, text2 }) => {
  return (
    <div>
      <img src={image} className="w-11 m-auto mb-4" alt="" />
      <p className="font-semibold">{text1}</p>
      <p className="text-gray-400">{text2}</p>
    </div>
  );
};

export default PolicyCard;
