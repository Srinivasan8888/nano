import React, { useState } from 'react';
import '../graph/timepopup.scss';

const TimePopup = ({openTime, closeTime, onDataReceived}) => {
    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    if (!openTime) {
        return null;
    }
    const clearTime = () => {
        closeTime();
    }
    const handleSubmit = () => {
        onDataReceived(start, end);
        clearTime();
    }

  return (
    <>
    <div className="overlay-time" onClick={clearTime}/>

    <div className="timepopup">
    <i class='bx bx-window-close close-btn' onClick={clearTime}></i>
        <h1 className='head font-mono'>Please select data to Proceed</h1>
        <div className="time">
            <div className="start">
                <label className='font-serif font-bold'>Start Date</label>
                <input type='date' id='startdate' name='startdate' value={start} onChange={(e)=>setStart(e.target.value)}></input>
            </div>
            <div className="end">
             <label className='font-serif font-bold'>End Date</label>
                <input type='date' id='enddate' name='enddate' value={end} onChange={(e)=>setEnd(e.target.value)}></input>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default TimePopup