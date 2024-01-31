import React from "react";
import ReactApexChart from "react-apexcharts";

const Vibration = () => {

    const options = {
        series: [55],
        chart: {
          height: 240, // Adjusted height
          type: 'radialBar',
          offsetY: -6
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 40, // Adjusted offsetY
                text: 'Vibration',
                horizontalAlign: 'center'
              },
              value: {
                offsetY: 10,
                fontSize: '35px',
                color: 'white',
                formatter: function (val) {
                  return val;
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
      };
      
      
    return (
      <ReactApexChart
        options={options}
        series={options.series}
        type={options.chart.type}
        height={options.chart.height}
      />
    );
  };
  
  export default Vibration;
  