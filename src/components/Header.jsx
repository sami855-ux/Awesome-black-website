// import { FaArrowDown } from "react-icons/fa6"
import { FaModx } from "react-icons/fa6"
import { FaBars } from "react-icons/fa6"
import { FaX } from "react-icons/fa6"
import { FaSun } from "react-icons/fa6"
import { FaMoon } from "react-icons/fa6"
import PropTypes from "prop-types"
import { useState } from "react"

Header.propTypes = {
  onTheme: PropTypes.func,
  theme: PropTypes.bool,
}

export default function Header({ onTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false)

  function handelOpen() {
    setIsOpen((curr) => !curr)
  }

  return (
    <header className="header transparent-local">
      <div className="w-40 h-full flex items-center">
        <FaModx className="w-16 h-8 text-orange-600" />
        <h2 className="font-bold font-poppins text-xl tracking-tighter">
          VirtualIR
        </h2>
      </div>

      {/*Small scren bar*/}
      <div className="md:hidden cursor-pointer" onClick={handelOpen}>
        {isOpen ? <FaX /> : <FaBars />}
      </div>

      {isOpen ? <MobileMenu /> : null}

      {/*From medium screen and up */}
      <ul className="hidden h-full md:flex items-center justify-center">
        <Link text="Features" link="index.html" />
        <Link text="WorkFlow" link="index.html" />
        <Link text="Pricing" link="index.html" />
        <Link text="Testimonial" link="index.html" />
      </ul>
      <div className="hidden md:flex items-center">
        <span className="w-5 h-5 cursor-pointer mr-5" onClick={onTheme}>
          {theme ? (
            <FaSun height={50} className="w-full h-full" />
          ) : (
            <FaMoon height={50} className="w-full h-full" />
          )}
        </span>
        <ButtonHeader width={70} bgColor="transparent">
          Sign in
        </ButtonHeader>
        <a href="index.html" className="btn">
          create an acount
        </a>
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <div
      className="hideen md:block w-screen h-fit absolute top-16 left-0 bg-[#211f1f] py-5 "
      id="mobie-menu"
    >
      <ul className="h-full flex items-center justify-center flex-col space-y-1">
        <Link text="Features" link="index.html" />
        <Link text="WorkFlow" link="index.html" />
        <Link text="Pricing" link="index.html" />
        <Link text="Testimonial" link="index.html" />
      </ul>
      <div className="flex items-center justify-center mt-4">
        <ButtonHeader width={100} bgColor="transparent">
          Sign in
        </ButtonHeader>
        <a href="index.html" className="btn">
          create an acount
        </a>
      </div>
    </div>
  )
}

ButtonHeader.propTypes = {
  width: PropTypes.number,
  bgColor: PropTypes.string,
  children: PropTypes.string,
}

function ButtonHeader({ width, bgColor, children }) {
  const buttonStyle = {
    width: `${width}px`,
    backgroundColor: `${bgColor}`,
  }
  return (
    <button
      style={buttonStyle}
      className="text-xs font-poppins border border-white py-2 px-2 rounded-md mx-2 tracking-tighter"
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
}

function Link({ text, link }) {
  return (
    <li className="px-2 mx-2">
      <a
        href={link}
        className="font-poppins font-normal
       text-xs"
      >
        {text}
      </a>
    </li>
  )
}
