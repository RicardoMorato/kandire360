import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ChartData {
  time: Date | string;
  value: number;
}

interface RealTimeChartProps {
  cityName: string;
}

let today = new Date();

function RealTimeChart({ cityName = "" }: RealTimeChartProps) {
  const [chartData, setChartData] = useState([] as ChartData[]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextDay = new Date(today.setDate(today.getDate() + 1));

      const formattedDate = `
                ${nextDay.getFullYear()}
                -
                ${
                  nextDay.getMonth() + 1 >= 10
                    ? nextDay.getMonth() + 1
                    : `0${nextDay.getMonth() + 1}`
                }
                -
                ${
                  nextDay.getDate() >= 10
                    ? nextDay.getDate()
                    : `0${nextDay.getDate()}`
                }
            `.replace(/\s/g, ""); // To remove any white spaces

      setChartData((prevState) => [
        ...prevState,
        {
          time: formattedDate,
          value: Math.floor(Math.random() * 100),
        },
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, [cityName]);

  return (
    <ReactApexChart
      type="line"
      height={300}
      width="100%"
      series={[
        {
          name: "PIB",
          data: chartData.map((data) => data.value),
        },
      ]}
      options={{
        chart: {
          id: "realtime",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000,
            },
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: `Variação do PIB da cidade entre 2010 e 2019 (${cityName})`,
          align: "left",
        },
        markers: {
          size: 0,
        },
        xaxis: {
          categories: chartData.map((data) => data.time.toString()),
        },
        yaxis: {
          max: 100,
          min: 0,
        },
      }}
    />
  );
}

export default RealTimeChart;
