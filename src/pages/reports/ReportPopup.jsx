import React from "react";
import { useState, useEffect } from "react";
import "../reports/reportpopup.scss";
import * as XLSX from "xlsx";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { saveAs } from "file-saver";
// import logo from "../../assets/images/download.jpg";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
                                                       
                                                      // class level
// Register fonts for pdfmake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generateData = (inforeport, startSensorIndex, endSensorIndex) => {
  const data = [];

  for (let index = 0; index < inforeport.length; index++) {
    for (let i = startSensorIndex; i <= endSensorIndex; i++) {
      if(i <= 108) {
        data.push({
        id: `${i}`,
        sensor: `Sensor ${i}`,
        sensorName: `Sensor ${i}`,
        updatedAt: inforeport[index]?.time,
      });
      }
    }
    return data;
  }
};
                                                           // function
const ReportPopup = ({ Openreportdash, Closereportdash, waveGuide }) => {

  const [inforeport, setInforeport] = useState([]);
  const [error, SetError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://52.66.175.77/sensor/find");
        const infoVal = await response.json();
        setInforeport(infoVal);
      } catch (error) {
        SetError(error);
      }
    };
    fetchData();
  }, []);

  if (!Openreportdash) {
    return null;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!inforeport) {
    return <div>Loading...</div>;
  }

  const startSensorIndex = (waveGuide - 1) * 10 + 1;
  const endSensorIndex = waveGuide * 10;

  const data = generateData(inforeport, startSensorIndex, endSensorIndex);

  const sensorFind = (sensor) => {
    const sensorData = [];
    const updateTime = [];
    const trimedSensor = sensor.replace(/ /g, "");
    const sensorName = trimedSensor.toLowerCase();

    for (let index = 0; index < inforeport.length; index++) {
      sensorData[index] = inforeport[index]?.[sensorName];
      updateTime[index] = inforeport[index]?.time;
    }
    return { sensorData, updateTime };
  };

  const generateExcel = (item) => {
    const { sensorData, updateTime } = sensorFind(item.sensor);
    const data = [
      [item.sensorName, "time"],
      ...sensorData.map((Value, index) => [Value, updateTime[index]]),
    ];
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "sheet1");
    XLSX.writeFile(workbook, "xyma_vedanta.xlsx");
  };

  const generatePdf = (item) => {
    const { sensorData, updateTime } = sensorFind(item.sensor);

    const filteredData = sensorData.filter(
      (value, index) => value !== undefined && updateTime[index] !== undefined
    );
    const filteredUpdateTime = updateTime.filter(
      (value, index) => value !== undefined && sensorData[index] !== undefined
    );

    const docDefinition = {
      content: [
        // {
        //   margin: [0, 0, 0, 0],
        //   columns: [
        //     {
        //       image: logo,
        //       width: 40,
        //     },
        //   ],
        // },
        {
          canvas: [
            // Line to separate header and body
            {
              type: "line",
              x1: 0,
              y1: 5,
              x2: 595 - 2 * 40,
              y2: 5,
              lineWidth: 0.5,
            },
          ],
        },
        {
          table: {
            widths: ["50%", "50%"],
            headerRows: 1,
            body: [
              [
                { text: item.sensorName, bold: true },
                { text: "Time", bold: true },
              ],
              ...filteredData.map((value, index) => [
                value,
                filteredUpdateTime[index],
              ]),
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
      saveAs(blob, item.sensorName + "_xyma.pdf");
    });
  };

  return (
    <>
      <div className="overlay-report" onClick={Closereportdash} />

      {inforeport.length !== 0 ? (
        <div className="report-dash">
        {data.map((item, index) => {
          return (
            <div className="box-report-popup" key={index}>
              <span className="text-base">{item.sensorName}</span>
              <div className="btn">
                <div className="pdf" onClick={()=>{generatePdf(item)}}>
                  <PictureAsPdfIcon className="icon-report"/>
                  <span className="text-xs">Pdf</span>
                </div>
                <div className="xl" onClick={()=>{generateExcel(item)}}>
                  <TextSnippetIcon className="icon-report"/>
                  <span className="text-xs">Excel</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      ) : (
        <div className="load">
          <div class="loader">
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
          </div>
        </div>
      ) } 
      
    </>
  );
}

export default ReportPopup;
