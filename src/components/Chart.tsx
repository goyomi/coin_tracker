import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Timebar from "./Timebar";
import { useState } from "react";
import { IChartQueries, ICoin } from "../types/type";
import { theme } from "../styles/theme";

interface IChart {
  selectedCoin: ICoin | undefined;
  queries: IChartQueries;
  toggleOn: boolean;
}

function Chart({ selectedCoin, queries, toggleOn }: IChart) {
  const [days, setDays] = useState("1");

  const { data: currentData } = queries[days.toString() as keyof typeof queries];
  const times = { "1": "1h", "7": "1w", "30": "1m", "365": "1y" };

  // chart option
  const seriesData = Array.isArray(currentData)
    ? currentData.map((data) => {
        return {
          x: new Date(data[0]),
          y: [data[1], data[2], data[3], data[4]], // [Open, High, Low, Close]
        };
      })
    : [];

  const DARK_MODE_COLOR = "#E1E9F0";
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
      style: {
        fontSize: "20px",
        fontWeight: "normal",
        color: toggleOn ? DARK_MODE_COLOR : "",
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: toggleOn ? DARK_MODE_COLOR : "",
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: toggleOn ? DARK_MODE_COLOR : "",
        },
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#3ACC8A",
          downward: "#DF5F67",
        },
        wick: {
          useFillColor: true,
        },
      },
    },
    tooltip: {
      theme: toggleOn ? "dark" : "light",
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
          width={700}
        />
      </section>
    </>
  );
}

export default Chart;
