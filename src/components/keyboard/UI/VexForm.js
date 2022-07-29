import { useRef } from 'react';

export const VexForm = ({ handleTimeSig, handelNumberOfVoices }) => {
    // const [timeSignature, setTimeSignature] = useState('4/4');
    const timeSignature = useRef(null);
    const numberOfVoices = useRef(null);

    const handleClick = () => {
        if (timeSignature.current.value === '' || numberOfVoices.current.value === '') {
            alert('Please enter a valid time signature and/or specify a number of voices');
        } else {
            handleTimeSig(timeSignature.current.value);
            handelNumberOfVoices(numberOfVoices.current.value)
        }
    };

    return (
        <div className="easyKeyUi">
            <label>Time Signature</label>
            <div className="timeSigCtrls">
                <input ref={timeSignature} placeholder="4/4" type="text" className="uiInputs" />
            </div>
            <label>Number of Voices</label>
            <div className="voiceCtrls">
                <input ref={numberOfVoices} placeholder="1" type="number" min="1" max="4" className="uiInputs" />
            </div>
            <button onClick={handleClick}>Confirm</button>
        </div>
    );
};

// <input type="text" onChange={handleTimeSignature} placeholder="4/4" />
//                  <button onClick={handleTimeSigBtn}>Submit</button>
