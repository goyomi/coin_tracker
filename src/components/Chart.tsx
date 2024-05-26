import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { UseQueryResult } from "@tanstack/react-query";
import { ICoin } from "../contexts/Context";
import styled from "styled-components";

interface IChartQueries {
  "1": UseQueryResult<IOhlc[], unknown>;
  "7": UseQueryResult<IOhlc[], unknown>;
  "30": UseQueryResult<IOhlc[], unknown>;
  "365": UseQueryResult<IOhlc[], unknown>;
}

interface IOhlc {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
}

interface IChart {
  selectedCoin: ICoin | undefined;
  queries: IChartQueries;
  toggleOn: boolean;
  currentData: IOhlc[] | undefined;
}

const ApexChart = styled(ReactApexChart)<{ toggleOn: boolean }>`
  .apexcharts-menu.apexcharts-menu-open {
    background-color: ${({ toggleOn }) => (toggleOn ? "#f4f4f4" : "#fff")};
  }
  .apexcharts-menu.apexcharts-menu-open > .apexcharts-menu-item {
    color: ${({ toggleOn }) => (toggleOn ? "#333" : "initial")};
  }
  .apexcharts-menu.apexcharts-menu-open > .apexcharts-menu-item:hover {
    background-color: ${({ toggleOn }) => (toggleOn ? "rgb(51, 117, 255, 0.8)" : "#ddd")};
  }
`;

function Chart({ selectedCoin, toggleOn, currentData }: IChart) {
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
    responsive: [{ breakpoint: 768, options: { title: { style: { fontSize: "18px" } } } }],
  };

  return (
    <>
      <section>
        <ApexChart
          toggleOn={toggleOn}
          options={chartOptions}
          series={[{ data: seriesData || [] }]}
          type="candlestick"
          width={"100%"}
        />
      </section>
    </>
  );
}

export default Chart;
