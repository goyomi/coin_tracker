import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { IChart } from "../types/coin";
import { useState } from "react";
import { ButtonWrapper } from "../styles/chart";

function Chart({ selectedCoin, queries }: IChart) {
  const [days, setDays] = useState(1);
  const [isActive, setIsActive] = useState("1");

  const { data: currentData } =
    queries[days.toString() as keyof typeof queries];

  // handle fn
  const handleClickBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setDays(Number(target.id));
    setIsActive(target.id);
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
        <ButtonWrapper>
          <button
            className={isActive === "1" ? "isActive" : ""}
            id="1"
            onClick={handleClickBtn}
          >
            1D
          </button>
          <button
            className={isActive === "7" ? "isActive" : ""}
            id="7"
            onClick={handleClickBtn}
          >
            1W
          </button>
          <button
            className={isActive === "30" ? "isActive" : ""}
            id="30"
            onClick={handleClickBtn}
          >
            1M
          </button>
          <button
            className={isActive === "365" ? "isActive" : ""}
            id="365"
            onClick={handleClickBtn}
          >
            1Y
          </button>
        </ButtonWrapper>
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
