import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ReactLenis } from 'lenis/react'
import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"
import { StarBackground } from "./Components/StarBackground"



function App() {


  return (
    <ReactLenis root>
      <StarBackground />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App
