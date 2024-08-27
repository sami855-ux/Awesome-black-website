import { FaTaxi } from "react-icons/fa6"
import { FaGears } from "react-icons/fa6"
import { FaShield } from "react-icons/fa6"
import { FaBatteryFull } from "react-icons/fa6"
import { FaBug } from "react-icons/fa6"
import { FaMap } from "react-icons/fa6"
import PropTypes from "prop-types"

function Featuers() {
  return (
    <section className="w-screen min-h-screen  flex justify-center items-center flex-col">
      <FeaturesHeader />
      <CardConatiner />
    </section>
  )
}

function FeaturesHeader() {
  return (
    <div className="flex justify-center items-center flex-col mt-[72px]">
      <h3 className="font-poppins text-sm textClip pb-8">Features</h3>
      <h1 className="font-poppins text-3xl md:text-5xl text-center mb-5">
        Easily build <span className="textClip">your code</span>
      </h1>
    </div>
  )
}

function CardConatiner() {
  return (
    <div className="w-full lg:w-3/4 flex items-center justify-center flex-wrap md:space-x-2 mt-5">
      <Card
        icon={<FaTaxi color="#c7460e" />}
        header="Drag and Drop Interface"
        paraText=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere addicta non cupiditate libero ipsum praesentium amet nostrum."
      />
      <Card
        icon={<FaGears color="#c7460e" />}
        header="Multi-Platform Compatablity"
        paraText="Some layers add not only a header to the front, but also a trailer to the end. When it hits the bottom, the physical layer actually 
"
      />
      <Card
        icon={<FaShield color="#c7460e" />}
        header="Built-in Template"
        paraText="The application layer software then adds a header to the front of the message and passes the resulting message across the layer 6/7 interface to the presentation layer. "
      />
      <Card
        icon={<FaBatteryFull color="#c7460e" />}
        header="Real Time Perview"
        paraText="When the message arrives at machine 2, it is passed upward, with each layer stripping off and examining its own header."
      />
      <Card
        icon={<FaBug color="#c7460e" />}
        header="Collabration Tool"
        paraText="When the message arrives at machine 2, it is passed upward, with each layer stripping off and examining its own header."
      />
      <Card
        icon={<FaMap color="#c7460e" />}
        header="Analytics Dashboard"
        paraText="When the message arrives at machine 2, it is passed upward, with each layer stripping off and examining its own header."
      />
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.object,
  header: PropTypes.string,
  paraText: PropTypes.string,
}

function Card({ icon, header, paraText }) {
  return (
    <section className="w-[330px] h-40 flex space-y-5 p-2 flex-col">
      <div className="w-full h-fit flex space-x-3 items-start">
        <span className="flex justify-center items-center p-1 w-8 h-7 rounded-full bg-[#282626]">
          {" "}
          {icon}
        </span>

        <h2 className="font-poppins">{header}</h2>
      </div>
      <p className="pl-10 font-poppins text-gray-300 text-xs">{paraText}</p>
    </section>
  )
}
export default Featuers
