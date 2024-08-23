import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"

function Footer() {
  return (
    <div className="w-full min-h-[40vh] flex justify-center items-center flex-col space-y-8 pt-12 md:pt-0 ">
      <div className="w-[95%] md:w-[70%] h-[3/4] flex flex-col md:flex-row border-t border-slate-400 items-center justify-between  md:space-x-4 pt-6 space-y-3 md:space-y-0">
        <section className="w-72 h-full flex flex-col items-center md:items-start">
          <h2 className="text-sm font-poppins pb-4 font-semibold">Resources</h2>
          <p className="text-xs pb-2 font-poppins">Getting Started</p>
          <p className="text-xs pb-2 font-poppins">Documentation</p>
          <p className="text-xs pb-2 font-poppins">Tutorial</p>
          <p className="text-xs pb-2 font-poppins">API Reference</p>
          <p className="text-xs pb-2 font-poppins">Community Formus</p>
        </section>
        <section className="w-72 h-[3/4] flex flex-col items-center md:items-start">
          <h2 className="text-sm font-poppins pb-4 font-semibold">Platform</h2>
          <p className="text-xs pb-2 font-poppins">Features</p>
          <p className="text-xs pb-2 font-poppins">Supported Device</p>
          <p className="text-xs pb-2 font-poppins">System Requirement</p>
          <p className="text-xs pb-2 font-poppins">Downloads</p>
          <p className="text-xs pb-2 font-poppins">Releas Notes</p>
        </section>
        <section className="w-72 h-[3/4] flex flex-col items-center md:items-start">
          <h2 className="text-sm font-poppins pb-4 font-semibold">Community</h2>
          <p className="text-xs pb-2 font-poppins">Events</p>
          <p className="text-xs pb-2 font-poppins">Meetups</p>
          <p className="text-xs pb-2 font-poppins">Confernces</p>
          <p className="text-xs pb-2 font-poppins">Hackthons</p>
          <p className="text-xs pb-2 font-poppins">Jobs</p>
        </section>
      </div>
      <div className="w-full md:w-[70%] h-[1/4] flex justify-center items-center mt-10">
        <span className="w-12 h-12 m-1 cursor-pointer">
          <FaFacebook capHeight="50px" />
        </span>
        <span className="w-12 h-12 m-1 cursor-pointer">
          <FaInstagram capHeight="50px" />
        </span>
        <span className="w-12 h-12 m-1 cursor-pointer">
          <FaGithub capHeight="50px" />
        </span>
        <span className="w-12 h-12 m-1 cursor-pointer">
          <FaTwitter capHeight="50px" />
        </span>
        <span className="w-12 h-12 m-1 cursor-pointer">
          <FaLinkedin capHeight="50px" />
        </span>
      </div>
    </div>
  )
}

export default Footer
