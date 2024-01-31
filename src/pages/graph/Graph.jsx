import React, { useEffect, useState } from "react";
import "../graph/graph.scss";
import TimePopup from "./TimePopup";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import 'chartjs-plugin-zoom';
Chart.register(...registerables);


const Graph = () => {

  const [isOpentime, setIsOpentime] = useState();

  const [infoGraph, setInfoGraph] = useState([]);
  const [error, setError] = useState(false);

  const [StartTime, setStartTime] = useState(null);
  const [EndTime, setEndTime] = useState(null);

  const [selectBusbar, setSelectBusbar] = useState('sensorModel1');

  const [sensorName, setSensorName] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      var url;
      if (StartTime != null) {
        url = `http://localhost:4000/sensor/gettime?start=${StartTime}&end=${EndTime}&busbar=${selectBusbar}`;
      }else{
        url = `http://localhost:4000/sensor/getfull${selectBusbar}`;
      }
      try {
        console.log(url);
        const response = await fetch(url);
        const infoVal = await response.json();
        setInfoGraph(infoVal);
      } catch (error) {
        setError(error);
      }
    };
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [StartTime, EndTime, selectBusbar]);

  useEffect(() => {
    const data = [];
    for (const key in infoGraph[0]) {
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
    setSensorName(data);
  }, [infoGraph]);
  
  const borderColors = [
  "#1f77b4", // Blue
  "#ff7f0e", // Orange
  "#2ca02c", // Green
  "#d62728", // Red
  "#9467bd", // Purple
  "#8c564b", // Brown
  "#e377c2", // Pink
  "#7f7f7f", // Gray
  "#bcbd22", // Yellow
  "#17becf", // Cyan
  "#aec7e8", // Light Blue
  "#ffbb78", // Light Orange
  "#98df8a", // Light Green
  "#ff9896", // Light Red
  "#c5b0d5", // Light Purple
  "#c49c94", // Light Brown
  "#f7b6d2", // Light Pink
  "#c7c7c7"  // Light Gray
  ];

    const datasets = () => {
      const result = [];
    for (let i = 0; i < sensorName.length; i++) {
      var sensor = [];
      for (let j = 0; j < infoGraph.length; j++) {
        sensor[j] = infoGraph[j]?.[sensorName[i]];
      }
      console.log(sensor)
      result.push({
         label: sensorName[i],
          backgroundColor: borderColors[i % borderColors.length],
          borderColor: borderColors[i % borderColors.length],
          borderWidth: 1,
          data: sensor,
      })
    }
    return result;
    }
  var chartDatasets = datasets();

  var time = [];
  for (let index = 0; index < infoGraph.length; index++) {
    time[index] = infoGraph[index]?.TIME;
  }
  //Chart data
  const data = {
    labels: time,
    datasets: chartDatasets,
  };

  // Chart options
  const options = {
    scales: {
      y: {
        // beginAtZero: true,
        min: 150,
        max: 320,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy', // Adjust the mode based on your preference ('x', 'y', or 'xy')
        },
      },
    },
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!infoGraph) {
    return <div>Loading...</div>;
  }

  const handleTime = (start, end) => {
    setStartTime(start);
    setEndTime(end);
  };

  const handleClick = (data) => {
    switch (data) {
      case 1:
        setSelectBusbar('sensorModel1');
        break;
      case 2:
        setSelectBusbar('sensorModel2');
        break;
      case 3:
        setSelectBusbar('sensorModel3');
        break;
      case 4:
        setSelectBusbar('sensorModel4');
        break;
      case 5:
        setSelectBusbar('sensorModel5');
        break;
      case 6:
        setSelectBusbar('sensorModel6');
        break;
        case 7:
        setSelectBusbar('sensorModel7');
        break;
        case 8:
        setSelectBusbar('sensorModel8');
        break;
        case 9:
        setSelectBusbar('sensorModel9');
        break;
        case 10:
        setSelectBusbar('sensorModel10');
        break;
      default:
        setSelectBusbar('sensorModel1');
    }
  };

  return (
    <>
    {infoGraph.length !== 0 ? (
      <div className="container">
      <div className="box-graph">
        <i className={`bx bx-station live-icon ${StartTime === null ?"active-live":"" } `} onClick={()=>{setStartTime(null)}}></i>
        <Line data={data} options={options} className="graph"/>
      </div>

      <div className="side_container">
        <div className="a_side">
          <div className="name_a">
            <span>A Side</span>
          </div>
          <div
            className="btn"
            onClick={() => {
              setIsOpentime(true);
              handleClick(1);
            }}
          >
            BusBar 1
          </div>
          <div
            className="btn"
            onClick={() => {
              setIsOpentime(true);
              handleClick(2);
            }}
          >
            BusBar 2
          </div>
          <div
            className="btn"
            onClick={() => {
              setIsOpentime(true);
              handleClick(3);
            }}
          >
            BusBar 3
          </div>
          <div
            className="btn"
            onClick={() => {
              setIsOpentime(true);
              handleClick(4);
            }}
          >
            BusBar 4
          </div>
          <div
            className="btn"
            onClick={() => {
              setIsOpentime(true);
              handleClick(5);
            }}
          >
            BusBar 5
          </div>
          <div
            className="btn"
            onClick={() => {
              setIsOpentime(true);
              handleClick(6);
            }}
          >
            BusBar 6
          </div>
        </div>

        <div className="b_side">
          <div className="name_b">
            <span>B Side</span>
          </div>
          <div
            className="btn"
            onClick={() => {
              setIsOpentime(true);
              handleClick(7);
            }}
          >
            BusBar 7
          </div>
          <div
            className="btn"
            onClick={() => {
              setIsOpentime(true);
              handleClick(8);
            }}
          >
            BusBar 8
          </div>
          <div
            className="btn"
            onClick={() => {
              setIsOpentime(true);
              handleClick(9);
            }}
          >
            BusBar 9
          </div>
          <div
            className="btn"
            onClick={() => {
              setIsOpentime(true);
              handleClick(10);
            }}
          >
            BusBar 10
          </div>
        </div>
      </div>

      <TimePopup
        openTime={isOpentime}
        closeTime={() => setIsOpentime(false)}
        onDataReceived={handleTime}
      />
    </div>
    ) : (
      <div className="overlay-table"></div>
    )}
    </>
  );
};

export default Graph;
