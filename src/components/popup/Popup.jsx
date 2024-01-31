import React from 'react';
import ReactDom from 'react-dom';
import { Line } from 'react-chartjs-2';
import '../popup/popup.scss';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { colors } from '@mui/material';

const Popup = ({open,children,onClose,sensorData,sensorUpdate,sensorName}) => {
    
    if(!open){
        return null;
    }
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: true,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: true,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                borderRadius: 20,
                borderSkipped: 'bottom'
            }
        }
    }

    const chartData = {
        labels: sensorUpdate,
        datasets: [
            {
                label: 'sensor',
                data: sensorData,
                borderColor: colors.blueGrey,
                tension: 0
            } 
        ]
    }

  return ReactDom.createPortal(
    <>
    <div className="overlay" onClick={onClose}/>
    <div className="popupstyle">
        <button onClick={onClose}> <CloseSharpIcon/> </button>
        <div className="title">{sensorName}</div>
        {children}
        <div className='chart'>
             <Line options={chartOptions} data={chartData} height={`300px`} />
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default Popup