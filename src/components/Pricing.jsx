import PropTypes from "prop-types"
import { FaCircleCheck } from "react-icons/fa6"

function Pricing() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col space-y-5 mt-16">
      <h2 className="font-poppins textClip text-4xl">Pricing</h2>
      <PriceWrapper />
    </div>
  )
}

PricingCard.propTypes = {
  stat: PropTypes.string,
  price: PropTypes.number,
  arrBenefit: PropTypes.array,
}

const benefitOne = [
  "Private Boarding sharing",
  "5GB Storage",
  "Web Analytics",
  "Private Mode",
]

const benefitTwo = [
  "Private Boarding sharing",
  "Unlimted Storage",
  "High Performance Network",
  "Private Mode",
]

const benefitThree = [
  "Private Boarding sharing",
  "50GB Storage",
  "Advanced Web Analytics",
  "Private Mode",
]

function PriceWrapper() {
  return (
    <div className=" w-full md:w-[95%] lg:w-3/4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <PricingCard stat="Free" price={0} arrBenefit={benefitOne} />
      <PricingCard stat="Pro" price={10} arrBenefit={benefitTwo} />
      <PricingCard stat="Enterprise" price={200} arrBenefit={benefitThree} />
    </div>
  )
}

function PricingCard({ stat, price, arrBenefit }) {
  return (
    <div className="w-[310px] h-[69vh] border border-gray-400 rounded-md shadow-md p-7 flex flex-col ">
      <h1 className="text-2xl pb-4 font-poppins">
        {stat}{" "}
        {stat === "Pro" ? (
          <span className="textClip text-sm ">(Most Popular)</span>
        ) : null}
      </h1>
      <p className="font-poppins mb-10">
        <span className="text-4xl">${price}</span>
        <span className="text-sm text-gray-400">/Month</span>
      </p>

      {arrBenefit.map((benfit, i) => (
        <Benefits text={benfit} key={i} />
      ))}

      <button className="w-full h-10 border border-orange-700 rounded-md font-poppins mt-12">
        Subscribe
      </button>
    </div>
  )
}

Benefits.propTypes = {
  text: PropTypes.string,
}

function Benefits({ text }) {
  return (
    <p className="flex space-x-3 items-center my-3">
      <span className="">
        <FaCircleCheck />
      </span>
      <span className="text-gray-200 text-sm font-poppins">{text}</span>
    </p>
  )
}
export default Pricing
