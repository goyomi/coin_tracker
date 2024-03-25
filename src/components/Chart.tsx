import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { IChart } from "../types/coin";
// import { useState } from "react";
import Timebar from "./Timebar";
import { useState } from "react";
// import { ButtonWrapper } from "../styles/timebar";

function Chart({ selectedCoin, queries }: IChart) {
  const [days, setDays] = useState("1");
  const { data: currentData } =
    queries[days.toString() as keyof typeof queries];

  const times = {
    "1": "1H",
    "7": "1W",
    "30": "1M",
    "365": "1Y",
  };

  // chart option
  const seriesData = Array.isArray(currentData)
    ? currentData.map((data) => {
        return {
          x: new Date(data[0]),
          y: [data[1], data[2], data[3], data[4]], // [Open, High, Low, Close]
        };
      })
    : [];

  const chartOptions: ApexOptions = {
    chart: {
      type: "candlestick",
      zoom: {
        enabled: true,
        type: "x",
      },
    },
    title: {
      text: `${selectedCoin?.name} Chart`,
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#3ACC8A",
          downward: "#DF5F67",
        },
        wick: {
          useFillColor: false,
        },
      },
    },
  };

  return (
    <>
      <section>
        <Timebar times={times} setDays={setDays} />
        <ReactApexChart
          options={chartOptions}
          series={[{ data: seriesData || [] }]}
          type="candlestick"
          height={350}
          width={600}
        />
      </section>
    </>
  );
}

export default Chart;
