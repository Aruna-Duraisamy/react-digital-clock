import React, {useState, useEffect} from 'react'
import './Clock.css'

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      setInterval(() => {
          setTime(new Date().toLocaleTimeString());
      }, 1000);
    }, [])
    
    return (
        <div>
            <h3>Simple Digital Clock</h3>
            <div className='clock'>{time}</div>
        </div>
  )
}

export default Clock