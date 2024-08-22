import React from "react"
import { FaCircleCheck } from "react-icons/fa6"
import PropTypes from "prop-types"

function WorkFlow() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col mt-20 pt-20">
      <h1 className="text-3xl md:text-5xl font-poppins mb-7 text-center">
        Accelerating your
        <span className="textClip"> code workflow</span>
      </h1>
      <div className="w-3/4 flex flex-col md:flex-row md:space-x-10 mx-7">
        <ImgWrapper />
        <ImgDescription />
      </div>
    </div>
  )
}

function ImgWrapper() {
  return (
    <div className=" w-full h-1/2 md:w-1/2 md:h-[70vh]">
      <img
        src="public/img7.jpeg"
        alt="Worflow"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

function ImgDescription() {
  return (
    <div className="w-full h-1/2 md:w-1/2 md:h-[70vh] flex flex-col  space-y-7 mt-5">
      <Description text="Code merge made easy" />
      <Description text="Review code without Worry" />
      <Description text="AI Assistance to reduce time" />
      <Description text="Share work in minutes" />
    </div>
  )
}

Description.propTypes = {
  text: PropTypes.string,
}

function Description({ text }) {
  return (
    <div className="w-full h-fit flex space-x-3 pb-2 mb-1">
      <span className="w-8 h-7 p-1">
        <FaCircleCheck color="#249c22" />
      </span>
      <div className="">
        <h2 className="font-poppins"> {text}</h2>
        <p className="text-gray-400 font-poppins text-xs pt-2">
          When receiving data, this layer will get the signal received and
          convert it into 0s and 1s and send them to the Data Link layer
        </p>
      </div>
    </div>
  )
}
export default WorkFlow
