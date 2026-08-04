const Button = ({text,style}) => {
  return (
    <div>
        <button
          className={`bg-black text-white text-xs px-10 py-4 cursor-pointer uppercase ${style}`}
          type="submit"
        >
          {text}
        </button>
    </div>
  )
}

export default Button