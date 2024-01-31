import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import {
  selectSensorData,
  selectSensorData2,
  selectSensorData3,
  selectSensorData4,
  selectSensorData5,
  selectSensorData6,
  selectSensorData7,
  selectSensorData8,
  selectSensorData9,
  selectSensorData10,
} from "../../redux/update/update.selector";
import "../table/table.scss";

const Table = () => {

  //redux
  const [busbar1, setBusBar1] = useState([]);
  const [busbar2, setBusBar2] = useState([]);
  const [busbar3, setBusBar3] = useState([]);
  const [busbar4, setBusBar4] = useState([]);
  const [busbar5, setBusBar5] = useState([]);
  const [busbar6, setBusBar6] = useState([]);
  const [busbar7, setBusBar7] = useState([]);
  const [busbar8, setBusBar8] = useState([]);
  const [busbar9, setBusBar9] = useState([]);
  const [busbar10, setBusBar10] = useState([]);
  const [time, setTime] = useState();

  const getUpdateSensorData = useSelector(selectSensorData);
  const getUpdateSensorData2 = useSelector(selectSensorData2);
  const getUpdateSensorData3 = useSelector(selectSensorData3);
  const getUpdateSensorData4 = useSelector(selectSensorData4);
  const getUpdateSensorData5 = useSelector(selectSensorData5);
  const getUpdateSensorData6 = useSelector(selectSensorData6);
  const getUpdateSensorData7 = useSelector(selectSensorData7);
  const getUpdateSensorData8 = useSelector(selectSensorData8);
  const getUpdateSensorData9 = useSelector(selectSensorData9);
  const getUpdateSensorData10 = useSelector(selectSensorData10);

  useEffect(() => {
    const fetchData = async () => {
      setBusBar1(getUpdateSensorData[0]);
      setBusBar2(getUpdateSensorData2[0]);
      setBusBar3(getUpdateSensorData3[0]);
      setBusBar4(getUpdateSensorData4[0]);
      setBusBar5(getUpdateSensorData5[0]);
      setBusBar6(getUpdateSensorData6[0]);
      setBusBar7(getUpdateSensorData7[0]);
      setBusBar8(getUpdateSensorData8[0]);
      setBusBar9(getUpdateSensorData9[0]);
      setBusBar10(getUpdateSensorData10[0]);
      setTime(getUpdateSensorData[0].TIME)
    };

    const interval = setInterval(() => {
      fetchData();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [
    getUpdateSensorData,
    getUpdateSensorData2,
    getUpdateSensorData3,
    getUpdateSensorData4,
    getUpdateSensorData5,
    getUpdateSensorData6,
    getUpdateSensorData7,
    getUpdateSensorData8,
    getUpdateSensorData9,
    getUpdateSensorData10,
  ]);

  const columns = [];
  for (let i = 1; i <= 27; i++) {
    columns.push({
      Header: i,
      accessor: i,
    });
  }

  return (
    <>
    {busbar1.length !== 0 ? (
      <div className="table-section">
      <div className="header">
        <span className="pot">
          <h1>POT NO: 1602</h1>
        </span>
        <span className="date">
          <h1>{`Date and Time: ${time}`}</h1>
        </span>
      </div>

      {/* table */}
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {columns.map((column) => (
              <th key={column.Header}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan="2">A SIDE<span>(℃)</span></th>
            <td>{busbar1.CBT1A1}</td>
            <td>{busbar1.CBT1A2}</td>
            <td>{busbar1.CBT2A1}</td>
            <td>{busbar1.CBT2A2}</td>
            <td>{busbar1.CBT3A1}</td>
            <td>{busbar1.CBT3A2}</td>
            <td>{busbar1.CBT4A1}</td>
            <td>{busbar1.CBT4A2}</td>
            <td>{busbar1.CBT5A1}</td>
            <td>{busbar1.CBT5A2}</td>
            <td>{busbar1.CBT6A1}</td>
            <td>{busbar1.CBT6A2}</td>
            <td>{busbar1.CBT7A1}</td>
            <td>{busbar1.CBT7A2}</td>
            <td>{busbar2.CBT8A1}</td>
            <td>{busbar2.CBT8A2}</td>
            <td>{busbar2.CBT9A1}</td>
            <td>{busbar2.CBT9A2}</td>
            <td>{busbar2.CBT10A1}</td>
            <td>{busbar2.CBT10A2}</td>
            <td>{busbar3.CBT11A1}</td>
            <td>{busbar3.CBT11A2}</td>
            <td>{busbar3.CBT12A1}</td>
            <td>{busbar3.CBT12A2}</td>
            <td>{busbar3.CBT13A1}</td>
            <td>{busbar3.CBT13A2}</td>
            <td>{busbar3.CBT14A1}</td>
          </tr>
          <tr>
            <td>{busbar3.CBT14A2}</td>
            <td>{busbar4.CBT15A1}</td>
            <td>{busbar4.CBT15A2}</td>
            <td>{busbar4.CBT16A1}</td>
            <td>{busbar4.CBT16A2}</td>
            <td>{busbar5.CBT17A1}</td>
            <td>{busbar5.CBT17A2}</td>
            <td>{busbar5.CBT18A1}</td>
            <td>{busbar5.CBT18A2}</td>
            <td>{busbar5.CBT19A1}</td>
            <td>{busbar5.CBT19A2}</td>
            <td>{busbar6.CBT20A1}</td>
            <td>{busbar6.CBT20A2}</td>
            <td>{busbar6.CBT21A1}</td>
            <td>{busbar6.CBT21A2}</td>
            <td>{busbar6.CBT22A1}</td>
            <td>{busbar6.CBT22A2}</td>
            <td>{busbar6.CBT23A1}</td>
            <td>{busbar6.CBT23A2}</td>
            <td>{busbar6.CBT24A1}</td>
            <td>{busbar6.CBT24A2}</td>
            <td>{busbar6.CBT25A1}</td>
            <td>{busbar6.CBT25A2}</td>
            <td>{busbar6.CBT26A1}</td>
            <td>{busbar6.CBT26A2}</td>
            <td>{busbar6.CBT27A1}</td>
            <td>{busbar6.CBT27A2}</td>
          </tr>

          {/* B Side */}
          <tr>
            <th rowSpan="2">B SIDE <span>(℃)</span></th>
            <td>{busbar7.CBT1B1}</td>
            <td>{busbar7.CBT1B2}</td>
            <td>{busbar7.CBT2B1}</td>
            <td>{busbar7.CBT2B2}</td>
            <td>{busbar7.CBT3B1}</td>
            <td>{busbar7.CBT3B2}</td>
            <td>{busbar7.CBT4B1}</td>
            <td>{busbar7.CBT4B2}</td>
            <td>{busbar7.CBT5B1}</td>
            <td>{busbar7.CBT5B2}</td>
            <td>{busbar7.CBT6B1}</td>
            <td>{busbar7.CBT6B2}</td>
            <td>{busbar7.CBT7B1}</td>
            <td>{busbar7.CBT7B2}</td>
            <td>{busbar7.CBT8B1}</td>
            <td>{busbar7.CBT8B2}</td>
            <td>{busbar7.CBT9B1}</td>
            <td>{busbar7.CBT9B2}</td>
            <td>{busbar7.CBT10B1}</td>
            <td>{busbar7.CBT10B2}</td>
            <td>{busbar8.CBT11B1}</td>
            <td>{busbar8.CBT11B2}</td>
            <td>{busbar8.CBT12B1}</td>
            <td>{busbar8.CBT12B2}</td>
            <td>{busbar8.CBT13B1}</td>
            <td>{busbar8.CBT13B2}</td>
            <td>{busbar8.CBT14B1}</td>
          </tr>
          <tr>
            <td>{busbar8.CBT14B2}</td>
            <td>{busbar9.CBT15B1}</td>
            <td>{busbar9.CBT15B2}</td>
            <td>{busbar9.CBT16B1}</td>
            <td>{busbar9.CBT16B2}</td>
            <td>{busbar9.CBT17B1}</td>
            <td>{busbar9.CBT17B2}</td>
            <td>{busbar9.CBT18B1}</td>
            <td>{busbar9.CBT18B2}</td>
            <td>{busbar10.CBT19B1}</td>
            <td>{busbar10.CBT19B2}</td>
            <td>{busbar10.CBT20B1}</td>
            <td>{busbar10.CBT20B2}</td>
            <td>{busbar10.CBT21B1}</td>
            <td>{busbar10.CBT21B2}</td>
            <td>{busbar10.CBT22B1}</td>
            <td>{busbar10.CBT22B2}</td>
            <td>{busbar10.CBT23B1}</td>
            <td>{busbar10.CBT23B2}</td>
            <td>{busbar10.CBT24B1}</td>
            <td>{busbar10.CBT24B2}</td>
            <td>{busbar10.CBT25B1}</td>
            <td>{busbar10.CBT25B2}</td>
            <td>{busbar10.CBT26B1}</td>
            <td>{busbar10.CBT20B2}</td>
            <td>{busbar10.CBT27B1}</td>
            <td>{busbar10.CBT27B2}</td>
          </tr>
        </tbody>
      </table>
    </div>
    ) : (
      <div className="overlay-table"></div>
    )}
    </>
  );
};

export default Table;
