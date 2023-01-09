import React, { useState } from "react";
import { Chart, ArcElement, BarElement, CategoryScale, Tooltip, Legend, LinearScale } from "chart.js";
import { Data } from "./Utils/Data";
import PieChart from "./Components/PieChart";

const App = () => {

  Chart.register(ArcElement, BarElement, CategoryScale, Tooltip, Legend, LinearScale);

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "red"
        ],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Users Gained",
        data: Data.map((data) => data.id),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "red"
        ],
        borderColor: "black",
        borderWidth: 1,
      }
    ]
  });

  const options = {
    legend: false,
  }


  return <>
    {/* <div className="p-14 bg-yellow-300 flex justify-center items-center">
      <h1>Hey, Back With Tailwind..</h1>
      <h1>Yeah Thats True..</h1>
      </div> */}
    <div className="h-screen w-full p-14 flex flex-row justify-center gap-x-6 bg-yellow-300">
      <div className="h-1/2 w-1/2">
        <PieChart chartData={chartData} />
      </div>
    </div>


  </>
};

export default App;