import "../dashboard/dashboard.scss";
import Vibration from "./Vibration";
import Acoustic from "./Acoustic";
import Humiduty from "./Humiduty";
import { useEffect, useState } from "react";

const Dashboard = () => {

  const [data, setData] = useState ();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      var url;
      try {
        url = 'https://vedanta.xyma.live/sensor/getfullBackupsensorModel6';
        const response = await fetch(url);
        const dataVal = await response.json();
        setData(dataVal);
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
  })

  console.log(data)

  return (
    <div className="dashboard">
      <div className="boxes">
      <div className="vibration box">
        <h1>Vibration</h1>
        <p>43</p>
      </div>
      <div className="acoustic box">
      <h1>Acoustic</h1>
          {/* <Acoustic /> */}
          <p>43</p>
      </div>
      <div className="temperature box">
      <h1>Temperature</h1>
      <p>43</p>
      </div>
      <div className="humiduty box">
      <h1>Humiduty</h1>
      {/* <Humiduty /> */}
      <p>43</p>
      </div>
      <div className="rpm box">
      <h1>Rpm</h1>
      <p>43</p>
      </div>
      <div className="magnetic box">
      <h1>Magnetic_flex</h1>
      <p>43</p>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
