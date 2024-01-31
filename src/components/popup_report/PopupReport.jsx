import React from 'react'
import ReactDom from 'react-dom'
import '../popup_report/popupreport.scss'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import PictureAsPdfSharpIcon from '@mui/icons-material/PictureAsPdfSharp';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import img from '../../assets/images/img1.jpg'
import * as XLSX from 'xlsx'
import logo from '../../assets/images/download.jpg'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { saveAs } from 'file-saver';

// Register fonts for pdfmake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PopupReport = ({openreport, closereport, sensorData, sensorName, time}) => {

    if(!openreport){
        return null;
    }

    const generateExcel = () => {
    const data = [
        [sensorName,'time'], ...sensorData.map((value, index) => [value, time[index]])
    ];
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook,worksheet,'Sheet1');
    XLSX.writeFile(workbook,'xyma_vedanta.xlsx');
    }  
    
    const generatePdf = () => {

        const docDefinition = {
          content: [
            { 
              margin: [0,0,0,0],
              columns: [
                {
                  image: logo,
                  width: 40,
                }
              ]
            },
            {
              canvas: [                                                                     // Line to separate header and body
                { type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 0.5 },
              ],
            },
            {
              table: {
                widths: ['50%','50%'],
                headerRows: 1,
                body: [
                  [
                    { text: sensorName, bold: true },
                    { text: 'Time', bold: true },
                  ],
                  ...sensorData.map((value, index) => [value, time[index]]),
                ],
              },
            },
          ],
          styles: {
            header: {
              fontsize: 16,
              bold: true,
              marginBottom: 10,
            },
          },
        };
        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getBlob((blob) => {
          saveAs(blob, sensorName+'_xyma.pdf');
        });
    };

    return ReactDom.createPortal(
        <>
        <div className="overlay" onClick={closereport} />
            <div className="popupReportStyle">
                <div className="main-report">
                    <button onClick={closereport}><CloseSharpIcon /></button>
                    <div className="container-report">
                        <div className="left">
                            <img src={img} alt='report' className='img'/>
                        </div>
                        <div className="right">
                            <h4>REPORT</h4>
                            <div className="pdf" onClick={generatePdf}>
                                <PictureAsPdfSharpIcon className="pdf-icon" />
                            </div>
                            <div className="xl" onClick={generateExcel}>
                                <ArticleSharpIcon className="xl-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,

        document.getElementById('portalreport')
      )
}

export default PopupReport