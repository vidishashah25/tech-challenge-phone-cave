import { Route, Routes } from "react-router-dom"
import PhoneDetails from "./component/PhoneDetails"
import PhoneList from "./component/PhoneList"


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element = {<PhoneList/>}/>
        <Route path="/phones/:phoneId" element = {<PhoneDetails/>}/>
      </Routes>
    </>
  )
}

export default App
