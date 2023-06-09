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
  data: ChartData[];
  maxRange: number;
}

function RealTimeChart({ cityName = "", data, maxRange }: RealTimeChartProps) {
  return (
    <ReactApexChart
      type="line"
      height={300}
      width="100%"
      series={[
        {
          name: "PIB",
          data: data.map((data) =>
            maxRange >= 10_000_000
              ? Math.round(data.value / 1_000_000)
              : maxRange > 2_000_000
              ? Number((data.value / 1_000_000).toFixed(1))
              : Math.round(data.value / 1000)
          ),
        },
      ]}
      options={{
        chart: {
          id: "realtime",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 500,
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
        subtitle: {
          text: maxRange > 2_000_000 ? "Em milhões de R$" : "Em milhares de R$",
          align: "left",
        },
        markers: {
          size: 0,
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          categories: data.map((data) =>
            new Date(data.time.toString()).getFullYear()
          ),
        },
        yaxis: {
          max:
            maxRange >= 10_000_000
              ? Math.round(maxRange / 1_000_000)
              : maxRange > 2_000_000
              ? Number((maxRange / 1_000_000).toFixed(1))
              : Math.round(maxRange / 1000),
          min: 0,
        },
      }}
    />
  );
}

export default RealTimeChart;
