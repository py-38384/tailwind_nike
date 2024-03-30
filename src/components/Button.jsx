
const Button = ({label, iconURl, backgroundColor, textColor, borderColor, fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
    ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}`:`bg-coral-red text-white border-coral-red`}
    ${fullwidth && 'w-full'}
    `}>
        {label}
        { iconURl &&
        <img 
            className= 'ml-2 rounded-full w-5 h-5 '
            src={iconURl} 
            alt="icon" 
        />
        }
    </button>
  )
}

export default Button