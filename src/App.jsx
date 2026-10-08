import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Brinquedos from "./pages/Brinquedos"
import Login from "./pages/Login"
import Error from "./pages/Error"


const App = () => {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brinquedos" element={<Brinquedos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
