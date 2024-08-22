import PropTypes from "prop-types"

function Testmonial() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center flex-col mt-20">
      <h1 className="text-3xl md:text-5xl font-poppins pb-4">
        What People <span className="textClip">Are Saying</span>
      </h1>
      <TestmonialWrapper />
    </div>
  )
}

function TestmonialWrapper() {
  return (
    <div className="w-full lg:w-3/4 flex justify-center items-center flex-wrap space-y-2 mt-7 gap-4">
      <CardTe
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
        praesentium incidunt, est iure ipsum quas ratione iste architecto odit
        magnam aliquam culpa quibusdam, modi omnis dolores, quaerat cupiditate
        obcaecati harum."
        imgSrc="/man (1).png"
        name="Samuel Tale"
        title="Visionary Creation"
      />
      <CardTe
        text="Data Transmission it defines the transmission mode whether it is simplex, half-duplex or full-duplex mode between the two devices on the network Topology it defines the way how network devices are arranged."
        imgSrc="/man (2).png"
        name="John Smith"
        title="Book Publisher"
      />
      <CardTe
        text="Routing is the major component of the network layer, and it determines the best optimal path out of the multiple paths from source to the destination."
        imgSrc="/man.png"
        name="Daniel Belay"
        title="Student"
      />
      <CardTe
        text="Data compression is a process of compressing the data, i.e., it reduces the number of bits to be transmitted. Data compression is very important in multimedia such as text, audio, video."
        imgSrc="/woman (1).png"
        name="Betty Belay"
        title="Infulencer"
      />
      <CardTe
        text="Different computers use different encoding methods, the presentation layer handles the interoperability between the different encoding methods. It converts the data from sender-dependent format into a common format and changes the common format into receiver-dependent format at the receiving end."
        imgSrc="/man (3).png"
        name="Biniyam Asged"
        title="School Manger"
      />
      <CardTe
        text="Encryption is needed to maintain privacy. Encryption is a process of converting the sender-transmitted information into another form and sends the resulting message over the network.Different computers use different encoding methods"
        imgSrc="/woman.png"
        name="Semira Gerbermedihn"
        title="Company Co."
      />
    </div>
  )
}

CardTe.propTypes = {
  text: PropTypes.string,
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
}

function CardTe({ text, imgSrc, name, title }) {
  return (
    <div className="w-[320px] h-fit p-3 bg-[#252424] rounded-md shadow-md mr-2 border border-[#2e2d2d]">
      <p className="font-thin font-monstera text-xs">{text}</p>
      <div className="w-full h-16 flex  items-center space-x-3">
        <span className="w-8 h-8 rounded-full">
          <img src={imgSrc} alt="man" className="w-full h-full" />
        </span>
        <div className="flex flex-col">
          <h2 className="font-monstera font-thin text-xs">{name}</h2>
          <p className="font-monstera font-thin text-xs">{title}</p>
        </div>
      </div>
    </div>
  )
}
export default Testmonial
