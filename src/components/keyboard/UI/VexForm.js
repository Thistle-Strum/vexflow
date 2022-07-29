import { useState, useRef } from 'react';

export const VexForm = ({ handleTimeSig }) => {
    // const [timeSignature, setTimeSignature] = useState('4/4');
    const timeSignature = useRef(null)
    const numberOfVoices = useRef(null)

    // console.log(timeSignature)
    const handleTimeSignature = e => {
        // setTimeSignature(e.target.value);
    };
    const handleClick = () => {
        handleTimeSig(timeSignature.current.value)
    };

    return (
            <div className='easyKeyUi'>    
                <label>Time Signature</label>
                <div className='timeSigCtrls'>
                    <input 
                        ref={timeSignature}
                        placeholder='4/4'
                        type="text" 
                        className='uiInputs'
                    />
                    <button onClick={handleClick}>Confirm</button>
                </div>
                <label>Number of Voices</label>
                <div className='voiceCtrls'>
                    <input 
                        ref={numberOfVoices}
                        placeholder='1'
                        type="number" 
                        min='1'
                        max='4'
                        className='uiInputs'
                    />
                    <button onClick={handleClick}>Confirm</button>
                </div>
            </div>
    );
};

// <input type="text" onChange={handleTimeSignature} placeholder="4/4" />
//                  <button onClick={handleTimeSigBtn}>Submit</button>