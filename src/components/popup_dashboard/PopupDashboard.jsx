import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../popup_dashboard/popupdashboard.scss";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const generateDemoData = (info, startSensorIndex, endSensorIndex) => {
  const data = [];
  for (let index = 0; index < info.length; index++) {
    for (let i = startSensorIndex; i <= endSensorIndex; i++) {
      if (i <= 108) {
        data.push({
          id: `${i}`,
          sensor: `Sensor ${i}`,
          value: `${info[index][`sensor${i}`]} °c`,
          updatedAt: info[index]?.updatedAt,
        });
      }
    }
  }
  return data;
};

const PopupDashboard = ({ open_dash, onClose, waveGuide }) => {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!open_dash) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://52.66.175.77/sensor/updated"
        );
        const infoVal = await response.json();
        setInfo(infoVal);
      } catch (error) {
        setError(error);
      }
    };

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [open_dash]);

  if (!open_dash) {
    return null;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const startSensorIndex = (waveGuide - 1) * 10 + 1;
  const endSensorIndex = waveGuide * 10;

  const data = generateDemoData(info, startSensorIndex, endSensorIndex);

  // const color = generateColor(data);

  return ReactDOM.createPortal(
    <>
      <div className="overlay-dash" onClick={onClose} />

      {info.length !== 0 ? (
        <div className="popupstyledash">
          {data.map((item, index) => {
            return (
              // style={{backgroundColor: `${color[index]}`}}
              <div className="box" key={index}>
                <div className="left text-base">
                  <DeviceThermostatIcon className="icon" />
                </div>
                <div className="right flex flex-col justify-around gap-2">
                  <div className="sensor-name text-xl">{item.sensor}</div>
                  <div className="value text-xl">{item.value}</div>
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
      )}
    </>,
    document.getElementById("portaldashboard")
  );
};

export default PopupDashboard;