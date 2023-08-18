import "./DigitalClock.css"
const { useState, useEffect } = require("react")


const DigitalClock=()=>{

    const [CurrDateTime,setCurrDateTime]= useState(new Date())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrDateTime(new Date())
        },1000)
        return ()=>clearInterval(interval)
    })

    
    return(
        <div>
        <div className="digital-clock">
      <h4 className="clock-heading">Digital Clock</h4>
      <h1 className="clock-time">{CurrDateTime.toLocaleString()}</h1>
    </div>
    <div>
   
        <h6> &copy; Athul Jain</h6>
    </div>
    </div>
    )
}
export default DigitalClock