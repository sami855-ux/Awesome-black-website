import Header from "./components/Header"
import Home from "./components/Home"
import Features from "./components/Featuers"
import WorkFlow from "./components/WorkFlow"
import Pricing from "./components/Pricing"
import Testmonial from "./components/Testmonial"
import Footer from "./components/Footer"
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
