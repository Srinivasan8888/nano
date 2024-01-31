import React, { useEffect, useState } from "react";
import "./topnav.scss";
import UserInfo from "../user-info/UserInfo";
import { data } from "../../constants";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectSensorData } from "../../redux/update/update.selector";

const TopNav = () => {
  const [active, setActive] = useState(false);
  const [dataVal, setData] = useState();

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const getUpdateSensorData = useSelector(selectSensorData);

  useEffect(() => {
    const currentTime = () => {
      setCurrentDateTime(new Date());
    };
    const interval = setInterval(() => {
      currentTime();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    setData(getUpdateSensorData[0]?.TIME);
  }, [getUpdateSensorData]);

  useEffect(() => {
    const fetchTime = () => {
      const systemDateTime = new Date(currentDateTime);
      const apiDateTime = new Date(dataVal);

      // Calculate the time difference in milliseconds
      let timeDifferenceInMillis = Math.abs(systemDateTime - apiDateTime);
      // console.log("api", apiDateTime);
      // console.log("system",systemDateTime);
      let timeDifferenceInSeconds = timeDifferenceInMillis / 1000;
      // console.log("Difference",timeDifferenceInSeconds);

      // Set the maximum allowed difference to 5 minutes (300,000 milliseconds)
      let maxDifference = 3 * 60 * 1000;

      // Compare the time difference with the maximum allowed difference
      if (timeDifferenceInMillis <= maxDifference) {
        setActive(true);
        console.log(
          "Active: Data is being sent within the last 3 minutes.",
          timeDifferenceInSeconds
        );
      } else {
        setActive(false);
        console.log(
          "Non-active: Data has not been sent within the last 3 minutes.",
          timeDifferenceInSeconds
        );
      }
    };

    const interval = setInterval(() => {
      fetchTime();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const openSidebar = () => {
    document.body.classList.add("sidebar-open");
  };

  return (
    <div className="topnav">
      <div
        className={`active-status ${active === true ? "active" : "non-active"}`}
      >
        <i className="bx bxs-error-alt text-2xl"></i>
        <span className="text-base font-serif">Non-Active</span>
      </div>
      <UserInfo user={data.user} />
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  );
};

export default TopNav;
