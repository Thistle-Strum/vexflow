import { Fragment, useState } from "react";

export const VexForm = ({handleTimeSig}) => {
  const [timeSignature, setTimeSignature] = useState('4/4')

    const handleTimeSignature = e => {
       setTimeSignature(e.target.value);
    }
    const handleTimeSigBtn = e => {
        e.preventDefault();
        handleTimeSig(timeSignature);
    }


    return (
        <Fragment>
            <form action="">
                <label htmlFor="">Time Signature</label>
                <input 
                    type="text" 
                    onChange={handleTimeSignature}
                    placeholder="4/4"
                />
                <button
                    onClick={handleTimeSigBtn}
                >Submit
                </button>
            </form>
        </Fragment>
    )
}