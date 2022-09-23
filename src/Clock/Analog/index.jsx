import { useEffect, useState } from 'react';
import './styles.scss';

function AnalogClock() {

    const [deg, setDeg] = useState(setClock());

    function setClock() {
        let now = new Date();

        return {
            second: (now.getSeconds()/60 * 360) + ((now.getMilliseconds()/1000)*6) + 90,
            minute: (now.getMinutes()/60 * 360) + ((now.getSeconds()/60)*6) + 90,
            hour: (now.getHours()/12 * 360) + ((now.getMinutes()/60)*30) + 90
        }
    }

    useEffect(() => {        
        setTimeout(() => setDeg(setClock()), 1)
    })

    return (
        <div id="clock">
            <div className="clock-face-min">
                <span className="clock-min-line h0-6-1"></span>
                <span className="clock-min-line h0-6-2"></span>
                <span className="clock-min-line h0-6-3"></span>
                <span className="clock-min-line h0-6-4"></span>
                <span className="clock-min-line h1-7-1"></span>
                <span className="clock-min-line h1-7-2"></span>
                <span className="clock-min-line h1-7-3"></span>
                <span className="clock-min-line h1-7-4"></span>
                <span className="clock-min-line h2-8-1"></span>
                <span className="clock-min-line h2-8-2"></span>
                <span className="clock-min-line h2-8-3"></span>
                <span className="clock-min-line h2-8-4"></span>
                <span className="clock-min-line h3-9-1"></span>
                <span className="clock-min-line h3-9-2"></span>
                <span className="clock-min-line h3-9-3"></span>
                <span className="clock-min-line h3-9-4"></span>
                <span className="clock-min-line h4-10-1"></span>
                <span className="clock-min-line h4-10-2"></span>
                <span className="clock-min-line h4-10-3"></span>
                <span className="clock-min-line h4-10-4"></span>
                <span className="clock-min-line h5-11-1"></span>
                <span className="clock-min-line h5-11-2"></span>
                <span className="clock-min-line h5-11-3"></span>
                <span className="clock-min-line h5-11-4"></span>
            </div>
            <div className="clock-face">
                <span className="clock-line h0-6"></span>
                <span className="clock-line h1-7"></span>
                <span className="clock-line h2-8"></span>
                <span className="clock-line h3-9"></span>
                <span className="clock-line h4-10"></span>
                <span className="clock-line h5-11"></span>
            
                <span className="hand second"
                    style={{transform: `rotate(${deg.second}deg)`}}
                ></span>
                <span className="hand minute"
                    style={{transform: `rotate(${deg.minute}deg)`}}
                ></span>
                <span className="hand hour"
                    style={{transform: `rotate(${deg.hour}deg)`}}
                ></span>
            </div>
        </div>
    )
}

export default AnalogClock;