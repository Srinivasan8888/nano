import React from "react";
import "../reports/reports.scss";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import ReportTimePopup from "./ReportTimePopup";

const Reports = () => {
  const [isReportOpentime, setReportIsOpentime] = useState(false);

  const [StartTime, setStartTime] = useState(null);
  const [EndTime, setEndTime] = useState(null);
  const [Full, setFull] = useState(["null"]);
  const [selectBusbar, setSelectBusbar] = useState("sensorModel1");

  const [infoReport, setInfoReport] = useState([]);
  const [errorReport, setErrorReport] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:4000/sensor/getAllcollection";
      try {
        console.log(url);
        const response = await fetch(url);
        const infoVal = await response.json();
        setFull(infoVal);
      } catch (error) {
        setErrorReport(error);
      }
    };
    const interval = setInterval(() => {
      fetchData();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      var url;
      if (StartTime != null) {
        url = `http://localhost:4000/sensor/gettime?start=${StartTime}&end=${EndTime}&busbar=${selectBusbar}`;
      } else {
        url = `http://localhost:4000/sensor/getfull${selectBusbar}`;
      }
      try {
        console.log(url);
        const response = await fetch(url);
        const infoVal = await response.json();
        setInfoReport(infoVal);
      } catch (error) {
        setErrorReport(error);
      }
    };
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [StartTime, EndTime, selectBusbar]);

  if (errorReport) {
    return <div>Error: {errorReport.message}</div>;
  }
  if (!infoReport) {
    return <div>Loading...</div>;
  }
  // full
  console.log("Full", Full);
  const temp = [
    "CBT1A1",
    "CBT1A2",
    "CBT2A1",
    "CBT2A2",
    "CBT3A1",
    "CBT3A2",
    "CBT4A1",
    "CBT4A2",
    "CBT5A1",
    "CBT5A2",
    "CBT6A1",
    "CBT6A2",
    "CBT7A1",
    "CBT7A2",
    "CBT8A1",
    "CBT8A2",
    "CBT9A1",
    "CBT9A2",
    "CBT10A1",
    "CBT10A2",
  ];
  for (let i = 0; i < 50; i++) {
    let Data = [];
    for (let j = 0; j <= 5; j++) {
      let tempData = [];
      for (let k = 0; k < temp.length; k++) {
        if (Full[i] && Full[i][j]) {
          tempData.push(Full[i][j]?.[temp[k]]);
          console.log("temta", Full[i]);
          console.log("tempData", tempData);
        } else {
          console.error(`Element at Full[${i}][${j}] is undefined or null.`);
        }
      }
    }
  }

  // for busbar
  const dataFull = [];
  for (let i = 0; i < infoReport.length; i++) {
    const data = [];
    for (const key in infoReport[0]) {
      if (
        key !== "_id" &&
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data.push(key);
      }
    }
    let temp = [];
    for (let j = 0; j < data.length; j++) {
      temp[j] = infoReport[i]?.[data[j]];
    }
    dataFull[i] = temp;
  }

  const cbtName = [];
  for (const key in infoReport[0]) {
    if (
      key !== "_id" &&
      key !== "id" &&
      key !== "createdAt" &&
      key !== "updatedAt" &&
      key !== "__v" &&
      key !== "TIME"
    ) {
      cbtName.push(key);
    }
  }
  const time = [];
  //Getting Date
  for (let k = 0; k < infoReport.length; k++) {
    time[k] = infoReport[k]?.TIME;
  }
  //Adding Date on End
  for (let l = 0; l < dataFull.length; l++) {
    const timestamp = time;
    dataFull[l][dataFull[l].length] = timestamp[l];
  }

  cbtName.push("TimeStamp"); //Add TimeStamp header

  const handleDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([cbtName, ...dataFull]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    XLSX.writeFile(workbook, "excel_data.xlsx");
  };

  const handleReportTime = (start, end, full) => {
    setStartTime(start);
    setEndTime(end);
    setFull(full);
  };

  const handleClick = (data) => {
    switch (data) {
      case 1:
        setSelectBusbar("sensorModel1");
        break;
      case 2:
        setSelectBusbar("sensorModel2");
        break;
      case 3:
        setSelectBusbar("sensorModel3");
        break;
      case 4:
        setSelectBusbar("sensorModel4");
        break;
      case 5:
        setSelectBusbar("sensorModel5");
        break;
      case 6:
        setSelectBusbar("sensorModel6");
        break;
      case 7:
        setSelectBusbar("sensorModel7");
        break;
      case 8:
        setSelectBusbar("sensorModel8");
        break;
      case 9:
        setSelectBusbar("sensorModel9");
        break;
      case 10:
        setSelectBusbar("sensorModel10");
        break;
      default:
        setSelectBusbar("sensorModel1");
    }
  };

  //test
  const data = [
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
    ],
  ];

  const generateExcel = () => {
    const chunkedDataArrays = data.map((data) => {
      const chunkedData = [];
      for (let i = 0; i < data.length; i++) {
        chunkedData.push(data.slice(i * 27, (i + 1) * 27));
      }
      return chunkedData;
    });

    const worksheetData = [];

    for (let j = 0; j < data.length; j++) {
      const chunkedData = chunkedDataArrays[j];
      worksheetData.push([
        "Date",
        "Time",
        "Side",
        ...Array.from({ length: 27 }, (_, i) => i + 1),
      ]);
      worksheetData.push(["", "", "", ...chunkedData[0]]);
      worksheetData.push(["", "", "A Side", ...chunkedData[1]]);
      worksheetData.push(["", "", "", ...chunkedData[2]]);
      worksheetData.push([
        "2023-11-27",
        "08:00 AM",
        "B Side",
        ...chunkedData[3],
      ]);
      worksheetData.push(["", "", ""]);
    }

    // Create a worksheet
    const ws = XLSX.utils.aoa_to_sheet(worksheetData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "vedanta.xlsx");
  };

  return (
    <div className="report">
      <div className="container">
        <div className="head" onClick={generateExcel}>
          <h1>Excel</h1>
        </div>
        <div className="aside">
          <div className="name_a">
            <span>A Side</span>
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(1);
              handleDownload();
            }}
          >
            BusBar 1
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(2);
              handleDownload();
            }}
          >
            BusBar 2
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(3);
              handleDownload();
            }}
          >
            BusBar 3
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(4);
              handleDownload();
            }}
          >
            BusBar 4
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(5);
              handleDownload();
            }}
          >
            BusBar 5
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(6);
              handleDownload();
            }}
          >
            BusBar 6
          </div>
        </div>

        <div className="bside">
          <div className="name_b">
            <span>B Side</span>
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(7);
              handleDownload();
            }}
          >
            BusBar 7
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(8);
              handleDownload();
            }}
          >
            BusBar 8
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(9);
              handleDownload();
            }}
          >
            BusBar 9
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(10);
              handleDownload();
            }}
          >
            BusBar 10
          </div>
        </div>
      </div>
      <ReportTimePopup
        openReportTime={isReportOpentime}
        closeReportTime={() => setReportIsOpentime(false)}
        onDataReportReceived={handleReportTime}
      />
    </div>
  );
};

export default Reports;
