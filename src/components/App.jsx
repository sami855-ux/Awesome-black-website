import Header from "./Header"
import Home from "./Home"
import Features from "./Featuers"
import WorkFlow from "./WorkFlow"
import Pricing from "./Pricing"
import Testmonial from "./Testmonial"
import Footer from "./Footer"
import { useState } from "react"

export default function App() {
  const [theme, setTheme] = useState(true)

  function handelTheme() {
    setTheme((curr) => !curr)
  }
  return (
    <div className="w-screen h-fit" id={theme ? "dark" : "light"}>
      <Header onTheme={handelTheme} theme={theme} />
      <Home />
      <Features />
      <WorkFlow />
      <Pricing />
      <Testmonial />
      <Footer />
    </div>
  )
}
