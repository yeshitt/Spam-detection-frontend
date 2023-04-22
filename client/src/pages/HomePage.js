import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import TextInput from '../Components/TextInput'
import CallRecInput from '../Components/CallRecInput'

function Home() {
  let [number, setNumber] = useState(true)
  return (
    <div>
        <Navbar />

        <div className="inputType">
          <button id="text" name="inputType" value="Text Message" onClick={()=> setNumber(true)}> Text Message </button>  
          <button id="callRec" name="inputType" value="Call Recording" onClick={()=> setNumber(false)}> Call </button>
        </div>

        {number ? 
        <TextInput /> :
        <CallRecInput />
        }
    </div>
  )
}

export default Home