import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { IChart } from "../types/coin";
import Timebar from "./Timebar";
import { useState } from "react";

function Chart({ selectedCoin, queries }: IChart) {
  const [days, setDays] = useState("1");
  const { data: currentData } = queries[days.toString() as keyof typeof queries];

  const times = {
    "1": "1h",
    "7": "1w",
    "30": "1m",
    "365": "1y",
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
