import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { io } from "socket.io-client";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// const socket = io("http://localhost:3333/", { reconnectionAttempts: 2 });

interface ChartData {
  time: Date | string;
  value: number;
}

interface RealTimeChartProps {
  cityName: string;
  data: ChartData[];
}

function RealTimeChart({ cityName = "", data }: RealTimeChartProps) {
  return (
    <ReactApexChart
      type="line"
      height={300}
      width="100%"
      series={[
        {
          name: "PIB",
          data: data.map((data) => data.value),
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
          categories: data.map((data) => data.time.toString()),
        },
        yaxis: {
          max: 1000,
          min: 0,
        },
      }}
    />
  );
}

export default RealTimeChart;
