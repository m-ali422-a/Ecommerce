import Button from "./Button";

const NewsLetter = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-2">
        Be the first to know about new collections and exclusive offers.
      </p>
      <form
        onSubmit={submitHandler}
        className="w-full sm:w-1/2 flex items-center border-gray-300 border pl-3 my-6 mx-auto"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <Button text={'Subscribe'} />
      </form>
    </div>
  );
};

export default NewsLetter;
