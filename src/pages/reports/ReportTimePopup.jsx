import React, { useState } from 'react'
import '../reports/reporttimepopup.scss'

const ReportTimePopup = ({openReportTime, closeReportTime, onDataReportReceived}) => {
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [full, setFull] = useState(false);

    if (!openReportTime) {
        return null;
    }
    const clearReportTime = () => {
        closeReportTime();
    }
    const handleReportSubmit = () => {
        onDataReportReceived(start, end, full);
        clearReportTime();
    }

  return (
    <>
    <div className="overlay-report-time" onClick={clearReportTime}/>
    
    <div className="reporttimepopup">
    <i class='bx bx-window-close close-btn' onClick={clearReportTime}></i>
    <div className="live"><button onClick={()=>{setFull(true)}}>live</button></div>
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
            <button onClick={handleReportSubmit}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default ReportTimePopup