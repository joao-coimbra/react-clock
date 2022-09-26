import { useEffect } from 'react';
import { useState } from 'react';
import './styles.scss'

function DigitalWatch() {

    const [time, setTime] = useState(setClock())

    function setClock() {

        let now = new Date();

        return {
            second: String(now.getSeconds()).padStart(2, '0'),
            minute: String(now.getMinutes()).padStart(2, '0'),
            hour: String(now.getHours()).padStart(2, '0')
        }
    }

    useEffect(() => {setTimeout(() => setTime(setClock()), 1)})

    return(
        <div id="digital">
            <div className="display">
                <div className="fake">
                    88:88:88
                </div>

                <div className="visor">
                    <div className="hour">
                        {time.hour.split('').map(t => <span>{t}</span>)}
                    </div>
                    <span className='divisor'>:</span>
                    <div className="minute">
                        {time.minute.split('').map(t => <span>{t}</span>)}
                    </div>
                    <span className='divisor'>:</span>
                    <div className="second">
                        {time.second.split('').map(t => <span>{t}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalWatch;