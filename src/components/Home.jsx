import PropTypes from "prop-types"

function Home() {
  return (
    <div className="w-screen home flex justify-center items-center flex-col">
      <BoxOne />
      <BoxTwo />
    </div>
  )
}

function BoxTwo() {
  return (
    <div className="w-[95%] lg:w-3/4 h-1/2 flex justify-center items-center space-x-5 md:mx-16">
      <Video video="/video/vid1.mp4" />
      <Video video="/video/vid2.mp4" />
    </div>
  )
}

function Video({ video }) {
  return (
    <section className="w-2/5 h-[80%] border border-orange-500 rounded-md overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        src={video}
      ></video>
    </section>
  )
}

Video.propTypes = {
  video: PropTypes.string,
}

function BoxOne() {
  return (
    <div className="w-full lg:w-3/4 h-1/2 flex justify-center items-center flex-col">
      <h2 className="text-4xl md:text-6xl font-poppins text-center">
        VirtualIR build tools{" "}
        <span className="textClip">
          for <br /> developers
        </span>
      </h2>
      <p className="text-center py-6 px-5 md:px-20 text-sm font-monstera tracking-tighter">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veritatis
        ut repellendus suscipit nulla sequi enim, voluptates rem accusamus
        consequuntur temporibus? Accusantium officia autem excepturi?
      </p>
      <section className="flex justify-center items-center space-x-4">
        <button className=" px-5 py-2 font-poppins text-xs border border-orange-700 rounded-md bg-gradient-to-r from-orange-500 to-orange-700">
          Start for free
        </button>
        <button className="hover:bg-orange-500 hover:text-white transition-all ease-in duration-100 px-5 py-2 font-poppins text-xs border border-orange-700 rounded-md">
          Documentaion
        </button>
      </section>
    </div>
  )
}
export default Home
